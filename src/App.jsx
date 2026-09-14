import { useEffect } from 'react'
import { Ticket, CircleDot, Loader, CircleCheck } from 'lucide-react'
import { useTicketStore } from './store/ticketStore'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import TicketList from './components/TicketList'
import TicketDetails from './components/TicketDetails'

export default function App() {
  const {
    tickets,
    loading,
    error,
    selectedTicketId,
    searchQuery,
    statusFilter,
    priorityFilter,
    fetchTickets,
    updateTicketStatus,
    selectTicket,
    closeTicketDetails,
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    clearFilters,
    getFilteredTickets,
    getStats,
  } = useTicketStore()

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  const filteredTickets = getFilteredTickets()
  const stats = getStats()
  const selectedTicket = tickets.find((t) => t.id === selectedTicketId) || null

  const statCards = [
    {
      label: 'Total Tickets',
      value: stats.total,
      icon: Ticket,
      accent: { bg: 'var(--color-brand-soft)', fg: 'var(--color-brand)' },
    },
    {
      label: 'Open',
      value: stats.open,
      icon: CircleDot,
      accent: { bg: 'var(--color-status-open-bg)', fg: 'var(--color-status-open)' },
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: Loader,
      accent: { bg: 'var(--color-status-progress-bg)', fg: 'var(--color-status-progress)' },
    },
    {
      label: 'Resolved',
      value: stats.resolved,
      icon: CircleCheck,
      accent: { bg: 'var(--color-status-resolved-bg)', fg: 'var(--color-status-resolved)' },
    },
  ]

  return (
    <div className="min-h-full">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {statCards.map((card) => (
            <StatsCard key={card.label} {...card} />
          ))}
        </div>

        {/* Search + filters */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Filters
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            priorityFilter={priorityFilter}
            onPriorityChange={setPriorityFilter}
          />
        </div>

        {/* Ticket list */}
        <div className="mt-4">
          <TicketList
            tickets={filteredTickets}
            loading={loading}
            error={error}
            onRetry={fetchTickets}
            onOpen={selectTicket}
            onStatusChange={updateTicketStatus}
            onClearFilters={clearFilters}
          />
        </div>
      </main>

      <TicketDetails
        ticket={selectedTicket}
        onClose={closeTicketDetails}
        onStatusChange={updateTicketStatus}
      />
    </div>
  )
}
