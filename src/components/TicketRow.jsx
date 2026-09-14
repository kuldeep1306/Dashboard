import { ChevronRight } from 'lucide-react'
import PriorityBadge from './PriorityBadge'
import StatusSelect from './StatusSelect'

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function TicketRow({ ticket, onOpen, onStatusChange }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(ticket.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(ticket.id)
        }
      }}
      className="group grid cursor-pointer grid-cols-1 gap-2 px-4 py-4 transition-colors hover:bg-bg focus:outline-none focus-visible:bg-bg sm:px-5 md:grid-cols-[minmax(0,2fr)_100px_150px_110px_20px] md:items-center md:gap-4"
    >
      {/* Customer + subject */}
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-ink">{ticket.customer.name}</p>
        <p className="mt-0.5 truncate text-sm text-ink-soft">{ticket.subject}</p>
      </div>

      {/* Priority + status on mobile row, priority-only column on desktop */}
      <div className="flex items-center gap-2 md:contents">
        <div className="md:block">
          <PriorityBadge priority={ticket.priority} />
        </div>
        <div className="md:hidden">
          <StatusSelect
            value={ticket.status}
            onChange={(newStatus) => onStatusChange(ticket.id, newStatus)}
          />
        </div>
        <span className="ml-auto text-xs text-ink-faint md:hidden">{formatDate(ticket.createdAt)}</span>
      </div>

      {/* Status select - desktop only column */}
      <div className="hidden md:block">
        <StatusSelect
          value={ticket.status}
          onChange={(newStatus) => onStatusChange(ticket.id, newStatus)}
        />
      </div>

      {/* Created date - desktop only column */}
      <p className="hidden text-sm text-ink-soft md:block">{formatDate(ticket.createdAt)}</p>

      <ChevronRight
        size={16}
        strokeWidth={2}
        className="hidden text-ink-faint transition-transform group-hover:translate-x-0.5 md:block"
      />
    </div>
  )
}
