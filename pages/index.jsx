import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'
import { useSwipeable } from 'react-swipeable'
import { dehydrate, QueryClient } from 'react-query'

import { SECTION_DATA } from '/components/_shared-data/section-data.js'
import { imgData, baseUrlMp4 } from '/lib/cloudinary.js'

import { Layout } from '../components/_layout/layout'
import { useInView } from 'react-intersection-observer'
import { useContentful } from '../hooks/useContentful'
import { mapSectionsToQuery } from '../lib/contentful'

const GAP_DIST = 90 / (SECTION_DATA.length - 1)
const MARKER_RADIUS = 24

const Home = ({ dehydratedState }) => {
  // console.log('dehydratedState: ', dehydratedState);
 
  const sections = mapSectionsToQuery(SECTION_DATA, dehydratedState)
  console.log('sections: ', sections);

  const [menuOpen, setMenuOpen] = useState(false)
  const [progressVisible, setProgressVisible] = useState(true)

  const [bgVideo, setBgVideo] = useState('main')

  const container = useRef(null)
  const slidesArr = useRef([])
  const slideFn = useRef(() => {})

  const swipeHandlers = useSwipeable({
    onSwiped: (e) => {
      slideFn.current(e)
    },
  })

  //  TODO: Explore methods of abstracting this to separate file.
  useEffect(() => {
    gsap.registerPlugin(Draggable)
    gsap.config({ nullTargetWarn: false })

    const slides = slidesArr.current
    const container = document.querySelector('#panelWrap')
    const labels = document.querySelectorAll('.progress-label')

    let dur = 0.8
    let offsets = []
    let oldSlide = 0
    let activeSlide = 0
    let iw = window.innerWidth

    gsap.set('.titleWrap', { xPercent: -50 })
    gsap.set('.title', { y: 30 })
    gsap.set('#progress-line', {
      width: 0,
    })
    gsap.set(labels, {
      opacity: 0,
    })

    // lower screen animation - rotating titles
    const dotAnim = gsap.timeline({ paused: true })
    dotAnim.to(
      '.dot',
      {
        stagger: { each: 1, yoyo: true, repeat: 1 },
        scale: 2.1,
        rotation: 0.1,
        ease: 'none',
      },
      0.5
    )
    dotAnim.to(
      '.title',
      slides.length + 1,
      { y: -(slides.length * 30), rotation: 0.01, ease: 'none' },
      0
    )
    dotAnim.time(1)

    sizeIt()

    // check which interaction called the slide
    function slideAnim(e) {
      oldSlide = activeSlide

      // no action if portal/menu open
      const portalOpen = e?.path?.some((el) => {
        return el?.id === 'portal'
      })
      if (portalOpen) return

      // some elements should not trigger scrolling animation
      if (e.target?.dataset.action === 'no-scroll') {
        return
      }
      if (e?.event?.target?.dataset.action === 'no-scroll') {
        return
      }

      // don't activate during prev animation
      if (gsap.isTweening(container)) {
        return
      }
      // menu+end+progress click
      if (e.target?.dataset.action === 'slide-link') {
        activeSlide = Number(e.target.id) + 1
      }
      // mobile swipe
      if (e.absX) {
        activeSlide = e.dir === 'Left' ? (activeSlide += 1) : (activeSlide -= 1)
      }
      // mouse wheel
      else {
        if (e.id === 'menu-modal') return
        activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1)
      }
      // }
      // make sure we're not past the end or beginning slide
      activeSlide = activeSlide < 0 ? 0 : activeSlide
      activeSlide =
        activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide
      if (oldSlide === activeSlide) {
        return
      }

      // progressBar animation
      gsap.to('#progress-marker', {
        x: `${GAP_DIST * activeSlide}vw`,
      })
      gsap.to('#progress-line', {
        width: `calc(${GAP_DIST * activeSlide}vw - ${MARKER_RADIUS}px)`,
      })
      gsap.to(labels, {
        opacity: 0,
      })
      gsap.to(labels[activeSlide], {
        opacity: 1,
      })

      if (this.id != 'dragger') {
        // if we're dragging we don't animate the container
        gsap.to(container, dur, {
          x: offsets[activeSlide],
          onUpdate: tweenDot,
        })
      }
    }

    slideFn.current = slideAnim

    // update the draggable element snap points
    function sizeIt() {
      offsets = []
      iw = window.innerWidth
      gsap.set('#panelWrap', { width: slides.length * iw })
      gsap.set(slides, { width: iw })
      for (let i = 0; i < slides.length; i++) {
        offsets.push(-slides[i].offsetLeft)
      }
      gsap.set(container, { x: offsets[activeSlide] })
      // dragMe[0].vars.snap = offsets
    }

    gsap.set('.hideMe', { opacity: 1 })
    window.addEventListener('wheel', slideAnim)
    window.addEventListener('resize', sizeIt)

    // update dot animation when dragger moves
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, 'x') / iw) + 1,
      })
    }
  })

  // progressbar visibility control
  useEffect(() => {
    const progressTL = gsap.timeline({ dur: 1 })

    if (progressVisible) {
      progressTL.to('#progress-bar', {
        opacity: 1,
        visibility: 'visible',
      })
    } else {
      progressTL.to('#progress-bar', {
        opacity: 0,
        visibility: 'hidden',
      })
    }
  }, [progressVisible])

  const layoutProps = { bgVideo, slideFn }
  const sectionProps = {
    // slideAnim: slideFn.current,
    slideFn,
    toggleProgressVis: () => setProgressVisible(!progressVisible),
  }

  return (
    <div className='hideMe'>
      <Layout {...layoutProps} />
      <div id='masterWrap' {...swipeHandlers}>
        <div id='panelWrap' ref={container}>
          {sections.map(({ Component, ...slide }, idx) => {
            return (
              <section key={idx} ref={(el) => (slidesArr.current[idx] = el)}>
                <Component {...sectionProps} {...slide} inViewRef={null} />
              </section>
            )
          })}
        </div>
      </div>
      <div className='titleWrap'>
        {SECTION_DATA.map(({ title }) => {
          
          // > Mobile only section indicator
          return (
            <div key={title} className='title'>
              {title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  const { getSlides } = useContentful()

  await queryClient.prefetchQuery('slides', async () => getSlides())

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  }
}
