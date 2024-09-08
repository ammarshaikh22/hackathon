'use client'
import { createContext, useState } from 'react';
export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    name: '',
    family: '',
    email: '',
    headline: '',
    number: '',
    address: '',
    city: '',
    postalcode: '',
    img: '',
  });

  // Function to handle form data change
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setData, handleData }
    }>
      {children}
    </FormContext.Provider>
  );
};
