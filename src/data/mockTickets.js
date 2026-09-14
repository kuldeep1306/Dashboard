// Realistic sample tickets covering every status, priority, and search case
// used to exercise the dashboard end to end.

export const mockTickets = [
  {
    id: 1,
    customer: { name: 'Ananya Rao', email: 'ananya.rao@meridianlabs.io' },
    subject: 'Unable to log in after password reset',
    description:
      "I reset my password from the email link yesterday, but I still can't log in on either the web app or the mobile app. It keeps saying 'invalid credentials' even though I'm copying the password directly.",
    priority: 'High',
    status: 'Open',
    createdAt: '2026-09-12T09:14:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: "I reset my password from the email link yesterday, but I still can't log in.",
        timestamp: '2026-09-12T09:14:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Thanks for flagging this, Ananya — can you confirm which browser and app version you\u2019re using?',
        timestamp: '2026-09-12T09:41:00Z',
      },
      {
        id: 3,
        sender: 'customer',
        message: 'Chrome on desktop, and app version 4.2.1 on iOS. Same error on both.',
        timestamp: '2026-09-12T09:52:00Z',
      },
    ],
  },
  {
    id: 2,
    customer: { name: 'Marcus Webb', email: 'marcus.webb@brightpath.co' },
    subject: 'Invoice #4821 shows incorrect tax amount',
    description:
      'The tax line on our latest invoice is calculated at 18% but our account is registered as tax-exempt. Could someone correct this and reissue the invoice?',
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2026-09-11T14:02:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'The tax line on invoice #4821 is wrong — our account is tax-exempt.',
        timestamp: '2026-09-11T14:02:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Checking with billing now and will get a corrected invoice over to you shortly.',
        timestamp: '2026-09-11T14:30:00Z',
      },
    ],
  },
  {
    id: 3,
    customer: { name: 'Priya Nair', email: 'priya.nair@outlook.com' },
    subject: 'Feature request: export reports as CSV',
    description:
      "It would really help our team if we could export the monthly usage report as a CSV instead of only PDF. Is this something that's planned?",
    priority: 'Low',
    status: 'Open',
    createdAt: '2026-09-10T11:20:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Would it be possible to export the monthly report as CSV instead of PDF?',
        timestamp: '2026-09-10T11:20:00Z',
      },
    ],
  },
  {
    id: 4,
    customer: { name: 'Diego Fernández', email: 'diego.fernandez@vantacore.com' },
    subject: 'Dashboard charts not loading on Safari',
    description:
      'Every chart on the analytics dashboard fails to render on Safari 17 — the page just shows blank white boxes where the charts should be. Works fine on Chrome and Firefox.',
    priority: 'High',
    status: 'In Progress',
    createdAt: '2026-09-09T16:45:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Charts are just blank white boxes on Safari 17. Chrome and Firefox work fine.',
        timestamp: '2026-09-09T16:45:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Reproduced on our end — looks like a Safari-specific rendering bug. Passed to engineering.',
        timestamp: '2026-09-09T17:20:00Z',
      },
      {
        id: 3,
        sender: 'support',
        message: 'Fix is in code review now, should ship with tomorrow\u2019s release.',
        timestamp: '2026-09-10T10:05:00Z',
      },
    ],
  },
  {
    id: 5,
    customer: { name: 'Sarah Kim', email: 'sarah.kim@lumenwave.net' },
    subject: 'Duplicate charge on card ending 4471',
    description:
      'I was charged twice for my September subscription — once on the 1st and again on the 3rd. Please refund the duplicate charge.',
    priority: 'High',
    status: 'Resolved',
    createdAt: '2026-09-04T08:30:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'I was charged twice for September — please refund the duplicate.',
        timestamp: '2026-09-04T08:30:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Confirmed the duplicate charge and processed a refund — should land in 3–5 business days.',
        timestamp: '2026-09-04T09:15:00Z',
      },
      {
        id: 3,
        sender: 'customer',
        message: 'Just saw the refund come through. Thank you for the quick fix!',
        timestamp: '2026-09-06T13:02:00Z',
      },
    ],
  },
  {
    id: 6,
    customer: { name: 'Tom Okafor', email: 'tom.okafor@brightpath.co' },
    subject: 'How do I add a teammate to our workspace?',
    description:
      "Can't find where to invite new members to our team workspace. Is there a limit on the free plan?",
    priority: 'Low',
    status: 'Resolved',
    createdAt: '2026-09-02T10:00:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Can\u2019t find where to invite new members. Is there a limit on the free plan?',
        timestamp: '2026-09-02T10:00:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'You can invite teammates from Settings \u2192 Members. Free plan allows up to 3 seats.',
        timestamp: '2026-09-02T10:40:00Z',
      },
    ],
  },
  {
    id: 7,
    customer: { name: 'Emily Chen', email: 'emily.chen@nordicgrid.io' },
    subject: 'API returning 429 errors during peak hours',
    description:
      'Our integration is getting rate-limited around 9–10am daily, even though we should be well under the documented limit for our plan. Can you check our usage?',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2026-09-13T07:55:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Getting 429s daily around 9–10am despite being under our documented rate limit.',
        timestamp: '2026-09-13T07:55:00Z',
      },
    ],
  },
  {
    id: 8,
    customer: { name: 'Raj Patel', email: 'raj.patel@quirkstudio.design' },
    subject: 'Cannot delete old project from workspace',
    description:
      "There's a test project from last year I can't delete — the delete button is greyed out with no explanation.",
    priority: 'Low',
    status: 'In Progress',
    createdAt: '2026-09-08T13:10:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Delete button is greyed out on an old test project, no explanation given.',
        timestamp: '2026-09-08T13:10:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'That happens when a project still has active integrations linked. Checking which ones.',
        timestamp: '2026-09-08T15:00:00Z',
      },
    ],
  },
  {
    id: 9,
    customer: { name: 'Laura Bianchi', email: 'laura.bianchi@vantacore.com' },
    subject: 'Mobile app crashes when uploading photos',
    description:
      'The Android app crashes every time I try to attach more than 2 photos to a ticket. Happens consistently on my Pixel 8.',
    priority: 'High',
    status: 'Open',
    createdAt: '2026-09-13T12:30:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'App crashes every time I attach more than 2 photos, consistently on my Pixel 8.',
        timestamp: '2026-09-13T12:30:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Sorry about that — could you share the Android app version from Settings \u2192 About?',
        timestamp: '2026-09-13T12:50:00Z',
      },
    ],
  },
  {
    id: 10,
    customer: { name: 'Noah Williams', email: 'noah.williams@lumenwave.net' },
    subject: 'Requesting a call to discuss enterprise pricing',
    description:
      "We're evaluating a move to the enterprise plan for 200+ seats and would like to set up a call with sales this week.",
    priority: 'Medium',
    status: 'Resolved',
    createdAt: '2026-09-05T09:00:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Evaluating the enterprise plan for 200+ seats, would like a call this week.',
        timestamp: '2026-09-05T09:00:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Looped in our sales team — they\u2019ll reach out today to schedule a time.',
        timestamp: '2026-09-05T09:30:00Z',
      },
      {
        id: 3,
        sender: 'customer',
        message: 'Call is booked for Thursday. Thanks for the fast turnaround.',
        timestamp: '2026-09-05T11:15:00Z',
      },
    ],
  },
  {
    id: 11,
    customer: { name: 'Grace Mensah', email: 'grace.mensah@outlook.com' },
    subject: 'Timezone settings not saving',
    description:
      "I change my timezone in account settings, save, and it reverts back to UTC after refreshing the page. Tried on two different browsers.",
    priority: 'Low',
    status: 'Open',
    createdAt: '2026-09-13T15:40:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Timezone reverts to UTC after refresh, tried on two browsers.',
        timestamp: '2026-09-13T15:40:00Z',
      },
    ],
  },
  {
    id: 12,
    customer: { name: 'Hassan Malik', email: 'hassan.malik@nordicgrid.io' },
    subject: 'SSO login redirect loop with Okta',
    description:
      'Since this morning, logging in via our Okta SSO integration sends us into a redirect loop between our IdP and your login page. This is blocking our whole team.',
    priority: 'High',
    status: 'In Progress',
    createdAt: '2026-09-13T06:20:00Z',
    messages: [
      {
        id: 1,
        sender: 'customer',
        message: 'Okta SSO login is stuck in a redirect loop, blocking our whole team.',
        timestamp: '2026-09-13T06:20:00Z',
      },
      {
        id: 2,
        sender: 'support',
        message: 'Escalated to our identity team as a priority incident — investigating now.',
        timestamp: '2026-09-13T06:35:00Z',
      },
      {
        id: 3,
        sender: 'support',
        message: 'Found a misconfigured redirect URI on our side, deploying a fix within the hour.',
        timestamp: '2026-09-13T07:10:00Z',
      },
    ],
  },
]
