import { useState } from 'react';
import { useRouter } from 'next/router';

interface FormState {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const { locale } = useRouter();

  const validateForm = () => {
    let formErrors: Partial<FormState> = {};
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = locale === 'fa' ? 'ایمیل معتبر نیست' : 'Email is not valid';
    }
    if (!form.password) {
      formErrors.password = locale === 'fa' ? 'رمز عبور لازم است' : 'Password is required';
    }
    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Login successful');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label>{locale === 'fa' ? 'رمز عبور' : 'Password'}</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">{locale === 'fa' ? 'ورود' : 'Login'}</button>
    </form>
  );
}