import type { Spieltag } from '../types'

export const spieltag16: Spieltag = {
  id: 16,
  date: 'Jun 27',
  basedOn: 'June 26 results',
  type: 'bike',
  isWalkConversion: false,
  target: 91,
  covered: 63.3,
  status: 'partial',
  matches: [
    { homeTeam: 'Norway', homeFlag: '🇳🇴', awayTeam: 'France', awayFlag: '🇫🇷', homeScore: 1, awayScore: 4 },
    { homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Iraq', awayFlag: '🇮🇶', homeScore: 5, awayScore: 0 },
    { homeTeam: 'Uruguay', homeFlag: '🇺🇾', awayTeam: 'Spain', awayFlag: '🇪🇸', homeScore: 0, awayScore: 1 },
    { homeTeam: 'Cape Verde', homeFlag: '🇨🇻', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', homeScore: 0, awayScore: 0 },
    { homeTeam: 'New Zealand', homeFlag: '🇳🇿', awayTeam: 'Belgium', awayFlag: '🇧🇪', homeScore: 1, awayScore: 5 },
    { homeTeam: 'Egypt', homeFlag: '🇪🇬', awayTeam: 'Iran', awayFlag: '🇮🇷', homeScore: 1, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 16.1', km: 63.3, elevation: 494, kcal: 1650, prs: 25, note: '33-36°C', url: 'https://www.strava.com/activities/19084966209' },
  ],
  note: '27.7 km banked. 33-36°C.',
}
