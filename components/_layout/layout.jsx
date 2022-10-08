import React, { useState } from 'react'

import { FBIcon } from '../_svg/fb-icon'
import { InstaIcon } from '../_svg/insta-icon'
import { ProgressBar } from './progress-bar'
import { MenuModal } from './menu'

import { bg, socials } from './layout.module.scss'
import { TopNav } from './top-nav'
import { MobileNav } from './mobile-nav'

export const Layout = ({ bgVideo, slideFn }) => {
  return (
    <>
      <TopNav />
      <div id='portal' />
      <MobileNav />
      <MenuModal slideFn={slideFn} />
      <ProgressBar slideFn={slideFn} />
      <div className={socials}>
        <InstaIcon />
        <FBIcon />
      </div>
      <div className={bg}>
        {/* <video
          id='video-main'
          src={`https://res.cloudinary.com/jameswalker-work/video/upload/v1662286408/emerging/ferns_exk1af.mp4`}
          autoPlay
          loop
          muted
          style={{ opacity: bgVideo === 'main' ? 1 : 0 }}
        />
        <video
          id='video-about'
          src={`https://res.cloudinary.com/jameswalker-work/video/upload/v1663493648/emerging/about_gmtfyh.mp4`}
          // src={`https://res.cloudinary.com/jameswalker-work/video/upload/c_crop,g_west,x_200/v1663493648/emerging/about_gmtfyh.mp4`}
          autoPlay
          loop
          muted
          style={{ opacity: bgVideo === 'about' ? 1 : 0, width: '150vw' }}
        />
        <video
          id='video-end'
          src={`https://res.cloudinary.com/jameswalker-work/video/upload/v1663170955/emerging/mountains-2_rjf9dr.mp4`}
          autoPlay
          loop
          muted
          style={{ opacity: bgVideo === 'end' ? 1 : 0 }}
        /> */}
      </div>
    </>
  )
}
