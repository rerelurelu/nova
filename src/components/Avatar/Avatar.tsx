import { component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'
import AvatarIcon from '~/media/avatar.png?jsx'

export const Avatar = component$(() => {
  return (
    <div
      class={css({
        pos: 'relative',
        display: 'inline-flex',
      })}
    >
      <div
        class={css({
          w: '12rem',
          h: '12rem',
          borderRadius: '9999px',
          overflow: 'hidden',
          boxShadow: '0 0 0 3px token(colors.avatar.ring)',
        })}
      >
        <AvatarIcon />
      </div>
    </div>
  )
})
