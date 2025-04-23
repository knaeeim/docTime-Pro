import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './Routes/Routes.jsx'
import BookingProvider from './Provider/BookingProvider.jsx'
import { Toaster } from 'react-hot-toast';
import SearchProvider from './Provider/SearchProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <BookingProvider>
        <RouterProvider router={routes}>
        </RouterProvider>
        <Toaster />
      </BookingProvider>
    </SearchProvider>
  </StrictMode>,
)
