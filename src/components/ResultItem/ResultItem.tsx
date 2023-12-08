import React from 'react';

import {SearchItemData} from '../../types';
import { Wrapper, Link, Text } from './ResultItemStyled';

/**
 * Display individual search results element
 * @constructor
 */
const ResultItem: React.FC<SearchItemData> = (data) => (
  <Wrapper>
    <Link href={data.url}>{data.name}</Link>
    <Text>{`Stars: ${data.stargazerCount}`}</Text>
    <Text>{`Forks: ${data.forkCount}`}</Text>
  </Wrapper>
);


export default ResultItem;
