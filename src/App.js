import { useState } from "react";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { API } from "./components/API";


function App() {

   const client = new QueryClient({
      defaultOptions: {
         queries: {
            refetchOnWindowFocus: false,
         }
      }
   });
   return (
      <>
         <QueryClientProvider client={client}>
            <API />
         </QueryClientProvider>
      </>
   )

}

export default App;