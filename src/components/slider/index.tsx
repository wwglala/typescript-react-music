import { Carousel, WingBlank } from 'antd-mobile'


interface IBannerList {
  bannerId: string;
  pic: string;
  url: string;
  typeTitle: string;
}
interface Iprops {
  bannerList: IBannerList[]
}

export default function index(props: Iprops) {
  return (
    <div style={{ height: '4.47rem', width: '100%', marginTop: 10, overflow: 'hidden' }}>
      <WingBlank>
        <Carousel
          autoplay={true}
          dotActiveStyle={{
            backgroundColor: "#eb4d44"
          }}
        >
          {
            props.bannerList.map(item => {
              return <a
                key={item.bannerId}
                href={item.url}
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: '4.47rem',
                }}
              >
                <img src={item.pic} alt={item.typeTitle}
                  style={{
                    height: '100%',
                  }}
                />
              </a>
            })
          }
        </Carousel>
      </WingBlank>
    </div>
  )
}
