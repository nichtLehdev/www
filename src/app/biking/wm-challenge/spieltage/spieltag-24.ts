import type { Spieltag } from '../types'

export const spieltag24: Spieltag = {
  id: 24,
  date: 'Jul 5',
  basedOn: 'July 4 results',
  type: 'walk',
  isWalkConversion: true,
  target: 4,
  covered: 4.24,
  status: 'done',
  matches: [
    { homeTeam: 'Canada', homeFlag: '🇨🇦', awayTeam: 'Morocco', awayFlag: '🇲🇦', homeScore: 0, awayScore: 3 },
    { homeTeam: 'Paraguay', homeFlag: '🇵🇾', awayTeam: 'France', awayFlag: '🇫🇷', homeScore: 0, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 24', km: 4.24, kcal: 264, prs: 0, note: 'Wegen Sonnenbrand heute nicht aufs Rad', url: 'https://www.strava.com/activities/19194261254' },
  ],
  note: 'Sonnenbrand — kein Rad heute. Walk statt Aufholen.',
}
