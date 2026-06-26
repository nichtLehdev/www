import type { Spieltag } from '../types'

export const spieltag15: Spieltag = {
  id: 15,
  date: 'Jun 26',
  basedOn: 'June 25 results',
  type: 'bike',
  isWalkConversion: false,
  target: 97,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Türkiye', homeFlag: '🇹🇷', awayTeam: 'USA', awayFlag: '🇺🇸', homeScore: 3, awayScore: 2 },
    { homeTeam: 'Paraguay', homeFlag: '🇵🇾', awayTeam: 'Australia', awayFlag: '🇦🇺', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Curaçao', homeFlag: '🇨🇼', awayTeam: 'Ivory Coast', awayFlag: '🇨🇮', homeScore: 0, awayScore: 2 },
    { homeTeam: 'Ecuador', homeFlag: '🇪🇨', awayTeam: 'Germany', awayFlag: '🇩🇪', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Japan', homeFlag: '🇯🇵', awayTeam: 'Sweden', awayFlag: '🇸🇪', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Tunisia', awayFlag: '🇹🇳', homeScore: 3, awayScore: 1 },
  ],
  strava: [

  ],
  note: 'Ecuador knock out Germany! Türkiye beat USA. Today\'s target.',
}
