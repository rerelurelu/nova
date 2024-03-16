import { Slot, component$ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import { css } from '~/styled-system/css'

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
