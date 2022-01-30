import React from 'react';
import { SearchForm } from '../../components/search-form';
import { Top } from '../../components/topbar'
import { AddWanted } from '../../components/addwanted'


const MainPage = () => {
    return <>
        <Top></Top>
        <SearchForm></SearchForm>
        <AddWanted></AddWanted>
    </>;
};

export default MainPage;
