import type { Spieltag } from '../types'

export const spieltag15: Spieltag = {
  id: 15,
  date: 'Jun 26',
  basedOn: 'June 25 results',
  type: 'walk',
  isWalkConversion: true,
  target: 9.7,
  covered: 9.84,
  status: 'done',
  matches: [
    { homeTeam: 'Curaçao', homeFlag: '🇨🇼', awayTeam: 'Ivory Coast', awayFlag: '🇨🇮', homeScore: 0, awayScore: 2 },
    { homeTeam: 'Ecuador', homeFlag: '🇪🇨', awayTeam: 'Germany', awayFlag: '🇩🇪', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Japan', homeFlag: '🇯🇵', awayTeam: 'Sweden', awayFlag: '🇸🇪', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Tunisia', awayFlag: '🇹🇳', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Türkiye', homeFlag: '🇹🇷', awayTeam: 'USA', awayFlag: '🇺🇸', homeScore: 3, awayScore: 2 },
    { homeTeam: 'Paraguay', homeFlag: '🇵🇾', awayTeam: 'Australia', awayFlag: '🇦🇺', homeScore: 0, awayScore: 0 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 15.1', km: 5.21, kcal: 321, url: 'https://www.strava.com/activities/19076893407' },
    { title: 'WM Challenge Gameday 15.2', km: 4.63, kcal: 290, url: 'https://www.strava.com/activities/19076862125' },
  ],
}
