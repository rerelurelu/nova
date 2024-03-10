import { Slot, component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import { PER_PAGE } from '~/constants'
import { fetchPosts } from '~/services/post'
import { css } from '~/styled-system/css'

export const usePostsLoader = routeLoader$(async ({ params }) => {
	const pageIndex = params.page
	const offset = pageIndex ? (Number(pageIndex) - 1) * PER_PAGE : 0
	const { posts, totalCount } = await fetchPosts({ limit: PER_PAGE, offset: offset })
	return { posts, totalCount }
})

export default component$(() => {
	return (
		<>
			<Header />
			<main class={rootLayout}>
				<div class={container}>
					<Slot />
				</div>
			</main>
			<Footer />
		</>
	)
})

const rootLayout = css({
	minH: '100vh',
})

const container = css({
	px: { base: '1.25rem', md: '3rem' },
	pt: '4rem',
	pb: { base: '8rem', lg: '12rem' },
})
