import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [city, setCity] = useState('')
  const [breed, setBreed] = useState('')
  const [name, setName] = useState('')


  return <SearchContext.Provider value={{ city, breed, name, setCity, setBreed, setName }}>
    {children}
  </SearchContext.Provider>

}


