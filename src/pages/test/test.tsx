/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useSyncState } from '../../utils/useSyncState';

export default function Test() {
  const [count, setCount] = useSyncState<number>(0)

  const add = () => {
    setCount(5, (state: number) => {
      console.log(state);
    })

  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  )
}
