import { Inbox, X } from 'lucide-react'

export default function EmptyState({ onClearFilters }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg text-ink-faint">
        <Inbox size={20} strokeWidth={2} />
      </div>
      <div>
        <p className="text-sm font-medium text-ink">No tickets found</p>
        <p className="mt-1 text-sm text-ink-soft">Try a different search term or adjust your filters.</p>
      </div>
      <button
        type="button"
        onClick={onClearFilters}
        className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
      >
        <X size={14} strokeWidth={2} />
        Clear search & filters
      </button>
    </div>
  )
}
