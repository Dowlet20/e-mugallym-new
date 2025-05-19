import ProtectedRoute from "@/components/ProtectedRoute";


const Layout = ({ children }) => (
    <>
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    </>
  );
  
  export default Layout;