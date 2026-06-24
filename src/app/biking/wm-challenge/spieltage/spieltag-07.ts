import type { Spieltag } from '../types'

export const spieltag07: Spieltag = {
  id: 7,
  date: 'Jun 18',
  basedOn: 'June 17 results',
  type: 'walk',
  isWalkConversion: true,
  target: 7.6,
  covered: 8.47,
  status: 'done',
  matches: [
    { homeTeam: 'Portugal', homeFlag: '🇵🇹', awayTeam: 'DR Congo', awayFlag: '🇨🇩', homeScore: 1, awayScore: 1 },
    { homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Croatia', awayFlag: '🇭🇷', homeScore: 4, awayScore: 2 },
    { homeTeam: 'Ghana', homeFlag: '🇬🇭', awayTeam: 'Panama', awayFlag: '🇵🇦', homeScore: 1, awayScore: 0 },
    { homeTeam: 'Uzbekistan', homeFlag: '🇺🇿', awayTeam: 'Colombia', awayFlag: '🇨🇴', homeScore: 1, awayScore: 3 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 7', km: 8.47, elevation: 70, kcal: 429, url: 'https://www.strava.com/activities/18974899242' },
  ],
}
