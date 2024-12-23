import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://react-nex-ai-agent.onrender.com' /*|| 'http://127.0.0.1:8000';*/

const useGenerateCode = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const generateCode = async (prompt) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BASE_URL}/generate-code`, { prompt });
      setData(response.data);
      console.log("Response:", response.data); // Log the response to console
    } catch (err) {
      setError(err);
      console.error("Error:", err); // Log the error to console
    } finally {
      setLoading(false);
    }
  };

  return { generateCode, loading, error, data };
};

export default useGenerateCode;
