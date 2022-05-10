import gql from 'graphql-tag';

const GET_GAMES = gql`
  query getGames {
    games {
      id
      title
      description
      picture_url
      created_at
    }
  }
`;

export { GET_GAMES };
