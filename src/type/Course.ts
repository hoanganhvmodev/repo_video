export enum Level {
  EASY = 1,
  IMMEDIATE = 2,
  ADVANCE = 3
}

export interface ILevel {
  value: Level
  label: string
}

export interface Tag {
  id: number
  content: string
}

export interface DataFormCourse {
  id: number | null
  name: string
  thumb: string
  level: Level
  isSequence: boolean
  tags: string[]
  description: string
}
