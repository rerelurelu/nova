import { css } from 'styled-system/css'
import { divider } from 'styled-system/patterns'
import { PostContainer } from '~/components/PostContainer/PostContainer'

import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

import type { DocumentHead, StaticGenerateHandler } from '@builder.io/qwik-city'
import { text } from 'styled-system/recipes'
import { BASE_META } from '~/constants'
import { fetchPost, fetchPosts } from '~/services/post'
import type { Post } from '~/types/post'

export const usePostLoader = routeLoader$(async ({ params, status }) => {
  if (!params.postId) {
    status(404)
  }

  try {
    const post = await fetchPost(params.postId)
    return post
  } catch {
    status(404)
  }
})

export default component$(() => {
  const post = usePostLoader()

  if (!post.value) {
    return <></>
  }

  const dateDisplay = new Date(post.value.publishedAt).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div
      class={css({
        w: '100%',
        maxW: '48rem',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <header
        class={css({
          display: 'grid',
          justifyItems: 'center',
          gap: '3rem',
        })}
      >
        <h1
          class={css({
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
            fontWeight: '600',
            textWrap: 'pretty',
          })}
        >
          {post.value.title}
        </h1>
        <div
          class={[
            css({
              display: 'grid',
              justifyItems: 'center',
              gap: '0.25rem',
              fontSmoothing: 'antialiased',
            }),
            text({ size: 'sm' }),
          ]}
        >
          <p
            class={css({
              fontWeight: '600',
            })}
          >
            Published
          </p>
          <time dateTime={post.value.publishedAt}>{dateDisplay}</time>
        </div>
      </header>
      <div
        class={divider({
          mb: '0',
          mt: '5rem',
          orientation: 'horizontal',
          thickness: '0.125rem',
          color: 'divider',
        })}
      />
      <div
        class={css({
          mt: '5rem',
          w: '100%',
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          letterSpacing: '0.025rem',
        })}
      >
        <PostContainer postContent={post.value.content} />
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const data = await fetchPosts()

  const paths = data.posts.map((post) => {
    return post.id
  })

  return {
    params: paths.map((postId) => {
      return { postId }
    }),
  }
}

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(usePostLoader) as Post
  const description = post.content.slice(0, 30)

  return {
    title: `${post.title} | Relu`,
    meta: [
      ...BASE_META,
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: `${post.title} | Relu`,
      },
      {
        property: 'og:description',
        content: description,
      },
    ],
  }
}
