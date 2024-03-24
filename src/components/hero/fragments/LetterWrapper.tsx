import { Slot, component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <div class='flex justify-center items-center flex-col'>
      <Slot />
    </div>
  )
})
