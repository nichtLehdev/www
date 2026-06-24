import type { Spieltag } from '../types'

export const spieltag04: Spieltag = {
  id: 4,
  date: 'Jun 15',
  basedOn: 'June 14 results',
  type: 'bike',
  isWalkConversion: false,
  target: 154,
  covered: 154,
  status: 'done',
  matches: [
    { homeTeam: 'Germany', homeFlag: '🇩🇪', awayTeam: 'Curaçao', awayFlag: '🇨🇼', homeScore: 7, awayScore: 1 },
    { homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Japan', awayFlag: '🇯🇵', homeScore: 2, awayScore: 2 },
    { homeTeam: 'Ivory Coast', homeFlag: '🇨🇮', awayTeam: 'Ecuador', awayFlag: '🇪🇨', homeScore: 1, awayScore: 0 },
    { homeTeam: 'Sweden', homeFlag: '🇸🇪', awayTeam: 'Tunisia', awayFlag: '🇹🇳', homeScore: 5, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 4.1', km: 103, elevation: 681, kcal: 2521, prs: 38, url: 'https://www.strava.com/activities/18933431393' },
    { title: 'WM Challenge Gameday 4.2', km: 53, elevation: 134, kcal: 1284, prs: 32, note: 'Sweden debt cleared', url: 'https://www.strava.com/activities/19010989178' },
  ],
}
