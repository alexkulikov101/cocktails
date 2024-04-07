import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Layout } from '@layout/Layout'
import { CocktailPage } from '@pages/cocktail'
import { NotFoundPage } from '@pages/notFound'

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="margarita" replace />,
        },
        {
          path: '/margarita',
          element: <CocktailPage />,
        },
        {
          path: '/mojito',
          element: <CocktailPage />,
        },
        {
          path: '/a1',
          element: <CocktailPage />,
        },
        {
          path: '/kir',
          element: <CocktailPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return <RouterProvider router={routes} />
}
