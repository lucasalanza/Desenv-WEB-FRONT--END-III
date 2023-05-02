import './App.css';
import { HomeFilled, VideoCameraFilled, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';
import ConsultaFilmes from './pages/MeusFilmes';

const { Header, Content, Footer, Sider } = Layout;


function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <BrowserRouter>
        {/* <Sider
        
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        > */}
          <Menu theme="dark" mode="horizontal" >
            {/*criar um menu item para cada rota que o seu sistema terá*/}
            <Menu.Item key="/">
              <NavLink to="/"><HomeFilled></HomeFilled> Inicio</NavLink>
            </Menu.Item>
            <Menu.Item key="/consulta-filme">
              <NavLink to="/consulta-filme"><VideoCameraFilled></VideoCameraFilled> Consultar Filmes</NavLink>
            </Menu.Item>
          </Menu>
        {/* </Sider> */}
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div style={{ padding: 24, minHeight: 1200, background: colorBgContainer }}>
              <Routes>
                {/* E para cada menu item criar um component route fazendo a ligacao da rota com o elemento */}
                <Route path='/' ></Route>

                <Route path='/consulta-filme' element={<ConsultaFilmes></ConsultaFilmes> }></Route>
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
          </Footer>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
};
export default App;
