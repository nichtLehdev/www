import type { Spieltag } from '../types'

export const spieltag23: Spieltag = {
  id: 23,
  date: 'Jul 4',
  basedOn: 'July 3 results',
  type: 'walk',
  isWalkConversion: true,
  target: 5.3,
  covered: 5.57,
  status: 'done',
  matches: [
    { homeTeam: 'Australia', homeFlag: '🇦🇺', awayTeam: 'Egypt', awayFlag: '🇪🇬', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Cape Verde', awayFlag: '🇨🇻', homeScore: 3, awayScore: 2 },
    { homeTeam: 'Colombia', homeFlag: '🇨🇴', awayTeam: 'Ghana', awayFlag: '🇬🇭', homeScore: 1, awayScore: 0 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 23', km: 5.57, kcal: 364, url: 'https://www.strava.com/activities/19181210563' },
  ],
  note: 'AET scores used (no penalty goals). Egypt won 4-2 pens. Argentina won in extra time after 1:1 at 90 mins. Cape Verde\'s memorable run ends.',
}
