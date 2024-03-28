import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/icons/logo.png'

function Header() {
  const { t } = useTranslation()
  return (
    <div className="text-xl md:px-2 flex  border-b border-gray-100 p-2">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-8 h-8 mx-4" />
        <h1 className="font-semibold">CoverView</h1>
      </Link>

      <div className="ml-auto md:mr-4 ">
        <Link to="/faq" className="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4">
          <span className="hidden md:inline-block">{t('common.howToUse')}</span>
        </Link>
        <a
          href="https://github.com/Lruihao/CoverView"
          target="_blank"
          rel="noreferrer"
          className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-4 font-Inter font-semibold p-2"
        >
          <span className="text-sm">⭐ {t('common.star')}</span>
        </a>
      </div>
    </div>
  )
}

export default Header
