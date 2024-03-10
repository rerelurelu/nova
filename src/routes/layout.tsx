import { Slot, component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { RequestHandler } from '@builder.io/qwik-city'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import { css } from '~/styled-system/css'

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	})
}

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	}
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
