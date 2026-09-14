const PRIORITY_STYLES = {
  Low: 'text-priority-low bg-priority-low-bg',
  Medium: 'text-priority-medium bg-priority-medium-bg',
  High: 'text-priority-high bg-priority-high-bg',
}

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap ${PRIORITY_STYLES[priority] || 'text-ink-soft bg-bg'}`}
    >
      {priority}
    </span>
  )
}
