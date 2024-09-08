'use client'
import Form from "@/components/Form";
import { FormProvider } from "@/components/FormContext";
import Template from "@/components/Template";
export default function Home() {
  return (
    <FormProvider>
      <main className="flex justify-between items-center">
        <Form />
        <Template />
      </main>
    </FormProvider>
  );
}
