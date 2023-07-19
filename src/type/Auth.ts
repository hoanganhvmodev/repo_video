export interface ResponseLogin {
  user: {
    id: number
    email: string
    full_name: string
    avatar_url: string
    provider: string
  }
  token: string
  refresh_token: string
}

export interface FormLogin {
  access_token: string
}
