import TicketRow from './TicketRow'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import EmptyState from './EmptyState'

export default function TicketList({
  tickets,
  loading,
  error,
  onRetry,
  onOpen,
  onStatusChange,
  onClearFilters,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {!loading && !error && tickets.length > 0 && (
        <div className="hidden border-b border-border px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-ink-faint md:grid md:grid-cols-[minmax(0,2fr)_100px_150px_110px_20px] md:gap-4">
          <span>Ticket</span>
          <span>Priority</span>
          <span>Status</span>
          <span>Created</span>
          <span />
        </div>
      )}

      {loading && <LoadingState />}

      {!loading && error && <ErrorState message={error} onRetry={onRetry} />}

      {!loading && !error && tickets.length === 0 && (
        <EmptyState onClearFilters={onClearFilters} />
      )}

      {!loading && !error && tickets.length > 0 && (
        <div className="divide-y divide-border">
          {tickets.map((ticket) => (
            <TicketRow
              key={ticket.id}
              ticket={ticket}
              onOpen={onOpen}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  )
}
