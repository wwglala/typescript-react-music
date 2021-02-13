import { useState, useRef, useEffect } from 'react'

export const useSyncState = <T>(initState: T) => {
  let func = useRef<Function>()
  const [state, setState] = useState<T>(initState)
  useEffect(() => {
    func.current && func.current(state)
  }, [state])

  return [state, function (newState: T, cb: Function): void {
    func.current = cb
    setState(newState)
  }] as [T, Function]
}
