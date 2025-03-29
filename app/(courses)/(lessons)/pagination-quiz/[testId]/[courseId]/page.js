import BackToTop from "@/app/backToTop";
import PaginationQuizLayout from "../../(pagination)";
import ProtectedRoute from "@/components/ProtectedRoute";


export const metadata = {
  title: "Pagination Quiz - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LessonLayout = () => {
  return (
    <>
    <ProtectedRoute>
      <PaginationQuizLayout />
      <BackToTop />
    </ProtectedRoute>
    </>
  );
};

export default LessonLayout;
