import type { Spieltag } from '../types'

export const spieltag22: Spieltag = {
  id: 22,
  date: 'Jul 3',
  basedOn: 'July 2 results',
  type: 'bike',
  isWalkConversion: false,
  target: 71,
  covered: 73.6,
  status: 'done',
  matches: [
    { homeTeam: 'Spain', homeFlag: '🇪🇸', awayTeam: 'Austria', awayFlag: '🇦🇹', homeScore: 3, awayScore: 0 },
    { homeTeam: 'Portugal', homeFlag: '🇵🇹', awayTeam: 'Croatia', awayFlag: '🇭🇷', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Switzerland', homeFlag: '🇨🇭', awayTeam: 'Algeria', awayFlag: '🇩🇿', homeScore: 2, awayScore: 0 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 22', km: 73.6, elevation: 175, kcal: 1651, prs: 0, note: 'Easy Ride mit Timon und Dirk durch Pfalz und Fronkreich 🇫🇷', url: 'https://www.strava.com/activities/19163101967' },
  ],
  note: 'Easy ride mit Timon und Dirk durch Pfalz und Frankreich. 20.7-22.5\\u00b0C, perfect weather.',
}
