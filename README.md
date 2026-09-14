# Support Desk — Customer Support Dashboard

A frontend dashboard for a support team to search, filter, triage, and resolve
customer support tickets.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed)
- Zustand for state management
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (defaults to `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Data layer

Ticket data is served through `src/data/api.js`, a small mock REST layer that
resolves a Promise after a simulated network delay — this stands in for a
real `fetch('/api/tickets')` call. The Zustand store (`src/store/ticketStore.js`)
only depends on that function returning an array of tickets shaped like the
ones in `src/data/mockTickets.js`, so pointing the dashboard at a real backend
later is a one-file change, nothing else in the app needs to know.

Twelve realistic sample tickets are included, covering every status,
priority, multi-message conversations, and the search/filter edge cases.

## Project structure

```
src/
  components/
    Header.jsx          top bar
    StatsCard.jsx        single stat tile (Total / Open / In Progress / Resolved)
    SearchBar.jsx         search by customer name or subject
    Filters.jsx           status + priority filter dropdowns
    StatusBadge.jsx        read-only status pill
    PriorityBadge.jsx      read-only priority pill
    StatusSelect.jsx       interactive status-change control (used in list + details)
    TicketList.jsx          list container, wires up loading/error/empty states
    TicketRow.jsx           one ticket — grid row on desktop, stacked card on mobile
    TicketDetails.jsx       right-side panel: customer info, description, conversation
    LoadingState.jsx        skeleton rows
    ErrorState.jsx          error message + retry button
    EmptyState.jsx          "no tickets found" message
  store/
    ticketStore.js         tickets, loading/error state, filters, selection, actions
  data/
    mockTickets.js          sample ticket data
    api.js                  mock REST fetch layer
  App.jsx
  main.jsx
  index.css                 Tailwind import + design tokens (@theme)
```

## Notes

- Changing a ticket's status updates it everywhere at once — the row, the
  details panel, and the stats counts at the top all read from the same
  Zustand store.
- The ticket list renders as a table-like grid on wider screens and as
  stacked cards on mobile, from the same `TicketRow` component.
- The details panel is a right-side sheet on desktop and expands to fill the
  screen on mobile; it closes on the close button, backdrop click, or Escape.
