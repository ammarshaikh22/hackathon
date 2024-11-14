'use client'
import Form from "@/components/Form";
// import Template from "@/components/Template";
import TemplateNew from "@/components/TemplateNew";
export default function Home() {
  return (
      <main className="h-auto md:flex justify-between md:flex-row flex-col py-10 bg-slate-900 text-white relative">
        <Form />
        <TemplateNew />
      </main>
  );
}
