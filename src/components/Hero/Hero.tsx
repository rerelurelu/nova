import { component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'
import { Braille } from './fragments/Braille'

export const Hero = component$(() => {
  return (
    <div
      class={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDir: 'row',
        columnGap: '3rem',
        rowGap: '3rem',
        flexWrap: 'wrap',
        w: '100%',
        h: 'fit-content',
      })}
    >
      <Braille tl={false} tr={true} ml={true} mr={true} bl={false} br={true} />
      <Braille tl={true} tr={false} ml={false} mr={true} bl={false} br={false} />
      <Braille tl={true} tr={false} ml={true} mr={false} bl={true} br={false} />
      <Braille tl={true} tr={true} ml={false} mr={false} bl={false} br={false} />
      <Braille tl={true} tr={false} ml={false} mr={true} bl={true} br={false} />
      <Braille tl={true} tr={true} ml={false} mr={false} bl={true} br={false} />
      <Braille tl={true} tr={false} ml={false} mr={true} bl={false} br={false} />
      <Braille tl={false} tr={false} ml={true} mr={true} bl={true} br={false} />
    </div>
  )
})
