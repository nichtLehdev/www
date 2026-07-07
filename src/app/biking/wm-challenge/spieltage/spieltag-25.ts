import type { Spieltag } from '../types'

export const spieltag25: Spieltag = {
  id: 25,
  date: 'Jul 6',
  basedOn: 'July 5 results',
  type: 'bike',
  isWalkConversion: false,
  target: 35,
  covered: 0,
  status: 'pending',
  matches: [
    { homeTeam: 'Brazil', homeFlag: '🇧🇷', awayTeam: 'Norway', awayFlag: '🇳🇴', homeScore: 1, awayScore: 2 },
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: 2, awayScore: 3 },
  ],
  strava: [

  ],
  note: 'Haaland brace in 79th+90th knocks out Brazil. England win 3-2 at Azteca with 10 men — one of the games of the tournament.',
}
