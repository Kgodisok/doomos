// Reads mp4 moov/tkhd boxes to get display width/height, plus avc1 SPS for encoded size
const fs = require('fs');

function findBoxes(buf, start, end, path, out) {
  let pos = start;
  while (pos + 8 <= end) {
    const size = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (size < 8) break;
    out.push({ type, pos, size, path: path + '/' + type });
    if (['moov', 'trak', 'mdia', 'minf', 'stbl'].includes(type)) {
      findBoxes(buf, pos + 8, pos + size, path + '/' + type, out);
    }
    pos += size;
  }
}

for (const file of process.argv.slice(2)) {
  const buf = fs.readFileSync(file);
  const boxes = [];
  findBoxes(buf, 0, buf.length, '', boxes);
  const info = { file, duration: null, tracks: [] };
  const mvhd = buf.indexOf('mvhd');
  if (mvhd > 0) {
    const ver = buf[mvhd + 4];
    if (ver === 0) info.duration = buf.readUInt32BE(mvhd + 12 + 4 + 8) / buf.readUInt32BE(mvhd + 12 + 4 + 4);
    else info.duration = Number(buf.readBigUInt64BE(mvhd + 16 + 4 + 16)) / buf.readUInt32BE(mvhd + 16 + 4 + 4);
  }
  let idx = -1;
  for (const b of boxes.filter((b) => b.type === 'tkhd')) {
    idx++;
    const p = b.pos + 8;
    const ver = buf[p];
    let off;
    if (ver === 0) off = p + 4 + 4 + 4 + 4 + 4 + 4 + 8 + 8 + 2 + 2 + 2 + 2 + 4 + 4 + 4 + 4 + 4 + 8;
    else if (ver === 1) off = p + 4 + 8 + 8 + 4 + 4 + 4 + 8 + 8 + 2 + 2 + 2 + 2 + 4 + 4 + 4 + 4 + 4 + 8;
    else off = p + 4 + 16 + 4 + 4 + 8 + 8 + 2 + 2 + 2 + 2 + 4 + 4 + 4 + 4 + 4 + 8;
    const w = buf.readUInt32BE(off) / 65536;
    const h = buf.readUInt32BE(off + 4) / 65536;
    // rotation from matrix
    const mOff = off - 4 * 8;
    const matrix = [];
    for (let i = 0; i < 9; i++) matrix.push(buf.readInt32BE(mOff + i * 4) / 65536);
    const rot = matrix[0] === 0 && matrix[4] === 0 ? (matrix[1] === 1 ? 90 : 270) : 0;
    info.tracks.push({ track: idx, width: w, height: h, rotation: rot });
  }
  // encoded dimensions from avc1 SPS
  const avc1 = buf.indexOf('avc1');
  if (avc1 > 0) info.avc1_found = true;
  console.log(JSON.stringify(info, null, 2));
}
