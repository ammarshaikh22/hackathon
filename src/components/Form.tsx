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
    const { data, setData, handleData, currentSkill, setCurrentSkill, handleSkill } = useContext(FormContext);
    const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSkill(e.target.value);
    };
    const handleFileUpload = (uploadedFiles: File[]) => {
        setFiles(uploadedFiles);
        const fileUrl = URL.createObjectURL(uploadedFiles[0]);
        setData({ ...data, img: fileUrl });
    };
    console.log(files)
    return (
        <section className='relative overflow-y-scroll h-screen md:w-[50%]'>
            <div className='md:max-w-[90%] mx-auto'>
                <h3 className='text-2xl mt-6 font-semibold'>Your Information</h3>
                <div className='mt-10'>
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
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='text-xl font-bold'>Education</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex items-center gap-2'>
                                    <div className='w-full'>
                                        <Label htmlFor="universityName">University Name</Label>
                                        <Input type='text' name='universityName' onChange={handleData} />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="highSchool">High School</Label>
                                        <Input type='text' name='highSchool' onChange={handleData} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='text-xl font-bold'>Skills</AccordionTrigger>
                            <AccordionContent>
                                <div className='w-full relative'>
                                    <Label htmlFor="skills">Add Skills</Label>
                                    <Input
                                        type='text'
                                        name='skill'
                                        value={currentSkill}
                                        onChange={handleSkillInputChange}
                                        className='h-[50px]' />
                                    <CheckCircleOutlineIcon className='text-green-500 absolute top-8 right-4 cursor-pointer' onClick={handleSkill} />
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