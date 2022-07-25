import ICharacter from '@/types/Character.interface';
import IGame from '@/types/Game';

export default interface IGameBoardQueryResponse {
  game: IGame;
  characters: ICharacter[];
}
