import BackToTop from "@/app/backToTop";
import InstructorPage from "./(team)";

export const metadata = {
  title: "Kurs filter",
  description: "Kurs filter",
};

const InstructorLayout = () => {
  return (
    <>
      <InstructorPage />
      <BackToTop />
    </>
  );
};

export default InstructorLayout;
