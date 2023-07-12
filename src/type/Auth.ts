export interface ResponseLogin {
  accessToken: string
  refreshToken: string
  expires_in: number
}

export interface FormLogin {
  token: string
}
