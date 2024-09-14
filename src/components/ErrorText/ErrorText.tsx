import { Slot, component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

export const ErrorText = component$(() => {
  return (
    <p
      class={css({
        color: 'error',
        mt: '0.75rem',
      })}
    >
      <Slot />
    </p>
  )
})
