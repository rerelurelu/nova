import { $, component$, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import { HiChevronLeftSolid, HiChevronRightSolid } from '@qwikest/icons/heroicons'
import { css, cva } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'
import { PER_PAGE } from '~/constants'
import { getPagination } from '~/utils/getPagination'

type Props = {
  totalCount: number
  currentIndex: number
}

export const Pagination = component$<Props>(({ totalCount, currentIndex }) => {
  const store = useStore({ width: 0 })
  const maxIndex = Math.ceil(totalCount / PER_PAGE)
  const nav = useNavigate()

  useVisibleTask$(() => {
    store.width = window.innerWidth
  })

  useOnWindow(
    'resize',
    $(() => {
      store.width = window.innerWidth
    }),
  )

  const isLaptop = store.width >= 1024
  const pagination = getPagination(maxIndex, currentIndex, isLaptop)

  const handlePagination = $(async (index: number) => {
    await nav(`/blogs/${index}`)
  })

  return (
    <Flex
      mt={{ base: '4rem', md: '6rem' }}
      justifyContent={'center'}
      alignItems={'center'}
      flexWrap={'wrap'}
      gap='0.5rem'
    >
      {currentIndex !== 1 && (
        <li
          class={css({
            w: '24px',
            h: '40px',
            lineHeight: '36px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          })}
        >
          <button
            type='button'
            class={button({ visual: 'icon' })}
            onClick$={async () => await handlePagination(currentIndex - 1)}
          >
            <HiChevronLeftSolid
              class={css({
                w: '24px',
                h: '40px',
                lineHeight: '36px',
                color: 'icon',
                _hover: {
                  opacity: '0.7',
                },
              })}
            />
          </button>
        </li>
      )}
      {pagination.map((number) => (
        <li
          class={css({
            w: '40px',
            h: '40px',
            lineHeight: '36px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          })}
          key={number}
        >
          <button
            type='button'
            class={button({ visual: currentIndex === number ? 'currentPage' : 'default' })}
            onClick$={async () => await handlePagination(number)}
          >
            {number}
          </button>
        </li>
      ))}
      {currentIndex !== maxIndex && (
        <li
          class={css({
            w: '24px',
            h: '40px',
            lineHeight: '36px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          })}
        >
          <button
            type='button'
            class={button({ visual: 'icon' })}
            onClick$={async () => await handlePagination(currentIndex + 1)}
          >
            <HiChevronRightSolid
              class={css({
                w: '24px',
                h: '40px',
                lineHeight: '36px',
                color: 'icon',
                _hover: {
                  opacity: '0.7',
                },
              })}
            />
          </button>
        </li>
      )}
    </Flex>
  )
})

const button = cva({
  base: {
    pt: '3px',
    w: '40px',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '10px',
    textAlign: 'center',
  },
  variants: {
    visual: {
      default: { bg: 'transparent', _hover: { bg: '#ffffff1a' } },
      currentPage: { bg: '#ad5bba', _hover: { opacity: '0.7' } },
      icon: { w: '20px', h: '40px', pt: 0, bg: 'transparent', _hover: { opacity: '0.7' } },
    },
  },
})
