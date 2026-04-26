import React from 'react';

const PUBLICATIONS = [ /* Assuming some data here */ ];

const ALL_YEARS = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);

const Page = () => {
    // component logic
};

export default Page;