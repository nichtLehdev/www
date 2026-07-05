import type { Spieltag } from '../types'

export const spieltag24: Spieltag = {
  id: 24,
  date: 'Jul 5',
  basedOn: 'July 4 results',
  type: 'bike',
  isWalkConversion: false,
  target: 31,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Morocco', homeFlag: '🇲🇦', awayTeam: 'Canada', awayFlag: '🇨🇦', homeScore: 3, awayScore: 0 },
    { homeTeam: 'Paraguay', homeFlag: '🇵🇾', awayTeam: 'France', awayFlag: '🇫🇷', homeScore: 0, awayScore: 1 },
  ],
  strava: [

  ],
  note: 'Mbapp\\u00e9 penalty in 70th min sends France to QF. Morocco dominant vs Canada. France face Morocco in QF.',
}
