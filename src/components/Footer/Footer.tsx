import { component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

export const Footer = component$(() => {
  return (
    <footer
      class={css({
        borderTop: '1px solid token(colors.border.section)',
        py: '3rem',
        letterSpacing: 'widest',
        textAlign: 'center',
      })}
    >
      <p>© 2024 relu</p>
    </footer>
  )
})
