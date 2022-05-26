import gql from 'graphql-tag';

const GET_GAMES = gql`
  query getGames($created_at: order_by = desc) {
    games(order_by: { created_at: $created_at }) {
      id
      title
      description
      picture_url
      created_at
      dungeon_master {
        id
        username
      }
      players {
        user {
          username
        }
      }
    }
  }
`;

export { GET_GAMES };
