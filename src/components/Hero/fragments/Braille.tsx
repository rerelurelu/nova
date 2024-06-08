import { component$ } from '@builder.io/qwik'
import { cva } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

export type Props = {
  tl: boolean
  tr: boolean
  ml: boolean
  mr: boolean
  bl: boolean
  br: boolean
}

export const Braille = component$<Props>(({ tl, tr, ml, mr, bl, br }) => {
  return (
    <Flex flexWrap={'wrap'} w='3.5rem' h='fit-content' rowGap={2} columnGap={2}>
      <div class={braille({ visual: tl ? 'on' : 'off' })} />
      <div class={braille({ visual: tr ? 'on' : 'off' })} />
      <div class={braille({ visual: ml ? 'on' : 'off' })} />
      <div class={braille({ visual: mr ? 'on' : 'off' })} />
      <div class={braille({ visual: bl ? 'on' : 'off' })} />
      <div class={braille({ visual: br ? 'on' : 'off' })} />
    </Flex>
  )
})

const braille = cva({
  base: {
    h: '1.5rem',
    w: '1.5rem',
    borderRadius: 'full',
  },
  variants: {
    visual: {
      on: {
        bg: '#fde047',
      },
      off: {
        border: '2px solid #fde047',
      },
    },
  },
})
