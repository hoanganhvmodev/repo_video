import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration)
dayjs.extend(relativeTime)

export const formatTimeVideo = (durationInSeconds: number): string => {
  const durationObj = dayjs.duration(durationInSeconds, 'seconds')
  const minutes = Math.floor(durationObj.asMinutes())
  const seconds = durationObj.seconds()
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
