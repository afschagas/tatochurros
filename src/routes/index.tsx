import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CardapioLista, Dashboard, Pedido } from '../pages';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();


  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'restaurantmenu',
        path: '/cardapio',
        label: 'Cardápio',
      },
      {
        icon: 'add',
        path: '/pedido',
        label: 'Pedido',
      }
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />

      <Route path='/cardapio' element={<CardapioLista />} />
      <Route path='/pedido' element={<Pedido />} />

      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );

};

// Route path='*' - Faz um redirect para pagina principal