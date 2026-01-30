export type CareerEventType =
  | 'job'
  | 'education'
  | 'dual study'
  | 'internship'
  | 'award'
  | 'project'
  | 'other'

export interface CareerEvent {
  id: string
  date: string
  title: string
  organization?: string
  description?: string
  type?: CareerEventType
}

/** Add your own events here. Newest first (reverse chronological) for CV style. */
export const careerEvents: CareerEvent[] = [
  {
    id: '1',
    date: '10/2024 - present',
    title: 'Software Product & Platform Engineer Analyst',
    organization: 'Accenture',
    description:
      'As a Software Product & Platform Engineer Analyst, I am responsible for the design, development, and maintenance of software products and platforms for our clients. Reaching from concept to production, frontend to backend and everything in between aswell as infrastructure, integration and deployment. Also I am regularly taking part in the training-process of new dual students, giving useful insights into the company culture and different areas of software development',
    type: 'job',
  },
  {
    id: '2',
    date: '10/2021 - 09/2024',
    title: 'Dual Student - Applied Computer Science',
    organization: 'Accenture & DHBW Mannheim',
    description:
      'As a dual student, I studied applied computer science at DHBW Mannheim while working at Accenture, graduating with a Bachelor of Science and a grade of 2.1',
    type: 'dual study',
  },
  {
    id: '3',
    date: '08/2021 - 09/2021',
    title: 'Intern - Software Development',
    organization: 'Accenture',
    description:
      'As preparation for my dual study, I worked as an intern at Accenture, gaining valuable experience and insights into the software development process and the company culture',
    type: 'internship',
  },
  {
    id: '4',
    date: '2021',
    title:
      'Jahrgangsbester staatlich geprüfter Informationstechnischer Assistent',
    organization: 'Land Rheinland-Pfalz',
    type: 'award',
  },
  {
    id: '5',
    date: '08/2019 - 06/2021',
    title: 'Student - Fachabitur - Computer Science',
    organization: 'Höhere Berufsfachschule IT Kaiserslautern',
    description:
      'In the final years of my general school education, I was enrolled in a school that focused on computer science and mathematics, graduating with a grade of 1.0',
    type: 'education',
  },
]
