import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import JobListHeader from './JobListHeader';
import JobListFilter from './JobListFilter';
import JobCard from '../../components/JobCard/JobCard';
import { JOB_CATEGORY } from './JOB_LIST_DATA';
import {
  CATEGORY,
  SUBCATEGORY,
  COUNTRY_EN_TO_KR,
  LOCATION_EN_TO_KR,
} from '../../components/Modals/QUERY_EXCHANGE';

const JobList = () => {
  const params = useParams();
  const location = useLocation();

  const [positionsData, setPositionsData] = useState([]);

  const getCurrentCategory = category => {
    if (category === undefined) {
      return JOB_CATEGORY.all;
    } else {
      return JOB_CATEGORY[category];
    }
  };

  useEffect(() => {
    const searchParam = key => {
      return new URLSearchParams(location.search).get(key);
    };

    const category = params.category && `category=${CATEGORY[params.category]}`;

    const subcategory =
      params.subcategory && `subcategory=${SUBCATEGORY[params.subcategory]}`;

    const country =
      searchParam('country') !== 'all' &&
      `country=${COUNTRY_EN_TO_KR[searchParam('country')]}`;

    const sort =
      searchParam('job_sort') === 'created_at'
        ? 'sorting=-created_at'
        : 'sorting=' + searchParam('job_sort');

    const locationQuery =
      searchParam('location') !== null && searchParam('location') !== 'all'
        ? searchParam('location')
            .split(',')
            .map(x => `location=${LOCATION_EN_TO_KR[x]}`)
        : '';

    const finalQuery = [
      category,
      subcategory,
      country,
      sort,
      ...locationQuery,
    ].filter(x => x !== undefined);

    axios
      .get(`http://15.165.203.121:8080/recruitments?${finalQuery.join('&')}`)
      .then(res => setPositionsData(res.data.Recruitment));
  }, [params.category, params.subcategory, location.search]);

  return (
    <>
      <JobListHeader
        data={getCurrentCategory(params.category)}
        category={params.category}
        subcategory={params.subcategory}
      />
      <JobListFilter />
      <JobCardWrap>
        <JobCardList>
          {positionsData.map(data => (
            <JobCard key={data.id} data={data} />
          ))}
        </JobCardList>
      </JobCardWrap>
    </>
  );
};

const JobCardWrap = styled.div`
  max-width: 1060px;
  margin: 0 auto 60px;
  color: ${({ theme }) => theme.fontBlack};
`;

const JobCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

export default JobList;
