import React, { useEffect, useRef, ReactElement } from 'react';
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)
declare global {
  interface Window {
    $betterScroller: any;
  }
}
interface Iprops {
  children: Array<ReactElement>;
}

export default function Index(props: Iprops) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let bs = new BScroll(ref.current!, {
      startY: 0,
      scrollY: true,
      click: true,
      probeType: 3, // listening scroll hook
      // pullDownRefresh: true,
    })
    window.$betterScroller = bs

  }, [])
  return (
    <div ref={ref} className='container' >
      <div>
        {props.children}
      </div>
    </div>
  )
}
