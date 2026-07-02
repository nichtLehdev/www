import type { Spieltag } from '../types'

export const spieltag21: Spieltag = {
  id: 21,
  date: 'Jul 2',
  basedOn: 'July 1 results',
  type: 'bike',
  isWalkConversion: false,
  target: 55,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'DR Congo', homeFlag: '🇨🇩', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: 1, awayScore: 2 },
    { homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Belgium', awayFlag: '🇧🇪', homeScore: 2, awayScore: 3 },
    { homeTeam: 'USA', homeFlag: '🇺🇸', awayTeam: 'Bosnia', awayFlag: '🇧🇦', homeScore: 2, awayScore: 0 },
  ],
  strava: [

  ],
  note: 'Kane rescues England in 86th min. Belgium stun Senegal 3-2 aet with Tielemans pen at 120+5. USA win 2-0 with 10 men after Balogun red card.',
}
