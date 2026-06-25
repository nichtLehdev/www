export interface Match {
  homeTeam: string
  homeFlag: string
  awayTeam: string
  awayFlag: string
  homeScore: number
  awayScore: number
}

export type SpieltagStatus = 'done' | 'partial' | 'banked' | 'pending'
export type ActivityType = 'bike' | 'walk'

export interface StravaActivity {
  title: string
  km: number
  elevation?: number
  kcal?: number
  prs?: number
  note?: string
  url?: string
}

export interface Spieltag {
  id: number
  date: string
  basedOn: string
  type: ActivityType
  isWalkConversion: boolean
  target: number
  covered: number
  status: SpieltagStatus
  matches: Match[]
  strava: StravaActivity[]
  note?: string
}
