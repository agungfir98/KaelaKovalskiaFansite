'use client'
import Image from 'next/image'
import { handleClientScriptLoad } from 'next/script'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import KaelaRunningText from '~/components/kaelaRunningText'
import useKaelaImage from '~/store/kaelaImage.store'
import { scrollCtx } from '~/utils/scrollObserver'
import cn from '~/utils/tailwindMerge'

const MainPage = () => {
  const { scrollY } = useContext(scrollCtx)
  const mainRef = useRef<HTMLDivElement>(null)
  const runTextRef = useRef<HTMLDivElement>(null)
  const { alt, imageUrl } = useKaelaImage()
  const [scrollYDecimal, setScrollYDecimal] = useState(0)

  const hanldeScrollPercentage = useCallback((decimal: number) => {
    setScrollYDecimal(decimal)
  }, [])

  useEffect(() => {
    if (!mainRef.current) return
    const { height } = mainRef.current.getBoundingClientRect()
    document.addEventListener(
      'scroll',
      () => hanldeScrollPercentage(scrollY / height),
      { passive: true },
    )

    return () => {
      document.removeEventListener('scroll', () =>
        hanldeScrollPercentage(scrollY / height),
      )
    }
  }, [hanldeScrollPercentage, scrollY])

  useEffect(() => {
    if (!runTextRef.current) return
    runTextRef.current.style.rotate = `${12 + -24 * scrollYDecimal}deg`
  }, [scrollYDecimal])

  return (
    <div className="text-neutral-600">
      <div className="max-w-screen h-screen overflow-x-hidden" ref={mainRef}>
        <div
          className={cn(
            'max-w-screen fixed top-[60%] -z-50 h-fit -translate-x-[20%] overflow-x-hidden',
          )}
          ref={runTextRef}
        >
          <KaelaRunningText />
        </div>
        <div
          className={cn(
            'fixed left-[50%] top-[20%] -translate-x-[50%] overflow-x-hidden',
            scrollY > 100 ? 'left-[80%] top-0' : 'top-[20%]',
            'transition-all duration-700',
          )}
        >
          <div className="relative h-[100vh] w-[100vw] md:w-[70vw]">
            <Image
              alt={alt}
              src={imageUrl}
              fill
              objectFit="contain"
              sizes="100%"
            />
          </div>
        </div>
      </div>
      <div className="mt-20 h-screen w-screen">
        <div className="container mx-auto flex h-full max-md:pt-20 md:items-center">
          <h1 className="w-1/2 px-2 text-2xl font-extrabold uppercase tracking-wide md:text-4xl">
            The coolest blacksmith from Hololive Indonesia Generation 3rd
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MainPage
