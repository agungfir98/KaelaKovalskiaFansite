'use client'
import Image from 'next/image'
import React from 'react'
import useKaelaImage from '~/store/kaelaImage.store'
import cn from '~/utils/tailwindMerge'

type ImageData = {
  url: string
  alt: string
}

const imageData: ImageData[] = [
  {
    url: '/assets/KaelaDefaultCostume.png',
    alt: 'kaela default costume',
  },
  {
    url: '/assets/KaelaJPCostume.png',
    alt: 'kaela japanese costume',
  },
  {
    url: '/assets/KaelaLocalCostume.png',
    alt: 'kaela local costume',
  },
]

const ImageSelector = () => {
  const { setImage, imageUrl } = useKaelaImage()
  const handleChangeCostume = ({
    imageUrl,
    alt,
  }: {
    imageUrl: string
    alt: string
  }) => {
    console.log('aaaa')
    setImage({ alt, imageUrl })
  }

  return (
    <div className=" mx-2">
      <ul className="z-50 flex flex-col gap-2">
        {imageData.map((v, i) => (
          <li
            key={i}
            onClick={() => handleChangeCostume({ alt: v.alt, imageUrl: v.url })}
            className="hover:cursor-pointer"
          >
            <div className="flex h-20 w-20 justify-center overflow-hidden rounded-xl outline outline-2 outline-neutral-300 backdrop-blur-md">
              <div className="relative w-[20rem] translate-y-28 scale-[4]">
                <Image
                  src={v.url}
                  alt={v.alt}
                  fill
                  sizes="100%"
                  className={cn(
                    'object-contain',
                    imageUrl !== v.url && 'blur-[0.4px]',
                    'transition-all',
                  )}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageSelector
