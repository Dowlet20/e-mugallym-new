import BackToTop from "@/app/backToTop";
import LessonPage from "./(lesson)";

export const metadata = {
  title:
    "Sapak barada",
  description: "Sapak barada",
};

const LessonLayout = () => {
  return (
    <>
      <LessonPage />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
