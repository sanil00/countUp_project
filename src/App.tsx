import React from 'react';
import Home from './component/main/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import { 
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider, } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './css/App.css'

const queryClient = new QueryClient()

const App:React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
