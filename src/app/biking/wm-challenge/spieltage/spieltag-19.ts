import type { Spieltag } from '../types'

export const spieltag19: Spieltag = {
  id: 19,
  date: 'Jun 30',
  basedOn: 'June 29 results',
  type: 'bike',
  isWalkConversion: false,
  target: 43,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Brazil', homeFlag: '🇧🇷', awayTeam: 'Japan', awayFlag: '🇯🇵', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Germany', homeFlag: '🇩🇪', awayTeam: 'Paraguay', awayFlag: '🇵🇾', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Morocco', awayFlag: '🇲🇦', homeScore: 1, awayScore: 1 },
  ],
  strava: [

  ],
  note: 'Result after extra time, excluding penalty shootout goals. Paraguay (4-3 pens) and Morocco (3-2 pens) won on penalties \\u2014 biggest upsets so far.',
}
