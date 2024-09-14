import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { css, cva } from 'styled-system/css'
import { ENTRIES } from '~/constants'
import { getPathname } from '~/utils/getPathname'

export const Header = component$(() => {
  const loc = useLocation()
  const pathname = getPathname(loc.url.pathname)

  return (
    <header
      class={css({
        w: '100%',
        alignItems: 'center',
        h: '4rem',
        top: '0',
        left: '0',
        right: '0',
        pt: '1rem',
        px: { base: '0', md: '3rem' },
        zIndex: '50',
        display: 'flex',
        justifyContent: { base: 'center', md: 'end' },
        bg: 'header.bg',
        pos: 'sticky',
        backdropFilter: 'blur(8px)',
      })}
    >
      <ul
        class={css({
          w: 'max-content',
          display: 'inline-flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          listStyle: 'none',
          m: '0',
          p: '0',
        })}
      >
        {ENTRIES.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link
                class={css({
                  bg: { _hover: 'transparent', _focus: 'transparent' },
                  gap: '0.75rem',
                  color: { base: 'white' },
                  alignItems: 'center',
                  userSelect: 'none',
                })}
                href={href}
                id={content}
              >
                <span
                  class={gradationRecipe(content === pathname ? { visual: 'active' } : undefined)}
                >
                  {content}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
})

const gradationRecipe = cva({
  base: {
    fontSize: 'large',
    fontWeight: '600',
    p: '0.5rem 0.7rem',
    textTransform: 'capitalize',
    fontSmoothing: 'antialiased',
    bg: { _hover: 'header.active' },
    backgroundClip: { _hover: 'text' },
    WebkitTextFillColor: { _hover: 'transparent' },
  },
  variants: {
    visual: {
      active: {
        bg: 'header.active',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
})
