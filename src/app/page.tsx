'use client'
import Form from "@/components/Form";
import Template from "@/components/Template";
export default function Home() {
  return (
      <main className="flex justify-between items-center">
        <Form />
        <Template />
      </main>
  );
}
