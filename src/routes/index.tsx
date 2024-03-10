import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Hero from '~/components/hero/hero'
import { baseMeta } from '~/constants'
import { css } from '~/styled-system/css'

export default component$(() => {
	return (
		<>
			<div class={heroWrapper}>
				<Hero />
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Home | Relu',
	meta: [
		...baseMeta,
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
