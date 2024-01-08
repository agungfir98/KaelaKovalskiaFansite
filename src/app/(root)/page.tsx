import Link from 'next/link'
import MainContent from '~/components/sections/mainContent'

const MainPage = () => {
  return (
    <div className="text-neutral-700">
      <MainContent />
      <footer className="flex h-fit flex-col justify-center gap-4 bg-black py-5 text-neutral-300 max-md:px-2">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">credits</h1>
          <ul>
            <li>
              <Link
                href={'https://virtualyoutuber.fandom.com/wiki/Kaela_Kovalskia'}
                className="underline underline-offset-2 hover:text-red-500"
              >
                Kaela Kovalskia Wiki
              </Link>
            </li>
            <li>
              <Link
                href={
                  'https://hololive.hololivepro.com/en/talents/kaela-kovalskia/'
                }
                className="underline underline-offset-2 hover:text-red-500"
              >
                Official Hololive Website
              </Link>
            </li>
          </ul>
        </div>
        <span className="self-center">
          made with ❤ by{' '}
          <Link
            target="_blank"
            className="underline hover:text-red-500"
            href={'https://agungfirmansyah.vercel.app/'}
          >
            Agung
          </Link>
        </span>
      </footer>
    </div>
  )
}

export default MainPage
