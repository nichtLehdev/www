import type { Spieltag } from '../types'

export const spieltag13: Spieltag = {
  id: 13,
  date: 'Jun 24',
  basedOn: 'June 23 results',
  type: 'bike',
  isWalkConversion: false,
  target: 61,
  covered: 59.5,
  status: 'done',
  matches: [
    { homeTeam: 'Portugal', homeFlag: '🇵🇹', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', homeScore: 5, awayScore: 0 },
    { homeTeam: 'Colombia', homeFlag: '🇨🇴', awayTeam: 'DR Congo', awayFlag: '🇨🇩', homeScore: 1, awayScore: 0 },
    { homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Ghana', awayFlag: '🇬🇭', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Panama', homeFlag: '🇵🇦', awayTeam: 'Croatia', awayFlag: '🇭🇷', homeScore: 0, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 13.1', km: 38.4, elevation: 196, kcal: 1061, prs: 36, note: '35°C', url: 'https://www.strava.com/activities/19053222869' },
    { title: 'WM Challenge Gameday 13.2', km: 21.1, elevation: 129, kcal: 481, prs: 1, note: 'Cool-down ride with Papa ❤️', url: 'https://www.strava.com/activities/19053222848' },
  ],
  note: 'Minor shortfall vs 61km target — approved as one-off exception (Papa ride, route done)',
}
