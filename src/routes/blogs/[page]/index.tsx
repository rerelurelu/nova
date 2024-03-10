import BlogField from '~/components/blogField/blogField'
import ContentsTitle from '~/components/contentsTitle/contentsTitle'
import Pagination from '~/components/pagination/pagination'
import { getCurrentIndex } from '~/utils/getCurrentIndex'

import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

import type { DocumentHead, StaticGenerateHandler } from '@builder.io/qwik-city'
import { BASE_META, PER_PAGE } from '~/constants'
import { usePostsLoader } from '~/routes/layout'
import { fetchPosts } from '~/services/post'

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
