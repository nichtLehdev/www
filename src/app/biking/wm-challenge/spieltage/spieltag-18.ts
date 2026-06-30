import type { Spieltag } from '../types'

export const spieltag18: Spieltag = {
  id: 18,
  date: 'Jun 29',
  basedOn: 'June 28 results',
  type: 'walk',
  isWalkConversion: false,
  target: 1,
  covered: 1.57,
  status: 'done',
  matches: [
    { homeTeam: 'South Africa', homeFlag: '🇿🇦', awayTeam: 'Canada', awayFlag: '🇨🇦', homeScore: 0, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 18', km: 1.57, kcal: 141, note: 'Pre-Game Abkühlrunde & Streak-Saver', url: 'https://www.strava.com/activities/19115315166' },
  ],
  note: 'Pre-Game Abk\\u00fchlrunde &amp; Streak-Saver. Only 1 match \\u2014 first Round of 32 game ever.',
}
