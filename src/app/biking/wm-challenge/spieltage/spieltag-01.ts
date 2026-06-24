import type { Spieltag } from '../types'

export const spieltag01: Spieltag = {
  id: 1,
  date: 'Jun 12',
  basedOn: 'June 11 results',
  type: 'bike',
  isWalkConversion: false,
  target: 41,
  covered: 0,
  status: 'banked',
  matches: [
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'South Africa', awayFlag: '🇿🇦', homeScore: 2, awayScore: 0 },
    { homeTeam: 'South Korea', homeFlag: '🇰🇷', awayTeam: 'Czechia', awayFlag: '🇨🇿', homeScore: 2, awayScore: 1 },
  ],
  strava: [

  ],
  note: 'Not completed — dislocated vertebra (back injury)',
}
