import { FC } from 'react'
import LoginForm from '@components/LoginForm/LoginForm'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface loginProps {}

// eslint-disable-next-line no-empty-pattern
const login: FC<loginProps> = ({}) => {
  return <LoginForm />
}

export default login
