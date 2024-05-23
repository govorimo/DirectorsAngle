import {useState, useEffect, useCallback} from 'react';

import axios from 'axios';

import {BASE_URL, INTERVIEWS} from '../../constants';

const useFetchInterviews = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchInterviews = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${BASE_URL}${INTERVIEWS}`);

      setInterviews(response.data);
    } catch (e) {
      setError(true);
      console.error('Error fetching interviews:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInterviews();
  }, [fetchInterviews]);

  return {interviews, loading, error, retryFetchInterviews: fetchInterviews};
};

export default useFetchInterviews;
