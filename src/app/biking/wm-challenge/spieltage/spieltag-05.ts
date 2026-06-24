import type { Spieltag } from '../types'

export const spieltag05: Spieltag = {
  id: 5,
  date: 'Jun 16',
  basedOn: 'June 15 results',
  type: 'walk',
  isWalkConversion: true,
  target: 4.4,
  covered: 4.64,
  status: 'done',
  matches: [
    { homeTeam: 'Spain', homeFlag: '🇪🇸', awayTeam: 'Cape Verde', awayFlag: '🇨🇻', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Belgium', homeFlag: '🇧🇪', awayTeam: 'Egypt', awayFlag: '🇪🇬', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Saudi Arabia', homeFlag: '🇸🇦', awayTeam: 'Uruguay', awayFlag: '🇺🇾', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Iran', homeFlag: '🇮🇷', awayTeam: 'New Zealand', awayFlag: '🇳🇿', homeScore: 2, awayScore: 2 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 5', km: 4.64, kcal: 299, url: 'https://www.strava.com/activities/18945549878' },
  ],
}
