import type { Spieltag } from '../types'

export const spieltag12: Spieltag = {
  id: 12,
  date: 'Jun 23',
  basedOn: 'June 22 results',
  type: 'bike',
  isWalkConversion: false,
  target: 94,
  covered: 54,
  status: 'partial',
  matches: [
    { homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Austria', awayFlag: '🇦🇹', homeScore: 2, awayScore: 0 },
    { homeTeam: 'Norway', homeFlag: '🇳🇴', awayTeam: 'Senegal', awayFlag: '🇸🇳', homeScore: 3, awayScore: 2 },
    { homeTeam: 'France', homeFlag: '🇫🇷', awayTeam: 'Iraq', awayFlag: '🇮🇶', homeScore: 3, awayScore: 0 },
    { homeTeam: 'Jordan', homeFlag: '🇯🇴', awayTeam: 'Algeria', awayFlag: '🇩🇿', homeScore: 1, awayScore: 2 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 12.1', km: 54, elevation: 294, kcal: 1484, prs: 44, note: '33°C. France + Jordan banked.', url: 'https://www.strava.com/activities/19038140686' },
  ],
  note: 'France 30km + Jordan 12km banked',
}
