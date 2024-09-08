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
const Form = () => {
    const [files, setFiles] = useState<File[]>([]);
    const { data, setData, handleData } = useContext(FormContext);
    const handleFileUpload = (uploadedFiles: File[]) => {
        setFiles(uploadedFiles);
        const fileUrl = URL.createObjectURL(uploadedFiles[0]);
        setData({ ...data, img: fileUrl });
    };
    console.log(files)
    return (
        <section className='relative overflow-y-scroll h-[88vh] w-[50%]'>
            <div className='max-w-[90%] mx-auto'>
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
                                        <Label htmlFor="post-code">Post code</Label>
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
                </div>
            </div>
        </section>
    )
}

export default Form