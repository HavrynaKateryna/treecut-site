import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  const { pathname, hash } = useLocation();


  useEffect(() => {


    if (hash) {

      const element = document.querySelector(hash);


      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior:"smooth",
            block:"start"
          });

        },100);

        return;

      }

    }



    window.scrollTo({

      top:0,

      behavior:"auto"

    });



  }, [pathname, hash]);



  return null;

}