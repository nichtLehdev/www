import type { Spieltag } from '../types'

export const spieltag26: Spieltag = {
  id: 26,
  date: 'Jul 7',
  basedOn: 'July 6 results',
  type: 'bike',
  isWalkConversion: false,
  target: 15,
  covered: 15.1,
  status: 'done',
  matches: [
    { homeTeam: 'Portugal', homeFlag: '🇵🇹', awayTeam: 'Spain', awayFlag: '🇪🇸', homeScore: 0, awayScore: 1 },
    { homeTeam: 'USA', homeFlag: '🇺🇸', awayTeam: 'Belgium', awayFlag: '🇧🇪', homeScore: 1, awayScore: 4 },
  ],
  strava: [
    { title: 'WM Challenge Gameday 26', km: 15.1, elevation: 123, kcal: 514, prs: 0, url: 'https://www.strava.com/activities/19217547048' },
  ],
  note: 'Ronaldo\'s World Cup ends with a whimper. Belgium demolish USMNT 4-1. Gravel ride!',
}
