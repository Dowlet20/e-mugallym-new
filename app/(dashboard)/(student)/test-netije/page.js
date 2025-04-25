import BackToTop from "@/app/backToTop";
import StudentProfile from "./(profile)";

export const metadata = {
  title: "Testiň netijeleri",
  description: "Testiň netijeleri",
};

const StudentProfileLayout = () => {
  return (
    <>
      <StudentProfile />
      <BackToTop />
    </>
  );
};

export default StudentProfileLayout;
