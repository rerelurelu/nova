import { component$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import BlogField from '~/components/blogField/blogField'
import Hero from '~/components/hero/hero'
import { BASE_META } from '~/constants'
import { fetchPosts } from '~/services/post'
import { css } from '~/styled-system/css'

export const usePostsLoader = routeLoader$(async () => {
  const { posts, totalCount } = await fetchPosts({ limit: 3 })
  return { posts, totalCount }
})

export default component$(() => {
  const data = usePostsLoader()

  return (
    <>
      <div class={heroWrapper}>
        <Hero />
      </div>
      <BlogField posts={data.value.posts} />
    </>
  )
})

export const head: DocumentHead = {
  title: 'Home | Relu',
  meta: [
    ...BASE_META,
    {
      name: 'description',
      content: `'Relu's personal website'`,
    },
    {
      property: 'og:title',
      content: 'Home | Relu',
    },
    {
      property: 'og:description',
      content: `Relu's personal website`,
    },
  ],
}

const heroWrapper = css({
  w: '100%',
  h: '100vh',
  display: 'flex',
  justifyContent: 'center',
})
