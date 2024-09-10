import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import { css } from 'styled-system/css'
import { Grid } from 'styled-system/jsx'
import { Avatar } from '~/components/Avatar/Avatar'
import { BASE_META } from '~/constants'
import GitHubIcon from '~/media/github-icon.png?jsx'
import ZennIcon from '~/media/zenn-icon.png?jsx'

const sns = {
  github: { href: 'https://github.com/rerelurelu' },
  zenn: { href: 'https://zenn.dev/astrologian' },
} as const

const intro = {
  para1: 'ふろんとえんどえんじにあ',
} as const

export default component$(() => {
  return (
    <Grid placeItems={'center'} px={'1.5rem'}>
      <Avatar />
      <span
        class={css({
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          mt: '2.5rem',
        })}
      >
        relu
      </span>
      <ul
        class={css({
          mt: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          listStyle: 'none',
        })}
      >
        <li>
          <Link
            class={css({
              textDecoration: 'underline',
              _hover: {
                opacity: '0.7',
              },
            })}
            href={sns.github.href}
            target='_blank'
            aria-label='Link to GitHub'
          >
            <GitHubIcon
              class={css({
                objectFit: 'fill',
                w: '24px',
                h: '24px',
              })}
              alt='GitHub icon'
            />
          </Link>
        </li>
        <li>
          <Link
            class={css({
              textDecoration: 'underline',
              _hover: {
                opacity: '0.7',
              },
            })}
            href={sns.zenn.href}
            target='_blank'
            aria-label='Link to Zenn'
          >
            <ZennIcon
              class={css({
                objectFit: 'fill',
                w: '24px',
                h: '24px',
              })}
              alt='Zenn icon'
            />
          </Link>
        </li>
      </ul>
      <div
        class={css({
          mt: '5rem',
          display: 'grid',
          w: '100%',
          maxW: '56rem',
          placeItems: 'center',
          lineHeight: '1.5rem',
        })}
      >
        <p>{intro.para1}</p>
      </div>
    </Grid>
  )
})

export const head: DocumentHead = {
  title: 'About | Relu',
  meta: [
    ...BASE_META,
    {
      name: 'description',
      content: 'About Relu',
    },
    {
      property: 'og:title',
      content: 'About | Relu',
    },
    {
      property: 'og:description',
      content: 'About Relu',
    },
  ],
}
