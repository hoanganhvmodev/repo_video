import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from '@constants/locade'

interface HelloProps {}

const Hello: FC<HelloProps> = ({}) => {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <div>{t('Greeting', { name: 'Tuấn' })}</div>
      {languages &&
        languages.map((lang) => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(lang)}
          </button>
        ))}
    </>
  )
}

export default Hello
