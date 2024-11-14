import React, { useContext, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormContext } from '@/components/FormContext';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Form = () => {
    const [files, setFiles] = useState<File[]>([]);
    const { data, setData, handleData, handleLanguage, skills, percent, handleUserSkillData, setSkills, setCurrentLanguage, UserDegree, UserEducation, currentLanguage, handleUserEducation, setUserEducation, setUserDegree, setPercent } = useContext(FormContext);
    const handleLanguageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentLanguage(e.target.value);
    };
    const handleFileUpload = (uploadedFiles: File[]) => {
        setFiles(uploadedFiles);
        const fileUrl = URL.createObjectURL(uploadedFiles[0]);
        setData({ ...data, img: fileUrl });
    };
    return (
        <section className='relative md:w-[45%]'>
            <div className='max-w-[90%]  mx-auto'>
                <h3 className='text-2xl font-semibold'>Your Information</h3>
                <div className=' mt-6'>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-xl font-bold'>Personal Information</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex items-center gap-1'>
                                    <div className='w-[30%]'>
                                        <FileUpload onChange={handleFileUpload} />
                                    </div>
                                    <div>
                                        <div className='flex gap-4 mb-6 items-center'>
                                            <div>
                                                <Label htmlFor="name">Given name</Label>
                                                <Input type='text' name='name' onChange={handleData} />
                                            </div>
                                            <div>
                                                <Label htmlFor="family-name">Family name</Label>
                                                <Input type='text' name='family' onChange={handleData} />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="headline">Headline</Label>
                                            <Input type='text' name='headline' onChange={handleData} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 mb-6'>
                                    <div className='w-full'>
                                        <Label htmlFor="email">Email address</Label>
                                        <Input type='email' name='email' onChange={handleData} />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="number">Phone number</Label>
                                        <Input type='number' name='number' onChange={handleData} />
                                    </div>
                                </div>
                                <div className='w-full mb-6'>
                                    <Label htmlFor="address">Address</Label>
                                    <Input type='text' name='address' onChange={handleData} />
                                </div>
                                <div className='flex gap-4 mb-6'>
                                    <div className='w-full'>
                                        <Label htmlFor="postalcode">Post code</Label>
                                        <Input type='number' name='postalcode' onChange={handleData} />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="city">City</Label>
                                        <Input type='text' name='city' onChange={handleData} />
                                    </div>
                                </div>
                                <div className='w-full relative'>
                                    <Label htmlFor="about">About</Label>
                                    <textarea
                                        name='about'
                                        onChange={handleData}
                                        className='h-[80px]  px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full mx-auto bg-transparent rounded-md border border-input resize-none mt-2'
                                    />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='text-xl font-bold'>Education</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex items-center gap-4 flex-wrap'>
                                    <div className='w-full'>
                                        <Label htmlFor="education">University/HighSchool/SecondarySchool</Label>
                                        <Input type='text' name='education' value={UserEducation} onChange={(e: any) => setUserEducation(e.target.value)} />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="degree">Degree</Label>
                                        <Input type='text' name='degree' value={UserDegree} onChange={(e: any) => setUserDegree(e.target.value)} />
                                    </div>
                                    <div className='w-full'>
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm w-full font-bold py-2 px-4 rounded-3xl' onClick={handleUserEducation}>Add</button>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='text-xl font-bold'>Skills</AccordionTrigger>
                            <AccordionContent>
                                <div className='w-full relative mb-6'>
                                    <Label htmlFor="languages">Add Languages</Label>
                                    <Input
                                        type='text'
                                        name='languages'
                                        onChange={handleLanguageInputChange}
                                        value={currentLanguage}
                                        className='h-[50px]' />
                                    <CheckCircleOutlineIcon className='text-green-500 absolute top-10 right-4 cursor-pointer' onClick={handleLanguage} />
                                </div>
                                <div className='w-full relative'>
                                    <Label htmlFor="skills">Add Skills</Label>
                                    <Input
                                        type='text'
                                        name='skills'
                                        value={skills}
                                        onChange={(e: any) => setSkills(e.target.value)}
                                        className='h-[50px]'
                                    />
                                </div>
                                <div className='mt-6'>
                                    <Label htmlFor="skills">Percent</Label>
                                    <Input
                                        type='number'
                                        name='percent'
                                        value={percent}
                                        onChange={(e: any) => setPercent(e.target.value)}
                                    />
                                </div>
                                <div className='w-full mt-6'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm w-full font-bold py-2 px-4 rounded-3xl' onClick={handleUserSkillData}>Add</button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-4">
                            <AccordionTrigger className='text-xl font-bold'>Work Experience</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex items-center gap-2 mb-6'>
                                    <div className='w-full'>
                                        <Label htmlFor="position">Position</Label>
                                        <Input type='text' name='position' onChange={handleData} />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="companyName">CompanyName</Label>
                                        <Input type='text' name='companyName' onChange={handleData} />
                                    </div>
                                </div>
                                <div className='w-full relative'>
                                    <Label htmlFor="description">Description</Label>
                                    <Input
                                        type='text'
                                        name='description'
                                        onChange={handleData}
                                        className='h-[50px]'
                                    />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Form