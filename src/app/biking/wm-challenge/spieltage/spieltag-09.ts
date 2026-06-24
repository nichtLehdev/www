import type { Spieltag } from '../types'

export const spieltag09: Spieltag = {
  id: 9,
  date: 'Jun 20',
  basedOn: 'June 19 results',
  type: 'bike',
  isWalkConversion: false,
  target: 52,
  covered: 54,
  status: 'done',
  matches: [
    { homeTeam: 'USA', homeFlag: '🇺🇸', awayTeam: 'Australia', awayFlag: '🇦🇺', homeScore: 2, awayScore: 0 },
    { homeTeam: 'Scotland', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayTeam: 'Morocco', awayFlag: '🇲🇦', homeScore: 0, awayScore: 1 },
    { homeTeam: 'Brazil', homeFlag: '🇧🇷', awayTeam: 'Haiti', awayFlag: '🇭🇹', homeScore: 3, awayScore: 0 },
    { homeTeam: 'Türkiye', homeFlag: '🇹🇷', awayTeam: 'Paraguay', awayFlag: '🇵🇾', homeScore: 0, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 9', km: 54, elevation: 184, kcal: 1276, prs: 31, note: '34°C', url: 'https://www.strava.com/activities/18999584001' },
  ],
}
