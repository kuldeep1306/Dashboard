export default function LoadingState() {
  const rows = Array.from({ length: 6 })

  return (
    <div className="divide-y divide-border" role="status" aria-label="Loading tickets">
      {rows.map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-4 sm:px-5">
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-40 animate-pulse-soft rounded bg-border" />
            <div className="h-3 w-56 animate-pulse-soft rounded bg-border" />
          </div>
          <div className="hidden h-6 w-20 animate-pulse-soft rounded-full bg-border sm:block" />
          <div className="hidden h-6 w-24 animate-pulse-soft rounded-full bg-border md:block" />
          <div className="hidden h-3 w-20 animate-pulse-soft rounded bg-border lg:block" />
        </div>
      ))}
    </div>
  )
}
