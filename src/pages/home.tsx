import { FC } from 'react'
import HomePage from '@components/HomePage/HomePage'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

// eslint-disable-next-line no-empty-pattern
const home: FC<HomeProps> = ({}) => {
  return <HomePage />
}

export default home
