import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return { loading };
};
