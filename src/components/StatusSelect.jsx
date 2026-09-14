import { ChevronDown } from 'lucide-react'
import { STATUS_OPTIONS } from '../store/ticketStore'

const DOT_COLOR = {
  Open: 'bg-status-open',
  'In Progress': 'bg-status-progress',
  Resolved: 'bg-status-resolved',
}

export default function StatusSelect({ value, onChange, size = 'sm' }) {
  const padding = size === 'sm' ? 'py-1.5 pl-2.5 pr-7 text-xs' : 'py-2.5 pl-3 pr-8 text-sm'

  return (
    <div className="relative inline-flex items-center" onClick={(e) => e.stopPropagation()}>
      <span
        className={`pointer-events-none absolute left-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${DOT_COLOR[value]}`}
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Change ticket status"
        className={`appearance-none rounded-lg border border-border-strong bg-surface pl-6 font-medium text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand-soft ${padding}`}
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        strokeWidth={2}
        className="pointer-events-none absolute right-2 text-ink-faint"
      />
    </div>
  )
}
