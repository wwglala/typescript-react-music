import 'antd/dist/antd.css'
import TabBar from './components/tabbar'
import { tabBarList } from './axios/data'
import './normal.scss'
import './assets/js/rem'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import routes from './router'
import { Suspense } from 'react';
import MyScroll from './components/scroll'
import { Spin } from 'antd'

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spin spinning={true}><div style={{ width: '100vw', height: '100vh' }}></div></Spin>}>
          <Switch>
            <>
              <MyScroll>
                {
                  routes.map(item => <Route key={item.path} path={item.path} component={item.component}></Route>)
                }
              </MyScroll>
              <TabBar tabBarList={tabBarList}></TabBar>
            </>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
