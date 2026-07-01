import type { Spieltag } from '../types'

export const spieltag20: Spieltag = {
  id: 20,
  date: 'Jul 1',
  basedOn: 'June 30 results',
  type: 'bike',
  isWalkConversion: false,
  target: 62,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Ivory Coast', homeFlag: '🇨🇮', awayTeam: 'Norway', awayFlag: '🇳🇴', homeScore: 1, awayScore: 2 },
    { homeTeam: 'France', homeFlag: '🇫🇷', awayTeam: 'Sweden', awayFlag: '🇸🇪', homeScore: 3, awayScore: 0 },
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'Ecuador', awayFlag: '🇪🇨', homeScore: 2, awayScore: 0 },
  ],
  strava: [

  ],
  note: 'Haaland wins it late for Norway. Mbapp\\u00e9 brace for France. Mexico first knockout win since 1986.',
}
