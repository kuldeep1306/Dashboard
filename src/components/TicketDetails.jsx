import { useEffect } from 'react'
import { X, Mail, Calendar } from 'lucide-react'
import PriorityBadge from './PriorityBadge'
import StatusSelect from './StatusSelect'

function formatDateTime(isoString) {
  return new Date(isoString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default function TicketDetails({ ticket, onClose, onStatusChange }) {
  useEffect(() => {
    if (!ticket) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [ticket, onClose])

  if (!ticket) return null

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close ticket details"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-ink/30 backdrop-blur-[1px]"
      />

      {/* Panel */}
      <div className="relative flex h-full w-full animate-slide-in flex-col bg-surface shadow-2xl sm:max-w-lg">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
              Ticket #{ticket.id}
            </p>
            <h2 className="mt-0.5 truncate text-base font-semibold text-ink">{ticket.subject}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-lg p-1.5 text-ink-faint transition-colors hover:bg-bg hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {/* Customer + meta */}
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand-dark">
                {ticket.customer.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{ticket.customer.name}</p>
                <p className="flex items-center gap-1 truncate text-xs text-ink-soft">
                  <Mail size={12} strokeWidth={2} />
                  {ticket.customer.email}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <PriorityBadge priority={ticket.priority} />
              <StatusSelect value={ticket.status} onChange={(s) => onStatusChange(ticket.id, s)} />
              <span className="ml-auto flex items-center gap-1.5 text-xs text-ink-faint">
                <Calendar size={12} strokeWidth={2} />
                {formatDateTime(ticket.createdAt)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="border-b border-border px-5 py-4">
            <h3 className="text-xs font-medium uppercase tracking-wide text-ink-faint">Issue description</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">{ticket.description}</p>
          </div>

          {/* Conversation */}
          <div className="px-5 py-4">
            <h3 className="text-xs font-medium uppercase tracking-wide text-ink-faint">Conversation</h3>
            <div className="mt-3 space-y-3">
              {ticket.messages.map((msg) => {
                const isSupport = msg.sender === 'support'
                return (
                  <div key={msg.id} className={`flex ${isSupport ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] ${isSupport ? 'items-end' : 'items-start'} flex flex-col`}>
                      <div
                        className={`rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                          isSupport
                            ? 'rounded-tr-sm bg-brand text-white'
                            : 'rounded-tl-sm bg-bg text-ink'
                        }`}
                      >
                        {msg.message}
                      </div>
                      <span className="mt-1 px-1 text-[11px] text-ink-faint">
                        {isSupport ? 'Support' : ticket.customer.name.split(' ')[0]} · {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
