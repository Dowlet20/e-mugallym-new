import BackToTop from "@/app/backToTop";
import QuestionTypeLayout from "./(types)";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "Testler barada",
  description: "Testler barada",
};

const LessonLayout = () => {
  return (
    <>
        <QuestionTypeLayout />
        <BackToTop />
      {/* <ProtectedRoute>
      </ProtectedRoute> */}
    </>
  );
};

export default LessonLayout;
