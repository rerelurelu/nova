import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_VITE_MICROCMS_API_KEY,
})
