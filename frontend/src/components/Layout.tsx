import React from "react";
import Header from "./Header";
import Nav from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <Nav />
    {children}
    </>
  );
}
