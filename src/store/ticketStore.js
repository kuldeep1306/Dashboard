import { create } from 'zustand'
import { fetchTicketsFromApi } from '../data/api'

export const STATUS_OPTIONS = ['Open', 'In Progress', 'Resolved']
export const PRIORITY_OPTIONS = ['Low', 'Medium', 'High']

export const useTicketStore = create((set, get) => ({
  // --- data state ---
  tickets: [],
  loading: true,
  error: null,

  // --- ui state ---
  selectedTicketId: null,
  searchQuery: '',
  statusFilter: 'All',
  priorityFilter: 'All',

  // --- data actions ---
  fetchTickets: async () => {
    set({ loading: true, error: null })
    try {
      const tickets = await fetchTicketsFromApi()
      set({ tickets, loading: false })
    } catch (err) {
      set({ error: err.message || 'Something went wrong while loading tickets.', loading: false })
    }
  },

  updateTicketStatus: (ticketId, newStatus) => {
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      ),
    }))
  },

  // --- selection ---
  selectTicket: (ticketId) => set({ selectedTicketId: ticketId }),
  closeTicketDetails: () => set({ selectedTicketId: null }),

  // --- search & filters ---
  setSearchQuery: (query) => set({ searchQuery: query }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  setPriorityFilter: (priority) => set({ priorityFilter: priority }),
  clearFilters: () => set({ searchQuery: '', statusFilter: 'All', priorityFilter: 'All' }),

  // --- derived helpers (called from components, not persisted state) ---
  getFilteredTickets: () => {
    const { tickets, searchQuery, statusFilter, priorityFilter } = get()
    const query = searchQuery.trim().toLowerCase()

    return tickets.filter((ticket) => {
      const matchesQuery =
        query.length === 0 ||
        ticket.customer.name.toLowerCase().includes(query) ||
        ticket.subject.toLowerCase().includes(query)

      const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter
      const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter

      return matchesQuery && matchesStatus && matchesPriority
    })
  },

  getStats: () => {
    const { tickets } = get()
    return {
      total: tickets.length,
      open: tickets.filter((t) => t.status === 'Open').length,
      inProgress: tickets.filter((t) => t.status === 'In Progress').length,
      resolved: tickets.filter((t) => t.status === 'Resolved').length,
    }
  },
}))
