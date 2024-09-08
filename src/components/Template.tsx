import React, { useContext } from 'react'
import { FormContext } from '@/components/FormContext';
import Image from 'next/image';
const Template = () => {
    const { data } = useContext(FormContext);
    return (
        <section className='relative w-[50%]'>
            <div className='max-w-[80%] mx-auto'>
                <div id="cv-template" className="bg-white p-6 shadow-md rounded-md max-w-3xl mx-auto">
                    <header className="flex flex-col items-center justify-center text-center mb-8">
                        <Image
                            src={data.img || '/default-avatar.png'}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover mb-4"
                            width={100}
                            height={100}
                        />
                        <h1 className="text-3xl font-bold text-gray-800">{data.name} {data.family}</h1>
                        <p className="text-gray-600 text-lg">{data.headline}</p>
                    </header>
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Information</h2>
                        <div className="flex flex-col space-y-1">
                            <span><strong>Email:</strong> {data.email}</span>
                            <span><strong>Phone:</strong> {data.number}</span>
                            <span><strong>Address:</strong> {data.address}, {data.city}, {data.postalcode}</span>
                        </div>
                    </section>

                </div>

            </div>
        </section>
    )
}

export default Template