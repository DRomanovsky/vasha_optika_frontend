import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    //const script = document.createElement(script);
    const script = document.createElement("script"); 
    script.setAttribute("type" , "text/js");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;