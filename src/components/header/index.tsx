import { RouteComponentProps, withRouter } from 'react-router-dom'
function Index(props: RouteComponentProps) {

  const toSearch = () => {
    console.log(123);

    props.history.push('/search')
  }
  return (
    <div style={{
      height: '1.08rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <input type="text"
        style={{
          border: 'none',
          background: '#f7f7f7',
          width: '9.06rem',
          height: '90%',
          borderRadius: '0.5rem',
          marginTop: '10px',
          textAlign: 'center'
        }}
        placeholder='世界的美好于你环环相扣'
        onClick={toSearch}
      />
    </div>
  )
}

export default withRouter(Index)