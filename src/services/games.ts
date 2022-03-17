import gql from 'graphql-tag';

const GET_GAMES = gql`
  query getGames {
    games {
      id
      title
      description
    }
  }
`;

export { GET_GAMES };
