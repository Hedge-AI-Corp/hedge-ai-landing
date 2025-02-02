"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const inquiryTypes = [
  { value: "product", label: "Product Information" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "demo", label: "Request a Demo" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" }
]


export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Cast the form element to HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      inquiryType,
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/send/general', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex min-h-screen font-inter">
      {/* Left side - Form */}
      <div className="w-1/2 p-12">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Get in touch</h1>
            <p className="text-gray-500">
              Have questions about HedgeAI? We'd love to hear from you and discuss how we can help.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">First name</label>
                <Input 
                  name="firstName"
                  placeholder="First name" 
                  className="border-gray-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Last name</label>
                <Input 
                  name="lastName"
                  placeholder="Last name" 
                  className="border-gray-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Company</label>
              <Input 
                name="company"
                placeholder="Your company name" 
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Work email</label>
              <Input 
                name="email"
                type="email" 
                placeholder="you@company.com" 
                className="border-gray-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Phone number</label>
              <div className="flex">
                <select className="px-3 py-2 border border-r-0 border-gray-200 rounded-l-md bg-white text-sm">
                  <option value="US">🇺🇸 US</option>
                  <option value="UK">🇬🇧 UK</option>
                  <option value="CA">🇨🇦 CA</option>
                </select>
                <Input 
                  name="phone"
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="border-gray-200 rounded-l-none flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Inquiry Type</label>
              <Select value={inquiryType} onValueChange={setInquiryType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Message</label>
              <Textarea 
                name="message"
                placeholder="Tell us how we can help..."
                className="border-gray-200 min-h-[120px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>

      {/* Right side - Information */}
      <div className="w-1/2 relative bg-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <p className="text-3xl font-medium mb-6">
            Transform your investment strategies with AI-powered insights and automated portfolio management.
          </p>
          <div>
            <p className="font-semibold text-xl">HedgeAI Team</p>
            <p className="text-gray-200">Here to help you succeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}