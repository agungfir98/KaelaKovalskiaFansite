'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useRef } from 'react'
import KaelaRunningText from '~/components/kaelaRunningText'
import useKaelaImage from '~/store/kaelaImage.store'
import { scrollCtx } from '~/utils/scrollObserver'
import cn from '~/utils/tailwindMerge'

const MainPage = () => {
  const { scrollY } = useContext(scrollCtx)
  const mainRef = useRef<HTMLDivElement>(null)
  const { alt, imageUrl } = useKaelaImage()

  useEffect(() => {
    if (!mainRef.current) return
    console.log(scrollY)
    const { height } = mainRef.current.getBoundingClientRect()
    console.log({ height })
  }, [scrollY])

  useEffect(() => {
    console.log({ alt, imageUrl })
  }, [alt, imageUrl])

  return (
    <div className="">
      <div className="max-w-screen h-screen overflow-x-hidden" ref={mainRef}>
        <div className="max-w-screen absolute top-[60%] h-fit -translate-x-[100px] rotate-12 overflow-x-hidden">
          <KaelaRunningText />
        </div>
        <div
          className={cn(
            'fixed left-[50%] top-[20%] -translate-x-[50%] overflow-x-hidden',
            scrollY > 100 ? 'left-[80%] top-0' : 'top-[20%]',
            'transition-all duration-700',
          )}
        >
          <div className="relative h-[700px] w-96">
            <Image alt={alt} src={imageUrl} fill sizes="100%" />
          </div>
        </div>
      </div>
      <div className="h-screen w-screen">
        <div className="container mx-auto">
          <h1 className="w-1/2 text-2xl font-semibold tracking-wide">
            The coolest blacksmit from Hololive Indonesia Generation 3rd
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MainPage
