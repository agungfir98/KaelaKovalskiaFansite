import React from 'react'
import cn from '~/utils/tailwindMerge'

const KaelaRunningText = () => {
  return (
    <div id="wrapper" className="flex w-[2000px] overflow-hidden">
      <ul
        id="inner"
        className={cn(
          'flex w-max flex-nowrap gap-8 text-nowrap bg-red-500 text-8xl font-extrabold uppercase tracking-wider text-neutral-600',
          'animate-scroll',
        )}
      >
        <li>Kaela Kovalskia</li>
        <li className="self-center text-3xl">•</li>
        <li>Kaela Kovalskia</li>
        <li className="self-center text-3xl">•</li>
        <li>Kaela Kovalskia</li>
        <li className="self-center text-3xl">•</li>
        <li>Kaela Kovalskia</li>
        <li className="self-center text-3xl">•</li>
      </ul>
    </div>
  )
}

export default KaelaRunningText
