import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RestaurantListPage from '../pages/RestaurantListPage/RestaurantListPage';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
import CartPage from '../pages/CartPage/CartPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';
import EditDataPage from '../pages/EditDataPage/EditDataPage';
import EditAddressPage from '../pages/EditAddressPage/EditAddressPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/">
          <RestaurantListPage />
        </Route>
        
        <Route exact path="/restaurante/:id">
          <RestaurantPage />
        </Route>

        <Route exact path="/carrinho">
          <CartPage />
        </Route>

        <Route exact path="/perfil">
          <ProfilePage />
        </Route>

        <Route exact path="/historico-de-pedidos">
          <HistoryPage />
        </Route>

        <Route exact path="/editar-dados">
          <EditDataPage />
        </Route>

        <Route exact path="/editar-endereco">
          <EditAddressPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;