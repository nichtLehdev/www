import type { Spieltag } from '../types'

export const spieltag08: Spieltag = {
  id: 8,
  date: 'Jun 19',
  basedOn: 'June 18 results',
  type: 'bike',
  isWalkConversion: false,
  target: 122,
  covered: 21.3,
  status: 'partial',
  matches: [
    { homeTeam: 'Czechia', homeFlag: '🇨🇿', awayTeam: 'South Africa', awayFlag: '🇿🇦', homeScore: 1, awayScore: 1 },
    { homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'South Korea', awayFlag: '🇰🇷', homeScore: 1, awayScore: 0 },
    { homeTeam: 'Switzerland', homeFlag: '🇨🇭', awayTeam: 'Bosnia', awayFlag: '🇧🇦', homeScore: 4, awayScore: 1 },
    { homeTeam: 'Canada', homeFlag: '🇨🇦', awayTeam: 'Qatar', awayFlag: '🇶🇦', homeScore: 6, awayScore: 0 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 8.1', km: 21.3, elevation: 136, kcal: 576, prs: 18, note: '32°C + rain. Switzerland 41km + Canada 60km banked.', url: 'https://www.strava.com/activities/18987890163' },
  ],
}
