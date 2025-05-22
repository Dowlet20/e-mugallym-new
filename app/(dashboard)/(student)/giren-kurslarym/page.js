import BackToTop from "@/app/backToTop";
import StudentProfile from "./(profile)";

export const metadata = {
  title: "Giren kurslarym",
  description: "Giren kurslarym",
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
