'use client'
import { createContext, useState } from 'react';

export const FormContext = createContext();

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
    universityName: '',
    highSchool: '',
    position: '',
    companyName: '',
    description:''
  });

  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkill = () => {
    if (currentSkill.trim() === '') return; 
    setSkills((prevSkills) => [...prevSkills, currentSkill]); 
    setCurrentSkill(''); 
  };

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        handleData,
        skills,
        setSkills,
        currentSkill,
        setCurrentSkill,
        handleSkill,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
