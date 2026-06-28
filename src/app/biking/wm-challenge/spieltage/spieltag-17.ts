import type { Spieltag } from '../types'

export const spieltag17: Spieltag = {
  id: 17,
  date: 'Jun 28',
  basedOn: 'June 27 results',
  type: 'bike',
  isWalkConversion: false,
  target: 100,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Panama', homeFlag: '🇵🇦', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: 0, awayScore: 2 },
    { homeTeam: 'Croatia', homeFlag: '🇭🇷', awayTeam: 'Ghana', awayFlag: '🇬🇭', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Colombia', homeFlag: '🇨🇴', awayTeam: 'Portugal', awayFlag: '🇵🇹', homeScore: 0, awayScore: 0 },
    { homeTeam: 'DR Congo', homeFlag: '🇨🇩', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Algeria', homeFlag: '🇩🇿', awayTeam: 'Austria', awayFlag: '🇦🇹', homeScore: 3, awayScore: 3 },
    { homeTeam: 'Jordan', homeFlag: '🇯🇴', awayTeam: 'Argentina', awayFlag: '🇦🇷', homeScore: 1, awayScore: 3 },
  ],
  strava: [

  ],
  note: 'Final day of group stage. Algeria 3:3 Austria thriller. Round of 32 starts tomorrow.',
}
