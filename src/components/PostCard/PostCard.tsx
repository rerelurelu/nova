import { css } from 'styled-system/css'

import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { text } from 'styled-system/recipes'
import type { tag } from '~/types/post'

type Props = {
  title: string
  href: string
  createdAt: string
  tags: tag[]
}

export const PostCard = component$<Props>(({ title, href, createdAt, tags }) => {
  const dateDisplay = new Date(createdAt).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article class={card}>
      <div class={cardBody}>
        <header class={cardHeader}>
          <h2 class={cardTitle}>
            <Link class={link} href={href}>
              {title}
            </Link>
          </h2>
        </header>
        <div class={timeContainer}>
          <time class={text({ size: 'sm' })} dateTime={createdAt}>
            {dateDisplay}
          </time>
          <div class={tagContainer}>
            {tags.map((tag) => (
              <div class={css({ color: 'postCard.tag' })} key={tag.id}>
                <span class={[hashTag, text({ size: 'sm' })]}>#</span>
                <span>{tag.tagName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
})

const card = css({
  pos: 'relative',
  display: 'flex',
  flexDir: 'column',
  borderRadius: '1rem',
  h: '12rem',
  overflow: 'hidden',
  bg: 'postCard.bg',
})

const cardBody = css({
  color: 'postCard.title.base',
  p: '1.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  flex: '1 1 auto',
  flexDir: 'column',
  gap: '0.5rem',
})

const cardHeader = css({
  pb: 'auto',
})

const cardTitle = css({
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: '1.75rem',
  overflowWrap: 'break-word',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const link = css({
  _hover: {
    color: 'postCard.title.hover',
    cursor: 'pointer',
  },
})

const timeContainer = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'end',
})

const tagContainer = css({
  mt: '0.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: '0.5rem',
  rowGap: '0',
})

const hashTag = css({
  mr: '1px',
})
