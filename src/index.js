import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import Home from './pages/Home';

import PageNotFound from './pages/NotFoundPage';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />  
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
