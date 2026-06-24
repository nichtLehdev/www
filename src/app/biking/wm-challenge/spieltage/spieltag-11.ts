import type { Spieltag } from '../types'

export const spieltag11: Spieltag = {
  id: 11,
  date: 'Jun 22',
  basedOn: 'June 21 results',
  type: 'walk',
  isWalkConversion: true,
  target: 7.5,
  covered: 7.53,
  status: 'done',
  matches: [
    { homeTeam: 'Spain', homeFlag: '🇪🇸', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦', homeScore: 4, awayScore: 0 },
    { homeTeam: 'Belgium', homeFlag: '🇧🇪', awayTeam: 'Iran', awayFlag: '🇮🇷', homeScore: 0, awayScore: 0 },
    { homeTeam: 'Uruguay', homeFlag: '🇺🇾', awayTeam: 'Cape Verde', awayFlag: '🇨🇻', homeScore: 2, awayScore: 2 },
    { homeTeam: 'New Zealand', homeFlag: '🇳🇿', awayTeam: 'Egypt', awayFlag: '🇪🇬', homeScore: 1, awayScore: 3 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 11', km: 7.53, kcal: 469, note: 'Warm', url: 'https://www.strava.com/activities/19026495016' },
  ],
}
