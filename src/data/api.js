import { mockTickets } from './mockTickets'

const SIMULATED_LATENCY_MS = 650

// Mock REST layer standing in for a real ticketing API. The store only
// depends on this function returning a Promise that resolves to an array
// of tickets shaped like the ones in mockTickets.js — so pointing the
// dashboard at a real backend later means replacing the body of this
// function with an actual fetch('/api/tickets') call, nothing else.
export function fetchTicketsFromApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.__FORCE_TICKET_FETCH_ERROR__) {
        reject(new Error('Could not reach the support ticket service.'))
        return
      }
      resolve(mockTickets)
    }, SIMULATED_LATENCY_MS)
  })
}
