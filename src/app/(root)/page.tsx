'use client'
import Image from 'next/image'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import ImageSelector from '~/components/imageSelector'
import KaelaRunningText from '~/components/kaelaRunningText'
import { Tile, TileContent, TileWrapper } from '~/components/tile'
import useKaelaImage from '~/store/kaelaImage.store'
import { scrollCtx } from '~/utils/scrollObserver'
import cn from '~/utils/tailwindMerge'

const MainPage = () => {
  const { scrollY } = useContext(scrollCtx)
  const mainRef = useRef<HTMLDivElement>(null)
  const runTextRef = useRef<HTMLDivElement>(null)
  const { alt, imageUrl } = useKaelaImage()

  const [numOfPages] = useState(6)
  const [scrollYDecimal, setScrollYDecimal] = useState(0)

  const hanldeScrollPercentage = useCallback((decimal: number) => {
    setScrollYDecimal(decimal)
  }, [])

  useEffect(() => {
    if (!mainRef.current) return
    const { height } = mainRef.current.getBoundingClientRect()
    document.addEventListener(
      'scroll',
      () => hanldeScrollPercentage(scrollY / (height / numOfPages)),
      { passive: true },
    )

    return () => {
      document.removeEventListener('scroll', () =>
        hanldeScrollPercentage(scrollY / (height / numOfPages)),
      )
    }
  }, [hanldeScrollPercentage, numOfPages, scrollY])

  useEffect(() => {
    if (!runTextRef.current) return
    const rotation = Math.max(12 + -24 * scrollYDecimal, -12)
    runTextRef.current.style.rotate = rotation + `deg`
  }, [scrollYDecimal])

  return (
    <div className="text-neutral-700">
      <TileWrapper numOfPages={numOfPages} ref={mainRef}>
        <div className="max-w-screen sticky top-0 h-screen overflow-hidden">
          <div className="absolute left-0 h-full w-full">
            <div className="relative h-full">
              <div
                className="absolute left-[50%] top-[60%] h-full translate-x-[-50%]"
                ref={runTextRef}
              >
                <KaelaRunningText />
              </div>
              <div
                className={cn(
                  'absolute top-0 flex translate-x-[-50%]',
                  scrollY > 100
                    ? 'left-[80%]'
                    : 'left-[50%] translate-y-[20vh] scale-125',
                  'transition-all duration-700',
                )}
              >
                <div className={cn('relative h-[100vh] w-[80vw]')}>
                  <Image
                    fill
                    src={imageUrl}
                    alt={alt}
                    className="object-contain"
                    sizes="100%"
                  />
                </div>
              </div>
              <div className="absolute bottom-[10%] right-0">
                <ImageSelector />
              </div>
            </div>
          </div>
        </div>
        <TileContent>
          <Tile
            page={1}
            renderContent={({ progress }) => (
              <div className="flex text-2xl font-extrabold uppercase md:items-center md:text-5xl lg:text-7xl">
                <h1 className="z-50">
                  the coolest blacksmith from hololive indonesia generation 3rd
                </h1>
              </div>
            )}
          />
          <Tile
            page={2}
            renderContent={({ progress }) => (
              <div>
                <h1 className="z-50 text-2xl font-extrabold">Info</h1>
                <div
                  id="info"
                  className="grid grid-cols-[1fr,2fr] text-base md:text-2xl"
                >
                  <div>name</div>
                  <div>
                    kaela kovalskia <br /> (カエラ・コヴァルスキア)
                  </div>
                  <div>birth</div>
                  <div>30 August</div>
                  <div>Height</div>
                  <div>173 cm (5&apos;8&apos;)</div>
                  <div>zodiac sign</div>
                  <div>virgo</div>
                  <div>oshi mark</div>
                  <div>🔨</div>
                </div>
              </div>
            )}
          />
          <Tile
            page={3}
            renderContent={() => (
              <div>
                <h1 className="text-2xl font-bold">Pemaloe</h1>
                <div className="md:text-2xl">
                  <p className="inline bg-white/50">
                    Pemaloe is official fanbase name of Kaela Kovalskia.
                    &quot;pemaloe&quot; is an archaic spelling for the
                    Indonesian word pemalu, which can either mean &quot;hammer
                    wielder&quot; or &quot;shy person&quot;
                  </p>
                  <div className="relative mt-10 h-[30vw] w-[30vw] md:h-[10vw] md:w-[10vw]">
                    <Image
                      alt="pimok"
                      fill
                      sizes="100%"
                      src={'/assets/pimok.jpg'}
                    />
                    <p className="absolute left-0 top-[100%] text-[.7rem] font-semibold">
                      *picture of pemaloe
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
          <Tile
            page={4}
            renderContent={() => (
              <div>
                <h1 className="text-2xl font-bold">Kaeluarga</h1>
                <div>
                  <p className="inline bg-white/50 md:text-2xl">
                    Kaela&apos;s membership are called &quot;Kaeluarga&quot;, a
                    pun on the Indonesian word &quot;keluarga&quot; means
                    &quot;family&quot;.
                    <br />
                    Kaela and her comunity celebrate two special days per year,
                    reflecting the number &quot;69&quot;
                  </p>
                  <ul className="ml-5 list-outside list-disc md:text-2xl">
                    <li>
                      <p className="inline bg-white/50">
                        9 June is called &quot; Pemaloe Day&quot; in memory of
                        membership opening
                      </p>
                    </li>
                    <li>
                      <p className="inline bg-white/50">
                        6 September for being 6th days of the 9th month
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          />
          <Tile
            page={5}
            renderContent={() => (
              <div>
                <h1 className="text-2xl font-bold">Galon Chan</h1>
                <div>
                  <p className="inline bg-white/50 md:text-2xl">
                    Galon chan is an official mascot of Kaela Kovalskia.
                    Introduced on her birthday 30 August 2023 after doing 11
                    streams for 24 hours.
                  </p>

                  <div className="relative mt-10 h-[30vw] w-[30vw] md:h-[10vw] md:w-[10vw]">
                    <Image
                      alt="pimok"
                      fill
                      sizes="100%"
                      src={'/assets/gachan.gif'}
                    />
                    <p className="absolute left-0 top-[100%] text-[.7rem] font-semibold">
                      *picture of gachan
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
        </TileContent>
      </TileWrapper>
      <div className="h-screen bg-red-400">
        <h1>bluee</h1>
      </div>
    </div>
  )
}

export default MainPage
