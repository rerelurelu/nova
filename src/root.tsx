import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import { RouterHead } from '~/components/router-head/router-head'
import '~/global.css'
import { css } from '~/styled-system/css'

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet='utf-8' />
				<link rel='manifest' href='/manifest.json' />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body lang='ja' class={body}>
				<Header />
				<div class={wrapper}>
					<RouterOutlet />
				</div>
				<Footer />
			</body>
		</QwikCityProvider>
	)
})

const body = css({
	bg: 'bgBase',
})

const wrapper = css({
	minH: '100vh',
	px: { base: '1.25rem', md: '3rem' },
	pt: '4rem',
	pb: { base: '8rem', lg: '12rem' },
})
