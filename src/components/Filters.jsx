import { ChevronDown } from 'lucide-react'
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from '../store/ticketStore'

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="appearance-none rounded-lg border border-border bg-surface py-2.5 pl-3 pr-9 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand-soft"
      >
        <option value="All">{label}: All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        size={15}
        strokeWidth={2}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint"
      />
    </div>
  )
}

export default function Filters({
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
}) {
  return (
    <div className="flex gap-2.5">
      <FilterSelect
        label="Status"
        value={statusFilter}
        onChange={onStatusChange}
        options={STATUS_OPTIONS}
      />
      <FilterSelect
        label="Priority"
        value={priorityFilter}
        onChange={onPriorityChange}
        options={PRIORITY_OPTIONS}
      />
    </div>
  )
}
