import type { Spieltag } from '../types'

export const spieltag06: Spieltag = {
  id: 6,
  date: 'Jun 17',
  basedOn: 'June 16 results',
  type: 'bike',
  isWalkConversion: false,
  target: 106,
  covered: 106,
  status: 'done',
  matches: [
    { homeTeam: 'France', homeFlag: '🇫🇷', awayTeam: 'Senegal', awayFlag: '🇸🇳', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Iraq', homeFlag: '🇮🇶', awayTeam: 'Norway', awayFlag: '🇳🇴', homeScore: 1, awayScore: 4 },
    { homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Algeria', awayFlag: '🇩🇿', homeScore: 3, awayScore: 0 },
    { homeTeam: 'Austria', homeFlag: '🇦🇹', awayTeam: 'Jordan', awayFlag: '🇯🇴', homeScore: 3, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 6', km: 106, elevation: 442, kcal: 2489, prs: 31, url: 'https://www.strava.com/activities/18961725684' },
  ],
}
