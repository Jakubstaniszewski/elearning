import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthWrapper = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full max-w-md bg-[#101827] p-8 rounded-2xl shadow-xl space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Welcome to Multo</h1>
        <p className="text-gray-400 text-sm mt-2">
          {isLogin ? 'Zaloguj się do swojego konta' : 'Utwórz nowe konto'}
        </p>
      </div>

      {isLogin ? <LoginForm /> : <RegisterForm />}

      <div className="text-sm text-center text-gray-400">
        {isLogin ? 'Nie masz jeszcze konta?' : 'Masz już konto?'}
        <button
          className="text-cyan-400 hover:underline ml-1"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Zarejestruj się' : 'Zaloguj się'}
        </button>
      </div>
    </div>
  );
};

export default AuthWrapper;
