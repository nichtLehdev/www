// ──────────────────────────────────────────────
// TEMPLATE — copy this file to add a new Spieltag
// Rename to spieltag-XX.ts and update the values
// Then import it in index.ts
// ──────────────────────────────────────────────

import type { Spieltag } from '../types'

export const spieltagXX: Spieltag = {
  id: 0,
  date: 'Jun 00',
  basedOn: 'June 00 results',
  type: 'bike',            // 'bike' | 'walk'
  isWalkConversion: false,
  target: 0,
  covered: 0,
  status: 'done',          // 'done' | 'partial' | 'banked' | 'pending'
  matches: [
    { homeTeam: '', homeFlag: '', awayTeam: '', awayFlag: '', homeScore: 0, awayScore: 0 },
  ],
  strava: [
    { title: '', km: 0, elevation: 0, kcal: 0, prs: 0, url: 'https://www.strava.com/activities/...' },
  ],
  note: '',
}
