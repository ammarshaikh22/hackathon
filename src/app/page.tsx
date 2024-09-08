'use client'
import Form from "@/components/Form";
import Template from "@/components/Template";
export default function Home() {
  return (
      <main className="flex justify-between items-center md:flex-row flex-col">
        <Form />
        <Template />
      </main>
  );
}
