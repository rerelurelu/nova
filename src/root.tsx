import { component$, useStyles$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import { RouterHead } from '~/components/router-head/router-head'
import tailwindStyles from '~/tailwind.css?inline'

export default component$(() => {
  useStyles$(tailwindStyles)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang='ja' class='bg-bg'>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  )
})
