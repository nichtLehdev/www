import type { Spieltag } from '../types'

export const spieltag19: Spieltag = {
  id: 19,
  date: 'Jun 30',
  basedOn: 'June 29 results',
  type: 'bike',
  isWalkConversion: false,
  target: 43,
  covered: 47,
  status: 'done',
  matches: [
    { homeTeam: 'Brazil', homeFlag: '🇧🇷', awayTeam: 'Japan', awayFlag: '🇯🇵', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Germany', homeFlag: '🇩🇪', awayTeam: 'Paraguay', awayFlag: '🇵🇾', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Morocco', awayFlag: '🇲🇦', homeScore: 1, awayScore: 1 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 19', km: 47, elevation: 363, kcal: 1332, prs: 40, note: '27.6-28.7°C', url: 'https://www.strava.com/activities/19126792652' },
  ],
  note: 'Berg runter macht halt einfach Spa\\u00df. Result after extra time, excl. penalties.',
}
