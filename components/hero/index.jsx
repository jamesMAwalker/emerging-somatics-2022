import React, { useEffect, useState } from 'react'

import { Wordmark } from '../_svg/wordmark'

import {
  content,
  companyTitle,
  centerContent,
  header,
  subheader,
  label,
  btnScroll,
} from './hero.module.scss'

export const Hero = ({ slideAnim }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const handleScrollNextSection = () => {
    // scroll to first section button click/touch
  }

  // fade content after fonts loaded
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
    })
  })

  return (
    <div className={`${content} hero-content`}>
      <h1 className={companyTitle}>
        <Wordmark />
      </h1>
      <div className={centerContent}>
        {fontsLoaded && (
          <>
            <h2 className={header}>Discover Embodied Leadership.</h2>
            <p className={subheader}>
              Skillful action, pragmatic wisdom, and grounded compassion.
            </p>
            <button className={btnScroll} onClick={handleScrollNextSection}>
              scroll to proceed →
            </button>
          </>
        )}
      </div>
    </div>
  )
}