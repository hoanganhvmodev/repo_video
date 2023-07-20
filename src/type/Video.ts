export interface Video {
  id: number | null
  name: string
  description: string
  url: string
  id_chapter: number | null
  id_user: number | null
  id_server_provider: number[] | null
}

export interface Server {
  id: number
  name: string
}
