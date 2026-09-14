const STATUS_STYLES = {
  Open: 'text-status-open bg-status-open-bg',
  'In Progress': 'text-status-progress bg-status-progress-bg',
  Resolved: 'text-status-resolved bg-status-resolved-bg',
}

const STATUS_DOT = {
  Open: 'bg-status-open',
  'In Progress': 'bg-status-progress',
  Resolved: 'bg-status-resolved',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap ${STATUS_STYLES[status] || 'text-ink-soft bg-bg'}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status] || 'bg-ink-faint'}`} />
      {status}
    </span>
  )
}
