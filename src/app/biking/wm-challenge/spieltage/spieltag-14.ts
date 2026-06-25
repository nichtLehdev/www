import type { Spieltag } from '../types'

export const spieltag14: Spieltag = {
  id: 14,
  date: 'Jun 25',
  basedOn: 'June 24 results',
  type: 'bike',
  isWalkConversion: false,
  target: 147,
  covered: 30,
  status: 'partial',
  matches: [
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'Czechia', awayFlag: '🇨🇿', homeScore: 3, awayScore: 0 },
    { homeTeam: 'South Africa', homeFlag: '🇿🇦', awayTeam: 'South Korea', awayFlag: '🇰🇷', homeScore: 1, awayScore: 0 },
    { homeTeam: 'Switzerland', homeFlag: '🇨🇭', awayTeam: 'Canada', awayFlag: '🇨🇦', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Bosnia', homeFlag: '🇧🇦', awayTeam: 'Qatar', awayFlag: '🇶🇦', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Scotland', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayTeam: 'Brazil', awayFlag: '🇧🇷', homeScore: 0, awayScore: 3 },
    { homeTeam: 'Morocco', homeFlag: '🇲🇦', awayTeam: 'Haiti', awayFlag: '🇭🇹', homeScore: 4, awayScore: 2 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 14.1', km: 30, elevation: 162, kcal: 659, prs: 0, note: '90min @ <120bpm · 34-35°C', url: 'https://www.strava.com/activities/19065058544' },
  ],
  note: '90min easy ride @ &lt;120bpm. 117 km banked.',
}
