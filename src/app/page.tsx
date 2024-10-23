'use client'
import Form from "@/components/Form";
import Template from "@/components/Template";
export default function Home() {
  return (
      <main className="md:flex justify-between md:flex-row flex-col my-10">
        <Form />
        <Template />
      </main>
  );
}
