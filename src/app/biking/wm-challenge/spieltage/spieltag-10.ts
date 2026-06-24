import type { Spieltag } from '../types'

export const spieltag10: Spieltag = {
  id: 10,
  date: 'Jun 21',
  basedOn: 'June 20 results',
  type: 'bike',
  isWalkConversion: false,
  target: 76,
  covered: 0,
  status: 'banked',
  matches: [
    { homeTeam: 'Germany', homeFlag: '🇩🇪', awayTeam: 'Ivory Coast', awayFlag: '🇨🇮', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Ecuador', homeFlag: '🇪🇨', awayTeam: 'Curaçao', awayFlag: '🇨🇼', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Sweden', awayFlag: '🇸🇪', homeScore: 5, awayScore: 1 },
    { homeTeam: 'Tunisia', homeFlag: '🇹🇳', awayTeam: 'Japan', awayFlag: '🇯🇵', homeScore: 0, awayScore: 4 },
  ],
  strava: [

  ],
  note: 'Fully banked — ride day used to clear Spieltag 4 Sweden debt (Gameday 4.2)',
}
