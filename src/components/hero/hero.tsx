import { component$ } from '@builder.io/qwik'
import LetterWrapper from './fragments/LetterWrapper'

export default component$(() => {
  return (
    <div class='flex justify-center items-start flex-row gap-x-12 gap-y-4 flex-wrap w-full h-[70vh] pt-32 md:pt-64 text-hero'>
      <LetterWrapper>
        <span>□ ■</span>
        <span>■ ■</span>
        <span>□ ■</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>■ □</span>
        <span>□ ■</span>
        <span>□ □</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>■ □</span>
        <span>■ □</span>
        <span>■ □</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>■ ■</span>
        <span>□ □</span>
        <span>□ □</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>■ □</span>
        <span>□ ■</span>
        <span>■ □</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>■ ■</span>
        <span>□ □</span>
        <span>■ □</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>■ □</span>
        <span>□ ■</span>
        <span>□ □</span>
      </LetterWrapper>
      <LetterWrapper>
        <span>□ □</span>
        <span>■ ■</span>
        <span>■ □</span>
      </LetterWrapper>
    </div>
  )
})
