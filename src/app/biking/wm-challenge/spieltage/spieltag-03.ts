import type { Spieltag } from '../types'

export const spieltag03: Spieltag = {
  id: 3,
  date: 'Jun 14',
  basedOn: 'June 13 results',
  type: 'bike',
  isWalkConversion: false,
  target: 43,
  covered: 43,
  status: 'done',
  matches: [
    { homeTeam: 'Qatar', homeFlag: '🇶🇦', awayTeam: 'Switzerland', awayFlag: '🇨🇭', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Brazil', homeFlag: '🇧🇷', awayTeam: 'Morocco', awayFlag: '🇲🇦', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Haiti', homeFlag: '🇭🇹', awayTeam: 'Scotland', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', homeScore: 0, awayScore: 1 },
    { homeTeam: 'Australia', homeFlag: '🇦🇺', awayTeam: 'Türkiye', awayFlag: '🇹🇷', homeScore: 2, awayScore: 0 },
  ],
  strava: [
    { title: 'WM Challenge Spieltag 3', km: 42, elevation: 269, kcal: 952, prs: 15, note: 'Mit Mama', url: 'https://www.strava.com/activities/18919892366' },
  ],
}
