export function Spinner({ label = "Loading…" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-slate">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-accent" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

export function EmptyState({ icon: Icon, title, message, action }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-mist px-6 py-16 text-center">
      {Icon && (
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-accent-dark shadow-card">
          <Icon size={26} />
        </span>
      )}
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="max-w-md text-sm text-slate">{message}</p>
      {action}
    </div>
  );
}
