import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 min-w-[200px]">
      <Search
        size={17}
        strokeWidth={2}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by customer or subject"
        aria-label="Search tickets by customer name or subject"
        className="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-9 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand-soft"
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-ink-faint hover:bg-bg hover:text-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
        >
          <X size={15} />
        </button>
      )}
    </div>
  )
}
