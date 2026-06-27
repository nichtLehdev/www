import type { Spieltag } from '../types'

export const spieltag16: Spieltag = {
  id: 16,
  date: 'Jun 27',
  basedOn: 'June 26 results',
  type: 'bike',
  isWalkConversion: false,
  target: 91,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Norway', homeFlag: '🇳🇴', awayTeam: 'France', awayFlag: '🇫🇷', homeScore: 1, awayScore: 4 },
    { homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Iraq', awayFlag: '🇮🇶', homeScore: 5, awayScore: 0 },
    { homeTeam: 'Cape Verde', homeFlag: '🇨🇻', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Uruguay', homeFlag: '🇺🇾', awayTeam: 'Spain', awayFlag: '🇪🇸', homeScore: 0, awayScore: 1 },
    { homeTeam: 'Egypt', homeFlag: '🇪🇬', awayTeam: 'Iran', awayFlag: '🇮🇷', homeScore: 1, awayScore: 1 },
    { homeTeam: 'New Zealand', homeFlag: '🇳🇿', awayTeam: 'Belgium', awayFlag: '🇧🇪', homeScore: 1, awayScore: 5 },
  ],
  strava: [

  ],
  note: 'Dembélé hat-trick as France beat Norway 4-1. Senegal 5-0 Iraq.',
}
