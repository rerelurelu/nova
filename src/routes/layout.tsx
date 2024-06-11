import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik'
import '@fontsource/overpass/400.css'
import '@fontsource/overpass/600.css'
import { Flex, Grid } from 'styled-system/jsx'
import { Footer } from '~/components/Footer/Footer'
import { Header } from '~/components/Header/Header'

export default component$(() => {
  useStylesScoped$(`
    * {
      font-family: 'Overpass', sans-serif;
    }
  `)

  return (
    <Grid minH={'100vh'} gridTemplateRows={'auto 1fr auto'} rowGap={{ base: '6rem', md: '8rem' }}>
      <Header />
      <Flex alignItems={'start'} justifyContent={'center'} px={{ base: '2rem', md: 0 }}>
        <Slot />
      </Flex>
      <Footer />
    </Grid>
  )
})
