import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import Avatar from '~/components/avatar/avatar'
import { BASE_META } from '~/constants'
import GitHubIcon from '~/media/github-icon.png?jsx'
import ZennIcon from '~/media/zenn-icon.png?jsx'
import { css } from '~/styled-system/css'

const sns = {
	github: { href: 'https://github.com/rerelurelu' },
	zenn: { href: 'https://zenn.dev/astrologian' },
} as const

const intro = {
	para1: 'フロントエンドエンジニア（仮）',
} as const

export default component$(() => {
	return (
		<div class={wrapper}>
			<Avatar height={512} width={512} />
			<span class={myName}>relu</span>
			<ul class={iconWrapper}>
				<li>
					<Link class={iconLink} href={sns.github.href} target='_blank'>
						<GitHubIcon class={icon} />
					</Link>
				</li>
				<li>
					<Link class={iconLink} href={sns.zenn.href} target='_blank'>
						<ZennIcon class={icon} />
					</Link>
				</li>
			</ul>
			<div class={introWrapper}>
				<p>{intro.para1}</p>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'About | Relu',
	meta: [
		...BASE_META,
		{
			name: 'description',
			content: 'About Relu',
		},
		{
			property: 'og:title',
			content: 'About | Relu',
		},
		{
			property: 'og:description',
			content: 'About Relu',
		},
	],
}

const wrapper = css({
	display: 'grid',
	placeItems: 'center',
	mt: { base: '8rem', md: '9rem' },
	px: '1.5rem',
})

const myName = css({
	fontSize: '2.25rem',
	lineHeight: '2.5rem',
	mt: '2.5rem',
})

const iconWrapper = css({
	mt: '1.5rem',
	display: 'flex',
	flexWrap: 'wrap',
	gap: '1rem',
	listStyle: 'none',
})

const iconLink = css({
	textDecoration: 'underline',
	_hover: {
		opacity: '0.7',
	},
})

const introWrapper = css({
	mt: '5rem',
	display: 'grid',
	w: '100%',
	maxW: '56rem',
	placeItems: 'center',
	lineHeight: '1.5rem',
})

const icon = css({
	objectFit: 'fill',
	w: '24px',
	h: '24px',
})
