import { AlertTriangle, RotateCw } from 'lucide-react'

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-priority-high-bg text-priority-high">
        <AlertTriangle size={20} strokeWidth={2} />
      </div>
      <div>
        <p className="text-sm font-medium text-ink">Couldn't load tickets</p>
        <p className="mt-1 text-sm text-ink-soft">{message}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
      >
        <RotateCw size={14} strokeWidth={2} />
        Retry
      </button>
    </div>
  )
}
