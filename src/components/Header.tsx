'use client'
import { FormContext } from '@/components/FormContext';
import { useContext } from 'react';
import DownloadButton from './DownloadButton';
const Header = () => {
    const { data } = useContext(FormContext);
    return (
        <header className='text-center py-5 bg-[#1D1D20]'>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='md:text-xl text-white text-lg'>AS Resume Builder</h1>
                    <h2 className='text-white md:text-lg font-semibold text-xs md:block hidden'>Welcome {data.name ? data.name + ' ' + data.family : 'User'}</h2>
                    <DownloadButton elementId="cv-template" />
                </div>
            </div>
        </header>
    )
}

export default Header