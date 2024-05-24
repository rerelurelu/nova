import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import { RouterHead } from '~/components/RouterHead/RouterHead'
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
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  )
})

const body = css({
  bg: 'bgBase',
})
