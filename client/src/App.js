
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './About/About';
import Contact from './Contact/Contact';
export const Context = createContext();

const App = () => {

  const [category, setCategory] = useState("general")
  const [leftBar, setLeftBar] = useState(false)

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });


  return (
    <QueryClientProvider client={client}>
      <Context.Provider value={{ category, setCategory, leftBar, setLeftBar }} >
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Contact />} />
          </Routes>
        </Router>
      </Context.Provider>
    </QueryClientProvider>
  );
}

export default App;
