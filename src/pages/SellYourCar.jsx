import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, CheckCircle2, X, LoaderCircle, ImagePlus } from "lucide-react";
import { PROVINCES, PROVINCE_CITIES } from "../data/vehicles";

const initialForm = {
  make: "",
  model: "",
  year: "",
  price: "",
  mileage: "",
  transmission: "",
  fuelType: "",
  engine: "",
  description: "",
  province: "",
  city: "",
  sellerName: "",
  whatsapp: "",
};

const inputCls =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-accent";

function Field({ label, required = true, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-accent-dark">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

export default function SellYourCar() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const addImages = (e) => {
    const files = Array.from(e.target.files || []);
    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews].slice(0, 8));
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errs = {};
    if (!form.make.trim()) errs.make = "Make is required";
    if (!form.model.trim()) errs.model = "Model is required";
    if (
      !form.year ||
      form.year < 1950 ||
      form.year > new Date().getFullYear() + 1
    )
      errs.year = "Enter a valid year";
    if (!form.price || Number(form.price) <= 0)
      errs.price = "Enter a valid price";
    if (!form.mileage || Number(form.mileage) < 0)
      errs.mileage = "Enter valid mileage";
    if (!form.transmission) errs.transmission = "Select transmission";
    if (!form.fuelType) errs.fuelType = "Select fuel type";
    if (!form.description.trim()) errs.description = "Description is required";
    if (!form.province) errs.province = "Select a province";
    if (!form.city) errs.city = "Select a city";
    if (!form.sellerName.trim()) errs.sellerName = "Your name is required";
    if (!/^27\d{9}$/.test(form.whatsapp.replace(/\s/g, "")))
      errs.whatsapp = "Enter a valid WhatsApp number, e.g. 27821234567";
    if (images.length === 0)
      errs.images = "Add at least one photo of the vehicle";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      document
        .querySelector(".field-error")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    // Simulated submission — will be replaced by Supabase insert later.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <CheckCircle2 size={64} className="mx-auto text-accent-dark" />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink">
          Listing Submitted!
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          Thank you, {form.sellerName}. Your {form.year} {form.make}{" "}
          {form.model} has been received and will be reviewed before going live
          on DoomOS.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              setForm(initialForm);
              setImages([]);
              setSubmitted(false);
            }}
            className="rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-charcoal"
          >
            Advertise Another Car
          </button>
          <button
            onClick={() => navigate("/browse")}
            className="rounded-xl border border-line px-6 py-3 text-sm font-bold text-ink transition hover:border-accent"
          >
            Browse Cars
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-accent">
            <Camera size={26} />
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Sell Your Car on DoomOS
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate">
            Advertise your vehicle to buyers across South Africa. Fill in the
            details below — it only takes a few minutes.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 space-y-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10"
        >
          {/* Vehicle details */}
          <fieldset className="space-y-5">
            <legend className="text-lg font-extrabold text-ink">
              Vehicle Details
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Make" error={errors.make}>
                <input
                  className={inputCls}
                  placeholder="e.g. Toyota"
                  value={form.make}
                  onChange={set("make")}
                />
              </Field>
              <Field label="Model" error={errors.model}>
                <input
                  className={inputCls}
                  placeholder="e.g. Hilux 2.8 GD-6 Raider"
                  value={form.model}
                  onChange={set("model")}
                />
              </Field>
              <Field label="Year" error={errors.year}>
                <input
                  className={inputCls}
                  type="number"
                  placeholder="e.g. 2021"
                  value={form.year}
                  onChange={set("year")}
                />
              </Field>
              <Field label="Price (R)" error={errors.price}>
                <input
                  className={inputCls}
                  type="number"
                  placeholder="e.g. 450000"
                  value={form.price}
                  onChange={set("price")}
                />
              </Field>
              <Field label="Mileage (km)" error={errors.mileage}>
                <input
                  className={inputCls}
                  type="number"
                  placeholder="e.g. 65000"
                  value={form.mileage}
                  onChange={set("mileage")}
                />
              </Field>
              <Field label="Engine capacity" error={errors.engine}>
                <input
                  className={inputCls}
                  placeholder="e.g. 2.8L"
                  value={form.engine}
                  onChange={set("engine")}
                />
              </Field>
              <Field label="Transmission" error={errors.transmission}>
                <select
                  className={inputCls}
                  value={form.transmission}
                  onChange={set("transmission")}
                >
                  <option value="">Select…</option>
                  {["Manual", "Automatic", "CVT"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Fuel type" error={errors.fuelType}>
                <select
                  className={inputCls}
                  value={form.fuelType}
                  onChange={set("fuelType")}
                >
                  <option value="">Select…</option>
                  {["Petrol", "Diesel", "Hybrid", "Electric"].map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Description" error={errors.description}>
              <textarea
                className={`${inputCls} min-h-32 resize-y`}
                placeholder="Describe the condition, service history, extras and reason for selling…"
                value={form.description}
                onChange={set("description")}
              />
            </Field>
          </fieldset>

          {/* Location */}
          <fieldset className="space-y-5 border-t border-line pt-6">
            <legend className="text-lg font-extrabold text-ink">
              Location
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Province" error={errors.province}>
                <select
                  className={inputCls}
                  value={form.province}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      province: e.target.value,
                      city: "",
                    }))
                  }
                >
                  <option value="">Select province…</option>
                  {PROVINCES.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Field>
              <Field label="City / Town" error={errors.city}>
                <select
                  className={inputCls}
                  value={form.city}
                  onChange={set("city")}
                  disabled={!form.province}
                >
                  <option value="">
                    {form.province ? "Select city…" : "Choose a province first"}
                  </option>
                  {(PROVINCE_CITIES[form.province] || []).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>
          </fieldset>

          {/* Photos */}
          <fieldset className="space-y-3 border-t border-line pt-6">
            <legend className="text-lg font-extrabold text-ink">
              Vehicle Photos
            </legend>
            <p className="text-xs text-slate">
              Upload up to 8 clear photos. First photo becomes the cover image.
            </p>
            <label
              className={`field-error flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition hover:border-accent hover:bg-accent-soft ${
                errors.images
                  ? "border-red-300 bg-red-50"
                  : "border-line bg-mist"
              }`}
            >
              <ImagePlus size={28} className="text-accent-dark" />
              <span className="text-sm font-semibold text-ink">
                Click to upload photos
              </span>
              <span className="text-xs text-slate">
                JPG or PNG • max 8 images
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={addImages}
              />
            </label>
            {errors.images && (
              <p className="text-xs font-medium text-red-600">
                {errors.images}
              </p>
            )}
            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={img.url}
                      alt={`Upload ${i + 1}`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    {i === 0 && (
                      <span className="absolute left-2 top-2 rounded-full bg-ink/85 px-2 py-0.5 text-[10px] font-bold text-white">
                        COVER
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg text-white transition hover:bg-red-600"
                      aria-label="Remove photo"
                    >
                      <X size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </fieldset>

          {/* Seller */}
          <fieldset className="space-y-5 border-t border-line pt-6">
            <legend className="text-lg font-extrabold text-ink">
              Your Details
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" error={errors.sellerName}>
                <input
                  className={inputCls}
                  placeholder="e.g. Sipho Mokoena"
                  value={form.sellerName}
                  onChange={set("sellerName")}
                />
              </Field>
              <Field label="WhatsApp number" error={errors.whatsapp}>
                <input
                  className={inputCls}
                  type="tel"
                  placeholder="e.g. 27821234567"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                />
              </Field>
            </div>
            <p className="rounded-xl bg-accent-soft p-3 text-xs leading-relaxed text-slate">
              Buyers will contact you directly on WhatsApp. Never share banking
              details or OTPs with unknown parties.
            </p>
          </fieldset>

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-ink transition hover:bg-accent-dark hover:text-white disabled:opacity-60"
          >
            {submitting ? (
              <>
                <LoaderCircle size={18} className="animate-spin" /> Submitting…
              </>
            ) : (
              "Submit Listing"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
