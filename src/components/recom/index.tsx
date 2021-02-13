import recommend from '@/assets/home/recommend.jpg'
import playlist from "@/assets/home/playlist.jpg"
import rank from "@/assets/home/rank.jpg"
import radiohead from "@/assets/home/radiohead.jpg"
import live from "@/assets/home/live.jpg"
export default function Index() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20, borderBottom: '1px solid #eee' }}>
      {
        list.map(item => {
          return (
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '1.4rem', height: '1.4rem' }}>
                <img style={{ width: '100%', height: '100%' }} src={item.img} alt={item.label} />
              </div>
              <p>{item.label}</p>
            </div>
          )
        })
      }
    </div>
  )
}

interface categoryListType {
  id: number;
  img: string;
  label: string;
  path: string;
}

var list: categoryListType[] = [
  {
    id: 0,
    label: "每日推荐",
    img: recommend,
    path: ""
  },
  {
    id: 2,
    label: "歌单",
    img: playlist,
    path: ""
  },
  {
    id: 3,
    label: "排行榜",
    img: rank,
    path: "/ranking"
  },
  {
    id: 4,
    label: "电台",
    img: radiohead,
    path: ""
  },
  {
    id: 5,
    label: "直播",
    img: live,
    path: ""
  }
];