import { useState, useEffect } from "react";

export default function useJsonFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error(response.statusText);
          }
            const news = await response.json();
            setData(news);
            setError(null);
        } catch (e) {
          if (e instanceof Error) setError(e);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
      return 
    }, []);
  
    return [data, loading, error ];
  };
    