import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // if navigating to section — don't scroll top
    const target = sessionStorage.getItem("scroll-target");

    if (target) return;

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}