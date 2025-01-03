"use client";

import React from "react";
import { FloatingInput } from "@/app/components/atoms/Input";
import { Button } from "../../atoms/Button";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto py-6 w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FloatingInput 
          label="Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        
        <FloatingInput 
          label="Email" 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <FloatingInput 
          label="Message" 
          multiline
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button size="lg" className="w-full text-subtitle font-ubunturegular !py-6">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;