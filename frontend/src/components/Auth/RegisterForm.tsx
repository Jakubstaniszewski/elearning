import { useState } from 'react';
import { LabelInputContainer } from '../UI/LabelInputContainer';
import { Label } from '../UI/Label';
import { Input } from '../UI/Input';
import { BottomGradient } from '../UI/BottomGradient';

const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!fullName.trim()) {
      setMessage('Imię i nazwisko są wymagane.');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Nieprawidłowy adres email.');
      return;
    }

    if (haslo.length < 6) {
      setMessage('Hasło musi mieć co najmniej 6 znaków.');
      return;
    }

    if (haslo !== confirmPassword) {
      setMessage('Hasła nie są takie same.');
      return;
    }

    const [imie, ...nazwiskoParts] = fullName.trim().split(' ');
    const nazwisko = nazwiskoParts.join(' ') || '—';

    try {
      const response = await fetch('https://multo.onrender.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imie, nazwisko, email, haslo }),
      });

      if (response.ok) {
        setMessage('Rejestracja zakończona sukcesem!');
        setFullName('');
        setEmail('');
        setHaslo('');
        setConfirmPassword('');
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
        <Label htmlFor="name">Imię i nazwisko</Label>
        <Input
          id="name"
          type="text"
          placeholder="Jan Kowalski"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </LabelInputContainer>

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

      <LabelInputContainer className="mb-4">
        <Label htmlFor="confirmPassword">Powtórz hasło</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </LabelInputContainer>

      <button
        type="submit"
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
      >
        Zarejestruj się &rarr;
        <BottomGradient />
      </button>

      {message && (
        <p className="text-sm text-center text-red-500 dark:text-red-400">{message}</p>
      )}
    </form>
  );
};

export default RegisterForm;
