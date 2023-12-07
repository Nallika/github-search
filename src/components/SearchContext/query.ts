import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            stargazerCount
            forkCount
            url
          }
        }
      }
    }
  }
`;
