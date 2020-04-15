import React, { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import { Container, Header } from "../components/shared";
import CountriesearchForm from "../components/countrieSearchForm";
import CountriesList from "../components/countriesList";

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoText = styled.h3`
  margin: 0;
`;

const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [Countries, setCountries] = useState({ items: [] });
  const [error, setError] = useState(false);
  
  const API_BASE_URL = `https://corona-api.com/countries`;

  const fetchCountries = async () => {

    
    setError(false);
    try {
      const result = await axios.get(`${API_BASE_URL}/${searchTerm}`);
      setCountries(result.data);
    } catch (error) {
      setError(true);
    }

  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchCountries();
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Painel novo Covid-19</LogoText>
          <HeaderSearchForm>
            <CountriesearchForm
              onSubmitHandler={onSubmitHandler}
              onInputChange={onInputChange}
              searchTerm={searchTerm}
              error={error}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        <CountriesList Countries={Countries} />
      </Container>
    </>
  );
};

export default SearchPage;
