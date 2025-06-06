import Input from '../UI/Input';
import { BottomGradient } from '../UI/BottomGradient';

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <Input label="Imię i nazwisko" id="name" type="text" />
      <Input label="Email" id="email" type="email" />
      <Input label="Hasło" id="password" type="password" />
      <Input label="Powtórz hasło" id="confirmPassword" type="password" />

      <button
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        type="submit"
      >
        Zarejestruj się &rarr;
        <BottomGradient />
      </button>
    </form>
  );
};

export default RegisterForm;
