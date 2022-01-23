import React from 'react';
import { SearchForm } from '../../components/search-form';
import { Top } from '../../components/topbar'
import { AddWanted } from '../../components/addwanted'
import { WantedList } from '../../components/wanted-list';

const MainPage = () => {
    return <>
        {/* <Top></Top>
        <SearchForm></SearchForm>
        <AddWanted></AddWanted> */}
        <WantedList></WantedList>
    </>;
};

export default MainPage;
