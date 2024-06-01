import { component$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { css } from 'styled-system/css'
import { Grid } from 'styled-system/jsx'
import { BlogField } from '~/components/BlogField/BlogField'
import { Hero } from '~/components/Hero/Hero'
import { BASE_META } from '~/constants'
import { fetchPosts } from '~/services/post'

export const usePostsLoader = routeLoader$(async () => {
  const { posts, totalCount } = await fetchPosts({ limit: 3 })
  return { posts, totalCount }
})

export default component$(() => {
  const data = usePostsLoader()

  return (
    <Grid h={'100%'} gridTemplateRows={'1fr auto'} gap={{ base: '6rem', md: '8rem' }}>
      <div
        class={css({
          w: '100%',
          h: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Hero />
      </div>
      <BlogField posts={data.value.posts} />
    </Grid>
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
