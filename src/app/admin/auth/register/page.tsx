import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

interface FormState {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const router = useRouter();
  const { locale } = router;

  // اعتبارسنجی فرم ثبت‌نام
  const validateForm = (): Partial<FormState> => {
    const formErrors: Partial<FormState> = {};
    if (!form.name) {
      formErrors.name = locale === 'fa' ? 'نام لازم است' : 'Name is required';
    }
    if (!form.email) {
      formErrors.email = locale === 'fa' ? 'ایمیل لازم است' : 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      formErrors.email = locale === 'fa' ? 'ایمیل نامعتبر است' : 'Invalid email address';
    }
    if (!form.password) {
      formErrors.password = locale === 'fa' ? 'رمز عبور لازم است' : 'Password is required';
    } else if (form.password.length < 6) {
      formErrors.password = locale === 'fa' ? 'رمز عبور باید حداقل ۶ کاراکتر باشد' : 'Password must be at least 6 characters';
    }
    return formErrors;
  };

  // ارسال فرم ثبت‌نام
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // درخواست به API برای ایجاد کاربر جدید
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      if (res.ok) {
        // پس از موفقیت در ثبت‌نام، کاربر به صفحه ورود هدایت می‌شود
        router.push('/admin/auth/login');
      } else {
        const errorMsg = locale === 'fa' ? 'خطا در ثبت‌نام' : 'Registration failed';
        setErrors({ password: errorMsg });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="register-form">
      <h1>{locale === 'fa' ? 'ثبت‌نام' : 'Register'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{locale === 'fa' ? 'نام' : 'Name'}</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>{locale === 'fa' ? 'ایمیل' : 'Email'}</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>{locale === 'fa' ? 'رمز عبور' : 'Password'}</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">{locale === 'fa' ? 'ثبت‌نام' : 'Register'}</button>
      </form>
    </div>
  );
}
