"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.3 }}
    className="py-6 border-t border-zinc-800"
  >
    <button onClick={onClick} className="w-full flex items-center justify-between group">
      <h3 className="text-lg text-zinc-200 group-hover:text-white transition-colors">{question}</h3>
      <div className="ml-6 transition-transform duration-200">
        {isOpen ? (
          <Minus className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
        ) : (
          <Plus className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
        )}
      </div>
    </button>
    <div className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
      <div className="overflow-hidden">
        <p className="text-zinc-400 text-lg leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  </motion.div>
);

export default function HelpCentre() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can I change my plan later?", answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle." },
    { question: "What is your cancellation policy?", answer: "You can cancel your subscription at any time. You'll continue to have access to the service until the end of your current billing period." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can add custom information to your invoices including PO numbers, company details, and additional notes." },
    { question: "How does billing work?", answer: "We offer monthly and annual billing cycles. Payments are processed securely through our payment partners." },
    { question: "How do I change my account email?", answer: "You can change your account email from your account settings page. A verification email will be sent to confirm the change." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="bg-gradient-to-b from-blue-950 to-slate-950 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-24">
            <div className="text-sm font-medium text-blue-400 mb-3">The FAQs</div>
            <h1 className="text-5xl font-medium text-white mb-4 font-clash">Top Questions</h1>
            <p className="text-lg text-blue-200">Everything you need to know about the product and startup.</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-12 gap-x-16">
            <div className="col-span-4">
              <div className="text-sm font-medium text-blue-400 mb-4">Support</div>
              <h2 className="text-4xl font-semibold text-white mb-4 font-clash">FAQs</h2>
              <p className="text-zinc-400 text-lg">
                Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">chat to our friendly team</a>.
              </p>
            </div>
            <div className="col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="divide-zinc-800"
              >
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={index === openIndex}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
