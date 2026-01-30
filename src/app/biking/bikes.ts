export interface Bike {
  id: string
  name: string
  /** Short label, e.g. "Road" or "Mountain" */
  type?: string
  spec: string
  /** Path under /biking/ in public, e.g. "tarmac.jpg". Add image to public/biking/ */
  image: string
}

export const bikes: Bike[] = [
  {
    id: '1',
    name: 'S-Works Tarmac SL8',
    type: 'Road',
    spec: 'Shimano Ultegra Di2, powermeter, Hadron Classic 3 wheels (650 & 580 mm)',
    image: 'tarmac.jpg',
  },
  {
    id: '2',
    name: 'Canyon Endurace CF 7',
    type: 'Road',
    spec: 'SRAM eTap',
    image: 'endurace.jpg',
  },
  {
    id: '3',
    name: 'Cube Attention SL',
    type: 'Mountain',
    spec: 'Mountain bike for trails and gravel.',
    image: 'cube.jpg',
  },
]

/** Your Strava profile URL for the "Visit my Strava" link. Append your athlete ID, e.g. …/athletes/12345 */
export const STRAVA_PROFILE_URL = 'https://www.strava.com/athletes/105742097/'
