import React, { useEffect, useState } from "react";

function CopyrightYear() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span> {currentYear}</span>;
}

export default CopyrightYear;
