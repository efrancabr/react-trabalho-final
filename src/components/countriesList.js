import React from 'react';
import { Link } from "react-router-dom";

import { countrieData } from '../utils';

const Countrie = ({ countrie }) => {
    return (
        <li>
            <div>
                <img alt={`${countrie.name} Countrie`} src={`https://corona-api.com/countries/${countrie.code}`} />
                <div>
                    <h3>{ countrie.name }</h3>
                    <p>{ countrieData(countrie.code) }</p>
                    <p>{Countrie.updated_at}</p>
                    <Link to={`/countries/${countrie.code}`}>Show details</Link>
                </div>
            </div>
            <hr />
        </li>
    )
};

const CountriesList = ({ countrieData }) => {
    return (
        <ul>
        {
          
        }
      </ul>
    );
};

export default CountriesList;