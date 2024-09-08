/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { FormContext } from '@/components/FormContext';
import Image from 'next/image';

const Template = () => {
    const { data, skills } = useContext(FormContext);
    const defaultImage = '/default-avatar.png';
    const imageUrl = data.img || defaultImage;
    console.log(data)
    return (
        <section id="cv-template" className="bg-white p-6 shadow-2xl rounded-md mx-auto md:max-w-[50%]">
            <div className="grid grid-cols-3">
                <div className="bg-blue-800 text-white p-4 rounded-l-md flex flex-col">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image
                            layout="fill"
                            src={imageUrl}
                            alt="Profile"
                        />
                    </div>
                    <h2 className="text-lg font-semibold">{data.name} {data.family}</h2>
                    <p className="text-sm">{data.headline}</p>
                    <div className="mt-4 flex flex-col gap-2">
                        <h3 className="text-base font-bold">Contact</h3>
                        <p className="text-xs overflow-hidden"><strong>Email:</strong> {data.email}</p>
                        <p className="text-xs"><strong>Phone:</strong> {data.number}</p>
                        <p className="text-xs"><strong>Address:</strong> {data.address} {data.city} {data.postalcode}</p>
                    </div>
                </div>
                <div className="col-span-2 p-6 bg-gray-200 rounded-r-md">
                    <header className="mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">{data.name} {data.family}</h1>
                        <p className="text-gray-600">{data.headline}</p>
                    </header>
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Education</h2>
                        <ul className="list-disc pl-4 space-y-2 text-xs">
                            <li><strong>University Name:</strong> {data.universityName}</li>
                            <li><strong>High School:</strong> {data.highSchool}</li>
                        </ul>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Skills</h2>
                        <ul className="list-disc pl-4 space-y-2 text-xs">
                            {
                                skills?.map((skill: string, index: number) => (
                                    <li key={index}>{skill}</li>
                                ))
                            }
                        </ul>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Work Experience</h2>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <strong>Software Developer</strong> at XYZ Company (2020 - Present)
                                <p>- Developed front-end components using React and Next.js</p>
                                <p>- Collaborated with backend teams to integrate APIs</p>
                            </li>
                            <li>
                                <strong>Web Developer Intern</strong> at ABC Agency (2019 - 2020)
                                <p>- Assisted in building responsive websites using HTML, CSS, and JavaScript</p>
                                <p>- Participated in design discussions and code reviews</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Template;
