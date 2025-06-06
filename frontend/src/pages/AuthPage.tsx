import { BoxesCore } from "../components/UI/BackgroundBoxes";
import AuthWrapper from "../components/Auth/AuthWrapper";

const AuthPage = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <BoxesCore />
      <div className="relative z-10">
        <AuthWrapper />
      </div>
    </div>
  );
};

export default AuthPage;
