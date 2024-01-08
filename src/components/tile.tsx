import React, {
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { scrollCtx } from '~/utils/scrollObserver'
import cn from '~/utils/tailwindMerge'

type WrapperProps = {
  children: ReactNode
  numOfPages: number
}

type Tile = {
  numOfPages: number
  currentPage: number
}

const tileCtx = createContext<Tile>({ numOfPages: 0, currentPage: 0 })

export const TileWrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, numOfPages }, ref) => {
    const refContainer = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => refContainer.current!, [])

    const [screenH, setscreenH] = useState<number>(0)

    const { scrollY } = useContext(scrollCtx)

    let currentPage = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
      const { clientHeight, offsetTop } = elContainer

      const halfH = screenH / 2
      const percentY =
        Math.min(
          clientHeight + halfH,
          Math.max(-screenH, scrollY - offsetTop) + halfH,
        ) / clientHeight

      currentPage = percentY * numOfPages
    }

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setscreenH(window.innerHeight)
      }
    }, [])

    useEffect(() => {
      const { current: elContainer } = refContainer
      if (elContainer) {
        const { clientHeight, offsetTop } = elContainer

        const halfH = screenH / 2
        const percentY =
          Math.min(
            clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH,
          ) / clientHeight

        console.log({ percentY, offsetTop })
      }
    }, [screenH, scrollY])

    return (
      <tileCtx.Provider value={{ currentPage, numOfPages }}>
        <div
          ref={refContainer}
          className={cn('relative')}
          style={{ height: numOfPages * 100 + 'vh' }}
        >
          {children}
        </div>
      </tileCtx.Provider>
    )
  },
)
TileWrapper.displayName = TileWrapper.displayName

export const TileBackground: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="absolute h-full w-full">{children}</div>
}

export const TileContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="sticky top-0 h-screen w-4/6">{children}</div>
}

type TileProps = {
  page: number
  renderContent: (props: { progress: number }) => any
}

export const Tile: React.FC<TileProps> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(tileCtx)
  let progress = Math.max(0, currentPage - page)
  const refContainer = useRef<HTMLDivElement>(null)

  let opacity = Math.min(1, Math.max(0, progress * 4))

  if (opacity >= 0.8 && page < numOfPages * 4) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }

  return (
    <div
      className="absolute top-0"
      ref={refContainer}
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity,
      }}
    >
      <div className="mx-2 flex h-screen flex-col max-md:pt-20 md:ml-16 md:justify-center">
        {renderContent({ progress })}
      </div>
    </div>
  )
}
