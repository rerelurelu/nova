import { component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

export default component$(() => {
  return (
    <footer class={footer}>
      <p>© 2024 relu</p>
    </footer>
  )
})

const footer = css({
  borderTop: '1px solid token(colors.border.section)',
  py: '3rem',
  letterSpacing: 'widest',
  textAlign: 'center',
})
