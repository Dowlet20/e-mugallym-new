import BackToTop from "@/app/backToTop";
import LoginPage from "./(login)";

export const metadata = {
  title: "Giriş sahypasy",
  description: "Giriş sahypasy",
};

const LoginLayout = () => {
  return (
    <>
      <LoginPage />
      <BackToTop />
    </>
  );
};

export default LoginLayout;
