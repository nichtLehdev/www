import type { Spieltag } from '../types'

export const spieltag14: Spieltag = {
  id: 14,
  date: 'Jun 25',
  basedOn: 'June 24 results',
  type: 'bike',
  isWalkConversion: false,
  target: 147,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'Czechia', awayFlag: '🇨🇿', homeScore: 3, awayScore: 0 },
    { homeTeam: 'South Africa', homeFlag: '🇿🇦', awayTeam: 'South Korea', awayFlag: '🇰🇷', homeScore: 1, awayScore: 0 },
    { homeTeam: 'Switzerland', homeFlag: '🇨🇭', awayTeam: 'Canada', awayFlag: '🇨🇦', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Bosnia', homeFlag: '🇧🇦', awayTeam: 'Qatar', awayFlag: '🇶🇦', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Scotland', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayTeam: 'Brazil', awayFlag: '🇧🇷', homeScore: 0, awayScore: 3 },
    { homeTeam: 'Morocco', homeFlag: '🇲🇦', awayTeam: 'Haiti', awayFlag: '🇭🇹', homeScore: 4, awayScore: 2 },
  ],
  strava: [

  ],
  note: 'Today\'s target — not yet ridden',
}
