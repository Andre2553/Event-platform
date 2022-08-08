import { gql,useQuery } from "@apollo/client"
import { useEffect } from "react"

import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ApolloProvider>
      
    
  )
}

export default App
