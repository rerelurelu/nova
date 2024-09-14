import { component$ } from '@builder.io/qwik'
import { css } from 'styled-system/css'

type Props = {
  title: string
}

export const ContentsTitle = component$<Props>(({ title }) => {
  return (
    <>
      <h1
        class={css({
          color: 'head',
          textAlign: 'center',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          fontWeight: '400',
          letterSpacing: '0.1em',
        })}
      >
        {title}
      </h1>
    </>
  )
})
