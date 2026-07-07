import type { Spieltag } from '../types'

export const spieltag25: Spieltag = {
  id: 25,
  date: 'Jul 6',
  basedOn: 'July 5 results',
  type: 'walk',
  isWalkConversion: true,
  target: 3.5,
  covered: 3.29,
  status: 'done',
  matches: [
    { homeTeam: 'Brazil', homeFlag: '🇧🇷', awayTeam: 'Norway', awayFlag: '🇳🇴', homeScore: 1, awayScore: 2 },
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: 2, awayScore: 3 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 25', km: 3.29, elevation: 30, kcal: 295, prs: 0, url: 'https://www.strava.com/activities/19205335419' },
  ],
  note: 'Haaland brace in 79th+90th knocks out Brazil. England win 3-2 at Azteca with 10 men.',
}
