import type { Spieltag } from '../types'

export const spieltag21: Spieltag = {
  id: 21,
  date: 'Jul 2',
  basedOn: 'July 1 results',
  type: 'walk',
  isWalkConversion: true,
  target: 5.5,
  covered: 6.04,
  status: 'done',
  matches: [
    { homeTeam: 'DR Congo', homeFlag: '🇨🇩', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: 1, awayScore: 2 },
    { homeTeam: 'Senegal', homeFlag: '🇸🇳', awayTeam: 'Belgium', awayFlag: '🇧🇪', homeScore: 2, awayScore: 3 },
    { homeTeam: 'USA', homeFlag: '🇺🇸', awayTeam: 'Bosnia', awayFlag: '🇧🇦', homeScore: 2, awayScore: 0 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 21', km: 6.04, kcal: 386, url: 'https://www.strava.com/activities/19153478168' },
  ],
}
