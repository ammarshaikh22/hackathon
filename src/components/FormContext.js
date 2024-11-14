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
    position: '',
    companyName: '',
    description: '',
    about: ''
  });
  const [userSkillsData, setUserSkillsData] = useState([]);
  const [skills, setSkills] = useState('');
  const [percent, setPercent] = useState('');
  const [languages, setLanguages] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [UserEducation, setUserEducation] = useState('');
  const [UserDegree, setUserDegree] = useState('');
  const [User, setUser] = useState([]);
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLanguage = () => {
    if (currentLanguage.trim() === '') return;
    setLanguages((preLanguage) => [...preLanguage, currentLanguage]);
    setCurrentLanguage('');
  };
  const handleUserEducation = (e) => {
    setUser((prevUser) => [
      ...prevUser,
      {
        UserEducation: UserEducation,
        UserDegree: UserDegree,
      },
    ]);
    setUserDegree('')
    setUserEducation('')
  }
  const handleUserSkillData = () => {
    setUserSkillsData((userSkillsData) => [
      ...userSkillsData,
      {
        skills: skills,
        percent: percent,
      },
    ])
    setSkills('')
    setPercent('')
  }
  return (
    <FormContext.Provider
      value={{
        setPercent,
        handleUserSkillData,
        userSkillsData,
        skills,
        percent,
        setSkills,
        data,
        setData,
        handleData,
        handleUserEducation,
        setUserDegree,
        setUserEducation,
        setCurrentLanguage,
        currentLanguage,
        User,
        languages,
        UserDegree,
        UserEducation,
        handleLanguage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
