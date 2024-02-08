import {useState, useEffect, useCallback} from "react";
import axios from "axios";

// Custom hook for data fetching with error handling
function useGetApiResponse(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // console.log(response.data)
      setData(response.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const refetchData = useCallback(() => {
    fetchData();
  }, [fetchData])

  return {data, loading, error, refetchData};
}

export default useGetApiResponse;