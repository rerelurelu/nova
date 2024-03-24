import { Slot, component$ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'

export default component$(() => {
  return (
    <>
      <Header />
      <main class='min-h-screen px-5 md:px-12 pt-16 pb-32 lg:pb-48'>
        <Slot />
      </main>
      <Footer />
    </>
  )
})
