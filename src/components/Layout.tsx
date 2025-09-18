import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white-600 text-white p-2 shadow-lg relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="h-20"
            onClick={() => navigate("/")}
          />
        </div>
      </header>
      <div className="bg-black text-white p-2">
        <span className="font-extrabold text-xl ml-2">FDIC</span> FDIC-Insured
        Backed by the full faith and credit of the U.S. Government
      </div>

      {/* Content */}
      <main className="flex-grow container mx-auto px-2 py-5">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} FIS Global. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
