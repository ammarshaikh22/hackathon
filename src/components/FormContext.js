'use client'
import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // State for form data
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
  });

  // State for skills array
  const [skills, setSkills] = useState([]);
  // State for the current skill input
  const [currentSkill, setCurrentSkill] = useState('');

  // Handle form input changes
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle skill addition
  const handleSkill = () => {
    if (currentSkill.trim() === '') return; // Ensure skill is not empty
    setSkills((prevSkills) => [...prevSkills, currentSkill]); // Add skill to the array
    setCurrentSkill(''); // Clear the input after adding
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
