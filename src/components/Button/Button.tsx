import { Slot, component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

export type Props = {
  disabled: boolean
  type: 'button' | 'submit' | 'reset' | undefined
}

export const Button = component$<Props>(({ disabled, type }) => {
  return (
    <button
      class={css({
        fontWeight: '400',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        color: 'head',
        w: '70%',
        maxW: '24rem',
        mt: '2.5rem',
        bg: { base: 'button.bg.base', _hover: 'button.bg.hover' },
        display: 'inline-flex',
        flexShrink: 0,
        cursor: 'pointer',
        userSelect: 'none',
        textAlign: 'center',
        transitionDuration: '.2s',
        transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        borderRadius: '0.5rem',
        h: '3rem',
        minH: '3rem',
        px: '1rem',
        textTransform: 'uppercase',
        textDecorationLine: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        _disabled: {
          color: 'white',
          opacity: '0.3',
          pointerEvents: 'none',
        },
      })}
      disabled={disabled}
      type={type}
    >
      <Slot />
    </button>
  )
})
