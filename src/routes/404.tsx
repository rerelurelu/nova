import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { css } from 'styled-system/css'
import { divider } from 'styled-system/patterns'
import { BASE_META } from '~/constants'

export default component$(() => {
  return (
    <div
      class={css({
        display: 'grid',
        placeItems: 'center',
        h: '70vh',
        px: '3rem',
      })}
    >
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <h1
          class={css({
            color: 'white',
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
          })}
        >
          404
        </h1>
        <div
          class={divider({
            orientation: 'vertical',
            thickness: '0.125rem',
            color: 'divider',
            h: '3.5rem',
            mx: '1.5rem',
          })}
        />
        <h2
          class={css({
            color: 'white',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          })}
        >
          This page could not be found.
        </h2>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: '404 This page could not be found.',
  meta: [
    ...BASE_META,
    {
      name: 'description',
      content: '404 This page could not be found.',
    },
    {
      property: 'og:title',
      content: '404 This page could not be found.',
    },
    {
      property: 'og:description',
      content: '404 This page could not be found.',
    },
  ],
}
