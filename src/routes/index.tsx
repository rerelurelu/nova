import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import BlogField from '~/components/blogField/blogField'
import Hero from '~/components/hero/hero'
import { BASE_META } from '~/constants'
import { css } from '~/styled-system/css'
import { usePostsLoader } from './layout'

export default component$(() => {
	const data = usePostsLoader()
	const recentPosts = data.value.posts.slice(0, 3)
	return (
		<>
			<div class={heroWrapper}>
				<Hero />
			</div>
			<BlogField posts={recentPosts} />
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
