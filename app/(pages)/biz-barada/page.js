import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us-01)/index";

export const metadata = {
  title: "Biz barada",
  description: "Biz barada",
};
const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
