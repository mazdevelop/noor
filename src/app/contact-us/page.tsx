import { useState } from 'react';
import { useRouter } from 'next/router';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactUsPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const { locale } = useRouter();

  const validateForm = () => {
    let formErrors: Partial<FormState> = {};
    if (!form.name) formErrors.name = locale === 'fa' ? 'نام لازم است' : 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = locale === 'fa' ? 'ایمیل معتبر نیست' : 'Email is not valid';
    }
    if (!form.message) {
      formErrors.message = locale === 'fa' ? 'پیام لازم است' : 'Message is required';
    }
    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{locale === 'fa' ? 'نام' : 'Name'}</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>{locale === 'fa' ? 'ایمیل' : 'Email'}</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>{locale === 'fa' ? 'پیام' : 'Message'}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>
        {errors.message && <p>{errors.message}</p>}
      </div>
      <button type="submit">{locale === 'fa' ? 'ارسال' : 'Submit'}</button>
    </form>
  );
}