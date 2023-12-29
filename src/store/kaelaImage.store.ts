import { create } from 'zustand'

type KaelaImage = {
  imageUrl: string
  alt: string
  setImage: (arg: Omit<KaelaImage, 'setImage'>) => void
}

const useKaelaImage = create<KaelaImage>((set) => ({
  alt: 'kaela default costume',
  imageUrl: '/assets/KaelaDefaultCostume.png',
  setImage({ alt, imageUrl }) {
    set(() => ({ alt, imageUrl }))
  },
}))

export default useKaelaImage
