'use client'
import React, { useContext } from 'react'
import { FormContext } from './FormContext';
import Image from 'next/image';

const TemplateNew = () => {
    const { data, userSkillsData, languages, User } = useContext(FormContext);
    const defaultImage = '/default-avatar.png';
    const imageUrl = data.img || defaultImage;
    return (
        <section id="cv-template" className='md:w-[55%] md:mt-0 mt-10 md:overflow-hidden overflow-scroll'>
            <div className="md:max-w-[90%] min-w-[600px] min-h-[750px] overflow-hidden mx-auto before:bg-slate-100 before:top-0 before:bottom-0 before:right-0 before:left-0 before:contents-[''] before:w-[35%] bg-white before:h-full before:absolute shadow-lg rounded-lg relative">
                <div className="grid grid-cols-3 pb-14 z-10 relative">
                    <div className="absolute top-0 -right-12 w-24 h-24 bg-gray-700 rounded-full opacity-50 "></div>
                    <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-950 md:block hidden"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-700 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-10 -left-14 w-24 h-24 bg-gray-700 rounded-full opacity-50"></div>
                    {/* <!-- Left Section --> */}
                    <div className="md:p-4 px-2 col-start-1 col-end-2">
                        {/* <!-- Profile Image --> */}
                        <div className="md:w-32 md:h-32 w-24 h-24 rounded-full overflow-hidden mb-6 relative">
                            <Image src={imageUrl || defaultImage} alt="Profile Picture" layout='fill' objectPosition='top' objectFit='cover' className='' />
                        </div>
                        {/* <!-- Name and Title --> */}
                        <h1 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-1 w-full break-words">{data.name ? data.name + ' ' + data.family : 'RICHARD SANCHEZ'}</h1>
                        <p className="text-center text-gray-500 mb-6 w-full break-words">{data.headline ? data.headline : 'Software Engineer'}</p>
                        {/* <!-- Contact Info --> */}
                        <h2 className="font-bold text-lg mb-2 bg-blue-950 text-white px-2 w-full py-1">Contact</h2>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 w-full break-words">
                            <p><strong>📞 Phone: </strong>{data.number}</p>
                            <p><strong>📧 Email: </strong>{data.email}</p>
                            <p><strong>📍 Address: </strong>{data.address}</p>
                        </div>
                        {/* <!-- Language Section --> */}
                        <h2 className="font-bold text-lg mb-2 bg-blue-950 text-white px-2 w-full py-1">Language</h2>
                        <ul className="list-disc pl-4 text-sm text-gray-600">
                            {languages.length > 0 ? languages.map((language: any, index: any) => (
                                <li key={index}>{language}</li>
                            )) :
                                <li>English</li>
                            }
                        </ul>
                        {/* <!-- Education Section --> */}
                        <h2 className=" font-bold text-lg mb-4 mt-6 bg-blue-950 text-white px-2 w-full py-1">Education</h2>
                        {
                            User.length > 0 ? User.map((user: any, index: any) => (
                                <div className="mb-4 w-full break-words" key={index}>
                                    <h3 className="font-bold text-gray-700">{user.UserEducation.toUpperCase()}</h3>
                                    <p className="text-sm text-gray-500">{user.UserDegree}</p>
                                </div>
                            )) : <div className="mb-4 w-full break-words" >
                                <h3 className="mb-2 font-bold text-gray-700">University of California</h3>
                                <p className="text-sm text-gray-500">Bachelor of Science in Computer Science</p>
                            </div>
                        }
                    </div>
                    {/* <!-- Right Section --> */}
                    <div className="md:p-8 p-4 col-start-2 col-end-4">
                        {/* Name section */}
                        <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-16 max-w-[90%] break-words">{data.name ? data.name + ' ' + data.family : 'RICHARD SANCHEZ'}</h1>
                        {/* <!-- About Me Section --> */}
                        <h2 className="font-bold text-lg mb-2 bg-blue-950 text-white px-2 w-full py-1">About Me</h2>
                        <p className="text-gray-600 text-sm mb-4 break-words">
                            {data.about ? data.about : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        </p>
                        {/* <!-- Experience Section --> */}
                        <h2 className=" font-bold text-lg mb-4 bg-blue-950 text-white px-2 w-full py-1">Experience</h2>
                        <div className="mb-4 w-full break-words">
                            <h3 className="font-bold text-gray-700">{data.position ? data.position.toUpperCase() : 'Software Engineer'}</h3>
                            <p className="text-sm text-gray-500">{data.companyName ? data.companyName.toUpperCase() : 'Google'}</p>
                            <p className="text-sm text-gray-600">{data.description ? data.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
                        </div>
                        {/* <!-- Skills Summary Section --> */}
                        <h2 className="font-bold text-lg mb-4  bg-blue-950 text-white px-2 w-full py-1">Skills Summary</h2>
                        <div className="space-y-2 pb-16">
                            {
                                userSkillsData.length > 0 ? userSkillsData.map((skill: any, index: any) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-gray-600">{skill.skills.toUpperCase()}</span>
                                            <span className="text-sm font-semibold text-gray-600">{skill.percent}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-2">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                                        </div>
                                    </div>
                                )) : (
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-gray-600">HTML</span>
                                            <span className="text-sm font-semibold text-gray-600">78%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-2">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TemplateNew