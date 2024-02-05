'use client'

import { useEffect, useState } from 'react'

const Footer = () => {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

  useEffect(() => {
    const currentUrl = window.location.href

    if (currentUrl.includes('/login' || '/registration')) {
      setIsLoginPage(true)
    }
  }, [])

  return (
    <footer
      data-isLoginPage={isLoginPage}
      className="w-full flex justify-center items-center p-2 data-[isLoginPage=true]:hidden"
    >
      <p>
        Develop by{' '}
        <a
          href="https://github.com/gustavo-sb"
          className="font-bold hover:underline"
        >
          Gustavo Barbosa
        </a>{' '}
        with ❤️
      </p>
    </footer>
  )
}

export { Footer }
