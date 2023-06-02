import { useEffect, useState } from "react";

interface Data {
  [key: string]: string;
}

export const useFetch = <T extends Data[]>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async (newUrl?: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(newUrl || url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { data, isLoading, handleFetch };
};
