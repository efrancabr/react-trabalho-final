import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CountrieDetail from "../components/countrieDetail";
import Loader from "../components/loader";
import ErrorText from "../components/errorText";

const CountrieDetailPage = ({ match }) => {
  const {
    params: { CountrieId }
  } = match;
  const [Countrie, setCountrie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `ET https://corona-api.com/countries`;
    const fetchCountrie = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${CountrieId}`);
        setCountrie(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchCountrie();
  }, [CountrieId]);

  return (
    <>
      <Link to={`/`}>Go back to search Countries</Link>
      {error && (
        <ErrorText>Some error occurred, while fetching Countries API</ErrorText>
      )}
      {Countrie && <CountrieDetail Countrie={Countrie} />}
    </>
  );
};

export default CountrieDetailPage;
