import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<{ email?: string }>({});
  const { locale } = useRouter();

  const validateEmail = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return locale === 'fa' ? 'ایمیل معتبر نیست' : 'Email is not valid';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail();
    if (!emailError) {
      console.log('Password reset link sent');
    } else {
      setErrors({ email: emailError });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{locale === 'fa' ? 'ایمیل' : 'Email'}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">{locale === 'fa' ? 'بازیابی رمز عبور' : 'Reset Password'}</button>
    </form>
  );
}