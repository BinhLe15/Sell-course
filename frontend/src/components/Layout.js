import React from 'react';
import { Card, Layout, Space } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import HomePage from "./HomePage/HomePage"
import Banner from './Banner/Banner';
import ProductDetail from './ProductDetail/ProductDetail';
import Login from './Login/Login';
import Register from './Register/Register';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import ResetPass from './ResetPass/ResetPass'
import User from './User/User'
import { SnackbarProvider } from 'notistack';

const WebLayout = () => (
  <SnackbarProvider maxSnack={4} autoHideDuration={1500}
  iconVariant={{
    success: '🛒',
    error: '🗑️',
    warning: '⚠️',
    info: 'ℹ️',
  }}
  >
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={{ zIndex: 1 }} >Header</Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductList/:categorie/" element={<ProductList />} />
          <Route path="/ProductList/" element={<ProductList />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Layout>

    </Space>
  </SnackbarProvider>


);
export default WebLayout;