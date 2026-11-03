'use client'

import { useEffect, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], summary, label, select, [data-cursor="card"]'
const TEXT_INPUT_SELECTOR = 'input, textarea, [contenteditable="true"]'
const MAGNETIC_MAX_SIZE = 240
const MAGNETIC_PULL = 0.3

type HoverState = 'default' | 'interactive' | 'card' | 'text'

function useFinePointer() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () =>
      setEnabled(pointerQuery.matches && !motionQuery.matches)

    update()
    pointerQuery.addEventListener('change', update)
    motionQuery.addEventListener('change', update)
    return () => {
      pointerQuery.removeEventListener('change', update)
      motionQuery.removeEventListener('change', update)
    }
  }, [])

  return enabled
}

export function CursorEffect() {
  const enabled = useFinePointer()
  return enabled ? <CursorLayers /> : null
}

function CursorLayers() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const ringTargetX = useMotionValue(-100)
  const ringTargetY = useMotionValue(-100)
  const ringScale = useMotionValue(1)
  const ringOpacity = useMotionValue(0.5)
  const dotScale = useMotionValue(1)
  const visibility = useMotionValue(0)

  const ringX = useSpring(ringTargetX, { stiffness: 380, damping: 32, mass: 0.6 })
  const ringY = useSpring(ringTargetY, { stiffness: 380, damping: 32, mass: 0.6 })
  const ringScaleSpring = useSpring(ringScale, { stiffness: 300, damping: 24 })
  const ringOpacitySpring = useSpring(ringOpacity, { stiffness: 300, damping: 30 })
  const dotScaleSpring = useSpring(dotScale, { stiffness: 500, damping: 30 })
  const opacity = useSpring(visibility, { stiffness: 200, damping: 30 })

  const glowX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.8 })
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.8 })
  const spotlightMask = useMotionTemplate`radial-gradient(260px circle at ${glowX}px ${glowY}px, black 0%, transparent 100%)`

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    let frame = 0
    let pointerX = -100
    let pointerY = -100
    let hovered: Element | null = null
    let hoverState: HoverState = 'default'

    const applyHoverState = (state: HoverState) => {
      if (state === hoverState) return
      hoverState = state
      ringScale.set(state === 'interactive' ? 1.6 : state === 'card' ? 1.9 : state === 'text' ? 0.6 : 1)
      ringOpacity.set(state === 'default' ? 0.5 : state === 'text' ? 0.25 : 0.9)
      dotScale.set(state === 'interactive' ? 0.5 : state === 'text' ? 0.35 : state === 'card' ? 0.8 : 1)
    }

    const render = () => {
      frame = 0
      mouseX.set(pointerX)
      mouseY.set(pointerY)

      let targetX = pointerX
      let targetY = pointerY
      if (hovered && hoverState === 'interactive') {
        const rect = hovered.getBoundingClientRect()
        if (rect.width <= MAGNETIC_MAX_SIZE && rect.height <= MAGNETIC_MAX_SIZE) {
          targetX += (rect.left + rect.width / 2 - pointerX) * MAGNETIC_PULL
          targetY += (rect.top + rect.height / 2 - pointerY) * MAGNETIC_PULL
        }
      }
      ringTargetX.set(targetX)
      ringTargetY.set(targetY)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      pointerX = event.clientX
      pointerY = event.clientY
      if (visibility.get() === 0) {
        mouseX.jump(pointerX)
        mouseY.jump(pointerY)
        ringX.jump(pointerX)
        ringY.jump(pointerY)
        glowX.jump(pointerX)
        glowY.jump(pointerY)
      }
      visibility.set(1)
      schedule()
    }

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null
      if (!target?.closest) return
      if (target.closest(TEXT_INPUT_SELECTOR)) {
        hovered = null
        applyHoverState('text')
        return
      }
      const interactive = target.closest(INTERACTIVE_SELECTOR)
      hovered = interactive
      if (!interactive) applyHoverState('default')
      else if (interactive.matches('[data-cursor="card"]')) applyHoverState('card')
      else applyHoverState('interactive')
      schedule()
    }

    const hide = () => visibility.set(0)
    const handleLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide()
    }
    const press = () => dotScale.set(dotScale.get() * 0.6)
    const release = () => {
      const state = hoverState
      hoverState = 'default'
      applyHoverState(state)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('pointerdown', press, { passive: true })
    window.addEventListener('pointerup', release, { passive: true })
    window.addEventListener('scroll', schedule, { passive: true })
    document.addEventListener('pointerover', handleOver, { passive: true })
    document.addEventListener('pointerout', handleLeave, { passive: true })
    window.addEventListener('blur', hide)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerdown', press)
      window.removeEventListener('pointerup', release)
      window.removeEventListener('scroll', schedule)
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerout', handleLeave)
      window.removeEventListener('blur', hide)
    }
  }, [dotScale, glowX, glowY, mouseX, mouseY, ringOpacity, ringScale, ringTargetX, ringTargetY, ringX, ringY, visibility])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        className="cursor-spotlight-grid pointer-events-none absolute inset-0"
        style={{ opacity, maskImage: spotlightMask, WebkitMaskImage: spotlightMask }}
      />
      <motion.div
        className="pointer-events-none absolute left-0 top-0 size-[420px] rounded-full will-change-transform"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          opacity,
          background:
            'radial-gradient(circle, rgb(61 255 143 / 0.09) 0%, rgb(61 255 143 / 0.03) 35%, transparent 70%)',
        }}
      />
      <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
        <motion.div
          className="pointer-events-none absolute left-0 top-0 size-11 rounded-full border border-accent will-change-transform"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
            scale: ringScaleSpring,
            opacity: ringOpacitySpring,
            boxShadow: '0 0 18px rgb(61 255 143 / 0.25), inset 0 0 12px rgb(61 255 143 / 0.12)',
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-0 top-0 size-2 rounded-full bg-accent will-change-transform"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
            scale: dotScaleSpring,
            boxShadow: '0 0 10px rgb(61 255 143 / 0.9), 0 0 22px rgb(61 255 143 / 0.5)',
          }}
        />
      </motion.div>
    </div>
  )
}
