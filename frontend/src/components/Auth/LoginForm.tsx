import { useState } from 'react';
import { LabelInputContainer } from '../UI/LabelInputContainer';
import { Label } from '../UI/Label';
import { Input } from '../UI/Input';
import { BottomGradient } from '../UI/BottomGradient';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!validateEmail(email)) {
      setMessage('Nieprawidłowy adres email.');
      return;
    }

    if (!haslo) {
      setMessage('Hasło jest wymagane.');
      return;
    }

    try {
      const response = await fetch('https://multo.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, haslo }),
        credentials: 'include', // jeśli używasz cookies
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Zalogowano pomyślnie.');
        // np. zapisz token/sesję, przekieruj:
        // localStorage.setItem("token", result.token);
        // router.push("/dashboard");
      } else {
        const error = await response.text();
        setMessage(`Błąd: ${error}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('Błąd połączenia z serwerem.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="jan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </LabelInputContainer>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Hasło</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />
      </LabelInputContainer>

      <button
        type="submit"
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
      >
        Zaloguj się &rarr;
        <BottomGradient />
      </button>

      {message && (
        <p className="text-sm text-center text-red-500 dark:text-red-400">{message}</p>
      )}
    </form>
  );
};

export default LoginForm;
