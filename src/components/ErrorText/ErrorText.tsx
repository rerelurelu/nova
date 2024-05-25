import { Slot, component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

export default component$(() => {
  return (
    <p class={errorText}>
      <Slot />
    </p>
  )
})

const errorText = css({
  color: 'error',
  mt: '0.75rem',
})
