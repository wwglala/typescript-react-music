import { RouteComponentProps, withRouter } from 'react-router-dom'
import style from './style.module.scss'

interface ITabBar {
  id: number;
  label: string;
  icon: string;
  path: string;
}

interface ITabBarProps extends RouteComponentProps {
  tabBarList: ITabBar[];
}

function Index(props: ITabBarProps) {
  const isActive = (item: ITabBar): boolean => {
    return props.location.pathname === item.path
  }
  const tapIt = (item: ITabBar): void => {
    props.history.push(item.path)
  }

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', height: '1.44rem' }}>
      <ul className={style.tabbar}>
        {
          props.tabBarList.map((item: ITabBar) => {
            return (
              <li
                key={item.id}
                className={style.tabBarItem + (isActive(item) ? ' active' : '')}
                onClick={e => tapIt(item)}
              >
                <span style={{ fontSize: '0.4rem' }}>{item.label}</span>
                <span>
                  <svg className={style.icon} aria-hidden="true">
                    <use href={`#${item.icon}`}></use>
                  </svg>
                </span>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default withRouter(Index)
