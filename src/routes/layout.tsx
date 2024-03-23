import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik'
import '@fontsource/overpass/400.css'
import '@fontsource/overpass/600.css'
import { Analytics } from '@vercel/analytics/react'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import { css } from '~/styled-system/css'

export default component$(() => {
  useStylesScoped$(`
    * {
      font-family: 'Overpass', sans-serif;
    }
  `)

  return (
    <>
      <Analytics />
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
