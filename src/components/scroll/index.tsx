import { useEffect, useRef, ReactElement } from 'react';
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)

interface Iprops {
  children: Array<ReactElement>
}

export default function Index(props: Iprops) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    new BScroll(ref.current!, {
      startY: 0,
      scrollY: true,
      click: true,
    })
  }, [])
  return (
    <div ref={ref} className='container'>
      {props.children}
    </div>
  )
}
