import React from 'react';

import { Countrie } from '../utils';

const CountrieDetail = ({ Countrie }) => {

    const createDescMarkup = (description) => { return {__html: description}; };

    return (
        <section>
            <div>
                <img alt={`${Countrie.volumeInfo.title} Countrie`} src={` https://corona-api.com/countries/${Countrie.id}`} />
                <div>
                    <h3><strong>Title:</strong> { Countrie.volumeInfo.title }</h3>
                    <p><strong>Authors:</strong> { Countrie(Countrie.volumeInfo.authors) }</p>
                    <p><strong>Published Date:</strong> {Countrie.volumeInfo.publishedDate}</p>
                    <p><strong>Publisher:</strong> {Countrie.volumeInfo.publisher}</p>
                    <p><strong>Page Count:</strong> {Countrie.volumeInfo.pageCount}</p>
                    <div dangerouslySetInnerHTML={createDescMarkup(Countrie.volumeInfo.description)} />
                </div>
            </div>
        </section>
    )
};

export default CountrieDetail;