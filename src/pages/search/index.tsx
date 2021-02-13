import { SearchBar } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRecom } from '@/store/actions'

interface IRecomItem {
  content: string;
  iconUrl: string;
  searchWord: string;
  score: number
}
interface IState {
  reducer: {
    recomList: IRecomItem[]
  }
}
export default function Index() {

  const dispatch = useDispatch()
  const recomList = useSelector((state: IState) => {
    return state.reducer.recomList
  })

  useEffect(() => {
    dispatch(getRecom())
  }, [])

  return (
    <div>
      <SearchBar placeholder="Search" maxLength={16} />
      <div>
        {
          recomList.map((item: IRecomItem) => {
            return <li key={item.score}>{item.content}</li>
          })
        }
      </div>
    </div>
  )
}
