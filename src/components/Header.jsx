import { LifeBuoy } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
          <LifeBuoy size={18} strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-base font-semibold leading-tight text-ink">Support Desk</h1>
          <p className="text-xs leading-tight text-ink-soft">Customer ticket queue</p>
        </div>
      </div>
    </header>
  )
}
