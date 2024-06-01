import { component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

export const Hero = component$(() => {
  return (
    <div class={container}>
      <div class={letter}>
        <span>□ ■</span>
        <span>■ ■</span>
        <span>□ ■</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>□ ■</span>
        <span>□ □</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>■ □</span>
        <span>■ □</span>
      </div>
      <div class={letter}>
        <span>■ ■</span>
        <span>□ □</span>
        <span>□ □</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>□ ■</span>
        <span>■ □</span>
      </div>
      <div class={letter}>
        <span>■ ■</span>
        <span>□ □</span>
        <span>■ □</span>
      </div>
      <div class={letter}>
        <span>■ □</span>
        <span>□ ■</span>
        <span>□ □</span>
      </div>
      <div class={letter}>
        <span>□ □</span>
        <span>■ ■</span>
        <span>■ □</span>
      </div>
    </div>
  )
})

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDir: 'row',
  columnGap: '3rem',
  rowGap: '1rem',
  flexWrap: 'wrap',
  w: '100%',
  color: '#fde047',
})

const letter = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDir: 'column',
})
