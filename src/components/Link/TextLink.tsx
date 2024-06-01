import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { css } from 'styled-system/css'
import { text as textRecipe } from 'styled-system/recipes'

type Props = {
  text: string
  href: string
  style?: string
}

export const TextLink = component$<Props>(({ text, href, style }) => {
  return (
    <Link
      class={[
        css({
          display: 'inline-block',
          textDecoration: 'underline',
        }),
        textRecipe({ size: 'sm' }),
        style,
      ]}
      href={href}
    >
      {text}
    </Link>
  )
})
