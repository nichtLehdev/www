import type { Spieltag } from '../types'

export const spieltag17: Spieltag = {
  id: 17,
  date: 'Jun 28',
  basedOn: 'June 27 results',
  type: 'walk',
  isWalkConversion: true,
  target: 10,
  covered: 10.39,
  status: 'done',
  matches: [
    { homeTeam: 'Panama', homeFlag: '🇵🇦', awayTeam: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: 0, awayScore: 2 },
    { homeTeam: 'Croatia', homeFlag: '🇭🇷', awayTeam: 'Ghana', awayFlag: '🇬🇭', homeScore: 2, awayScore: 1 },
    { homeTeam: 'Colombia', homeFlag: '🇨🇴', awayTeam: 'Portugal', awayFlag: '🇵🇹', homeScore: 0, awayScore: 0 },
    { homeTeam: 'DR Congo', homeFlag: '🇨🇩', awayTeam: 'Uzbekistan', awayFlag: '🇺🇿', homeScore: 3, awayScore: 1 },
    { homeTeam: 'Algeria', homeFlag: '🇩🇿', awayTeam: 'Austria', awayFlag: '🇦🇹', homeScore: 3, awayScore: 3 },
    { homeTeam: 'Jordan', homeFlag: '🇯🇴', awayTeam: 'Argentina', awayFlag: '🇦🇷', homeScore: 1, awayScore: 3 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 17', km: 10.39, kcal: 647, prs: 0, note: 'Recovery Walk bei viel zu warm aber etwas Wind — Abschluss der Gruppenphase', url: 'https://www.strava.com/activities/19100517660' },
  ],
  note: 'Recovery walk. Too warm but some wind. End of group stage.',
}
