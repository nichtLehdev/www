import type { Spieltag } from '../types'

export const spieltag02: Spieltag = {
  id: 2,
  date: 'Jun 13',
  basedOn: 'June 12 results',
  type: 'bike',
  isWalkConversion: false,
  target: 52,
  covered: 0,
  status: 'banked',
  matches: [
    { homeTeam: 'Canada', homeFlag: '🇨🇦', awayTeam: 'Bosnia', awayFlag: '🇧🇦', homeScore: 1, awayScore: 1 },
    { homeTeam: 'USA', homeFlag: '🇺🇸', awayTeam: 'Paraguay', awayFlag: '🇵🇾', homeScore: 4, awayScore: 1 },
  ],
  strava: [

  ],
  note: 'Not completed — back injury (dislocated vertebra)',
}
