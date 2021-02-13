import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get_playList } from './store/actions';


interface IPlayListItem {
  id: number;
  picUrl: string;
  name: string;
  copywriter: string
}
interface Iprops {
  get_playList: Function;
  playList: IPlayListItem[]
}
function mapStateToProps(state: any) {
  return {
    playList: state.playListReducer.playList
  }
}
class Index extends Component<Iprops, {}> {

  async componentDidMount() {
    await this.props.get_playList()
    window.$betterScroller.refresh()
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {
          this.props.playList?.map(item => {
            return (
              <div key={item.id} style={{ width: '3.64rem', height: '4.7rem' }}>
                <img src={item.picUrl} alt="" style={{ width: '3.64rem', height: '3.64rem' }} />
                <p style={{ fontSize: '0.36rem', lineHeight: '0.5rem', marginTop: '0.1rem' }}>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, { get_playList })(Index)
