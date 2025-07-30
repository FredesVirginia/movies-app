import { nowPlayActions } from '@/core/actions/movies/now-playing-actios';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from 'expo-router';
import React from 'react';
import "../global.css";
const queryClient = new QueryClient();
const RootLayout = () => {
  nowPlayActions()

  return (
  <QueryClientProvider client={queryClient}>

     <Stack
      screenOptions={{
        headerShown : false
      }}
     />
  </QueryClientProvider>
  )
}

export default RootLayout