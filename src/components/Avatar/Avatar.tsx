import { component$ } from '@builder.io/qwik'
import AvatarIcon from '~/media/avatar.png?jsx'
import { css } from '~/styled-system/css'

export default component$(() => {
  return (
    <div class={avatar}>
      <div class={imageContainer}>
        <AvatarIcon />
      </div>
    </div>
  )
})

const avatar = css({
  pos: 'relative',
  display: 'inline-flex',
})

const imageContainer = css({
  w: '12rem',
  h: '12rem',
  borderRadius: '9999px',
  overflow: 'hidden',
  boxShadow: '0 0 0 3px token(colors.avatar)',
})
