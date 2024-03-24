import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { tv } from 'tailwind-variants'
import { ENTRIES } from '~/constants'
import { getPathname } from '~/utils/getPathname'

export default component$(() => {
  const loc = useLocation()
  const pathname = getPathname(loc.url.pathname)

  return (
    <header class='w-full flex items-center h-16 fixed top-0 left-0 right-0 pt-4 px-0 md:px-12 z-50 justify-center md:justify-end bg-header backdrop-blur-md'>
      <ul class='w-max inline-flex flex-row flex-wrap list-none m-0 p-0'>
        {ENTRIES.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link
                class='bg-transparent hover:bg-transparent focus:bg-transparent gap-3 text-white items-center select-none'
                href={href}
                id={content}
              >
                <span
                  class={textGradation({ active: content === pathname ? 'active' : undefined })}
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

const textGradation = tv({
  base: 'md:text-lg font-semibold p-2 capitalize antialiased hover:bg-gradient-to-b hover:from-lightCyan hover:to-lightPurple hover:bg-clip-text hover:text-transparent',
  variants: {
    active: {
      active: 'bg-gradient-to-b from-lightCyan to-lightPurple bg-clip-text text-transparent',
    },
  },
})
