'use client'
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactUsPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validateForm = () => {
    let formErrors: Partial<FormState> = {};
    if (!form.name) formErrors.name = 'نام لازم است';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'ایمیل معتبر نیست';
    }
    if (!form.message) {
      formErrors.message = 'پیام لازم است';
    }
    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('فرم با موفقیت ارسال شد');
      // Reset form
      setForm({ name: '', email: '', message: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
        <Image
                className="rounded-md object-cover w-full h-auto"
                src='/images/Call-us-new.jpg'
                alt='تماس با ما'
                width={500}
                height={500}
                layout="responsive"
              />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">نام</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ایمیل</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">پیام</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded h-32"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-primary-600 text-white p-2 rounded">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}