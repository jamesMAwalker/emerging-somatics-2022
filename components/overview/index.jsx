import React, { Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { useInView } from 'react-intersection-observer'

import { OVERVIEW_CONTENT } from './overview.text'

import { ParagraphBlock } from '../_elements/paragraph-block'
import { ArrowIcon } from '../_svg/collapse'

import {
  overview,
  expanderContent,
  blocks,
  btnCollapse,
  bg,
} from './overview.module.scss'
import { fadeIntoView } from '../../animation/section-animations'

const ExpanderContent = ({ closeModal, slideFn }) => {
  useEffect(() => {
    // TODO: Use slideFn to scroll to self before closing.
    // TODO: Create mobile config for expander.

    const openTL = gsap.timeline()

    openTL
      .fromTo(
        `.${bg}`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        '#ov-par-block, #ov-btn-col',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
  }, [])

  const closeToAppointments = (e) => {
    closeModal()
    setTimeout(() => {
      slideFn.current(e)
    }, 500)
    // animate closed & use slideFn.current to scroll to calendar
  }

  /* 
    TODO: Add a span containing "___.01/2/3" to each block on hover as per figma design.
  */

  return (
    <section className={expanderContent} id='expander'>
      <div className={blocks} id='text-blocks'>
        {OVERVIEW_CONTENT.map((oc, idx) => {
          return (
            <ParagraphBlock
              key={idx}
              header={oc.header}
              text={oc.text}
              gsapId={idx !== 0 ? 'ov-par-block' : ''}
              btnClass={idx === 0 ? 'ov-btn' : ''}
              btn={idx === 3 && 'Make an Appointment →'}
              slideFnData={idx === 3 && { attr: 'slide-link', id: 5 }}
              btnAction={idx === 3 && ((e) => closeToAppointments(e))}
              fadeBtn={false}
            />
          )
        })}
      </div>
      <div className={bg} />
      <button className={btnCollapse} onClick={closeModal} id='ov-btn-col'>
        <span>Collapse</span>
        <ArrowIcon />
      </button>
    </section>
  )
}

export const Overview = ({ toggleProgressVis, slideFn }) => {
  const [ovRef, ovInView] = useInView({ threshold: 0.8 })
  const [expanded, setExpanded] = useState(false)
  const [portal, setPortal] = useState(null)

  const OC = OVERVIEW_CONTENT

  // set up portal for expander
  useEffect(() => {
    const portalLocation = document.querySelector('#portal')
    setPortal(portalLocation)
  }, [])

  // set BG video
  useEffect(() => {
    if (ovInView) {
      gsap.to('#video-about, #video-end', {
        opacity: 0,
      })
      gsap.to('#video-main', {
        opacity: 1,
      })
    }
    fadeIntoView(ovInView, '#ov-container')
  }, [ovInView])

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const animateToggleExpand = () => {
    /* 
    TODO: If "make appointments" triggers close, scroll to calendar section using slideAnim.
    */
    const isClosing = expanded
    const closeTL = gsap.timeline({ onComplete: toggleExpand })

    toggleProgressVis()

    if (isClosing) {
      closeTL.to('#expander', {
        opacity: 0,
      })
    } else {
      toggleExpand()
    }
  }

  return (
    <section className={`${overview}`} ref={ovRef} id='ov-container'>
      {expanded ? (
        createPortal(
          <ExpanderContent
            closeModal={animateToggleExpand}
            slideFn={slideFn}
          />,
          portal
        )
      ) : (
        <ParagraphBlock
          text={OC[0].text}
          header={OC[0].header}
          btn={OC[0].btnText}
          btnAction={animateToggleExpand}
          btnVis={expanded}
          btnClass={'ov-btn'}
        />
      )}
    </section>
  )
}
