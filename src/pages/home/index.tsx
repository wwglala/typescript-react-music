import { WingBlank, SearchBar } from 'antd-mobile'

export default function Index() {
  return (
    <div>
      <WingBlank><div className="sub-title">Normal</div></WingBlank>
      <SearchBar placeholder="Search" maxLength={8} />
    </div>
  )
}
