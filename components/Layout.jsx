import { useState } from "react"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../assets/fonts/Figtree-Regular.ttf' })
const myBoldFont = localFont({ src: '../assets/fonts/Figtree-Bold.ttf' })
import Navbar from "./Navbar"
import Footer from "./Footer"

import { Nunito_Sans } from 'next/font/google'
const openSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }) => {
  const [theme, settheme] = useState("oneSecond")
  return (
    <div data-theme={theme} lang="en"
      className={` bg-base-100  ${myFont.className} `}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout