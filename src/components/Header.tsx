'use client'
import { handleDownload } from '@/components/Download';
import { FormContext } from '@/components/FormContext';
import { useContext } from 'react';
const Header = () => {
    const { data } = useContext(FormContext);
    return (
        <header className='text-center py-5 bg-[#1D1D20]'>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl text-white'>AS Resume Builder</h1>
                    <h2 className='text-white text-lg font-semibold'>Welcome {data.name ? data.name + ' ' + data.family : 'User'}</h2>
                    <button className='w-[140px] h-[40px] bg-[#3E94E4] rounded-2xl text-white'
                        onClick={handleDownload}
                    >Download</button>
                </div>
            </div>
        </header>
    )
}

export default Header