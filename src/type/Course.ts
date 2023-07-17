export enum Level {
  EASY = 'easy',
  IMMEDIATE = 'immediate',
  ADVANCE = 'advance'
}

export interface ILevel {
  value: Level
  label: string
}

export interface DataFormCourse {
  id: number | null
  name: string
  thumbnail: string
  level: string
  isSequence: boolean
  tags: string[]
  description: string
}
