import { BlogField } from '~/components/BlogField/BlogField'
import { ContentsTitle } from '~/components/ContentsTitle/ContentsTitle'
import { Pagination } from '~/components/Pagination/Pagination'
import { getCurrentIndex } from '~/utils/getCurrentIndex'

import { component$ } from '@builder.io/qwik'
import { routeLoader$, useLocation } from '@builder.io/qwik-city'

import type { DocumentHead, StaticGenerateHandler } from '@builder.io/qwik-city'
import { BASE_META, PER_PAGE } from '~/constants'
import { fetchPosts } from '~/services/post'

export const usePostsLoader = routeLoader$(async ({ params }) => {
  const pageIndex = params.page
  const offset = pageIndex ? (Number(pageIndex) - 1) * PER_PAGE : 0
  const { posts, totalCount } = await fetchPosts({ limit: PER_PAGE, offset: offset })
  return { posts, totalCount }
})

export default component$(() => {
  const loc = useLocation()
  const currentIndex = Number(getCurrentIndex(loc.url.pathname))
  const data = usePostsLoader()

  return (
    <>
      <ContentsTitle title={'Blog'} />
      <BlogField posts={data.value.posts} />
      <Pagination currentIndex={currentIndex} totalCount={data.value.totalCount} />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const data = await fetchPosts()
  const maxPageIndex = Math.ceil(data.totalCount / PER_PAGE)
  const paths = [...Array(maxPageIndex).keys()].map((i) => (i + 1).toString())

  return {
    params: paths.map((page) => {
      return { page }
    }),
  }
}

export const head: DocumentHead = {
  title: 'Blog | Relu',
  meta: [
    ...BASE_META,
    {
      name: 'description',
      content: `Relu's blog list.`,
    },
    {
      property: 'og:title',
      content: 'Blog | Relu',
    },
    {
      property: 'og:description',
      content: `Relu's blog`,
    },
  ],
}
