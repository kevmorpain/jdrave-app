import IGame from '@/types/Game';
import ICharacter from '@/types/Character.interface';

export default interface IHomeQuery {
  games: IGame[];
  characters: ICharacter[];
}
