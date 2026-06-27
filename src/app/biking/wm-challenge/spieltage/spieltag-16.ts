import type { Spieltag } from '../types'

export const spieltag16: Spieltag = {
  id: 16,
  date: 'Jun 27',
  basedOn: 'June 26 results',
  type: 'bike',
  isWalkConversion: false,
  target: 163,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Egypt', homeFlag: '🇪🇬', awayTeam: 'Iran', awayFlag: '🇮🇷', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Belgium', homeFlag: '🇧🇪', awayTeam: 'New Zealand', awayFlag: '🇳🇿', homeScore: 5, awayScore: 1 },
    { homeTeam: 'Cape Verde', homeFlag: '🇨🇻', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Spain', homeFlag: '🇪🇸', awayTeam: 'Uruguay', awayFlag: '🇺🇾', homeScore: 1, awayScore: 0 },
    { homeTeam: 'Norway', homeFlag: '🇳🇴', awayTeam: 'France', awayFlag: '🇫🇷', homeScore: 4, awayScore: 1 },
    { homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Iraq', awayFlag: '🇮🇶', homeScore: 5, awayScore: 0 },
  ],
  strava: [

  ],
  note: 'Norway knock out France! Belgium 5:1, Senegal 5:0 — huge km day.',
}
