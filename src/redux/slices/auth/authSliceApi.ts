import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FormLogin, ResponseLogin } from '@type/Auth'

const baseUrl =
  import.meta.env.VITE_ENV === 'production'
    ? import.meta.env.VITE_BASE_URL_PRODUCT
    : import.meta.env.VITE_BASE_URL_DEVELOP
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/auth/` }),
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLogin, FormLogin>({
      query: (body) => ({
        url: `google_login`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginMutation } = authApi
