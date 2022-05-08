import ICharacter from '@/types/Character.interface';
import IGame from '@/types/Game';

export default interface ICharactersFromGameResponse {
  characters: ICharacter[];
  game: IGame;
}
