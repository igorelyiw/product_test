import './App.css';

import { useEffect } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

import { Layout, Menu } from 'antd';
import ProductContainer from './containers/Products/ProductContainer';
import DetailsContainer from './containers/Details/DetailsContainer';
import { getProduct } from './store/productSlice';

const { Header, Content, Footer } = Layout;

const HeaderStyled = styled(Header)`
position: fixed;
 z-index: 10;
  width: 100%;
`;
const ContentStyled = styled(Content)`
padding: 0 50px; 
margin-top: 64px;
`;
const WrapperContent = styled.div`
padding: 24px;
min-height:calc(100vh - 135px);
`;
const FooterStyled = styled(Footer)`
text-align: center;
`;

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <Layout>
      <HeaderStyled >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
      </HeaderStyled>
      <ContentStyled className="site-layout" >
        <WrapperContent className="site-layout-background" >
          <Switch>
            <Route exact path="/"
              render={() => <Redirect to={'/products'} />} />
            <Route path="/products" component={ProductContainer}></Route>
            <Route path="/details/:id?" component={DetailsContainer}></Route>
          </Switch>
        </WrapperContent>
      </ContentStyled>
      <FooterStyled >Ant Design ©2018 Created by Elyiv Ihor</FooterStyled>
    </Layout>
  );
}

export default App;
