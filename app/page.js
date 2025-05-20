import BackToTop from "./backToTop";
import HomePage from "./01-main-demo/page";

export const metadata = {
  title: "Home - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}

// import BackToTop from "@/app/backToTop";
// import CourseFilteTwoTogglePage from "./index";
// import ProtectedRoute from "@/components/ProtectedRoute";

// export const metadata = {
//   title: "E-Mugallym",
//   description: "E-Mugallym",
// };

// const CourseFilteTwoToggleLayout = () => {
//   return (
//     <>
//     <ProtectedRoute>
//       <CourseFilteTwoTogglePage />
//       <BackToTop />
//     </ProtectedRoute>
//     </>
//   );
// };

// export default CourseFilteTwoToggleLayout;
