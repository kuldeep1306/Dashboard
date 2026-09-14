export default function StatsCard({ label, value, icon: Icon, accent }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 sm:p-5">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: accent.bg, color: accent.fg }}
      >
        <Icon size={19} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-semibold tracking-tight text-ink">{value}</p>
        <p className="truncate text-sm text-ink-soft">{label}</p>
      </div>
    </div>
  )
}
