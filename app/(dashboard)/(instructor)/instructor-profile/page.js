import BackToTop from "@/app/backToTop";
import InstructorProfile from "./(profile)";

export const metadata = {
  title: "Mugallym profili",
  description: "Mugallym profili",
};

const InstructorProfileLayout = () => {
  return (
    <>
      <InstructorProfile />
      <BackToTop />
    </>
  );
};

export default InstructorProfileLayout;
