import { Poppins } from 'next/font/google'
import './globals.css'
import cn from '~/utils/tailwindMerge'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'scroll-smooth')}>{children}</body>
    </html>
  )
}
