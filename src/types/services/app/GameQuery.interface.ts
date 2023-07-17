import ICharacter from '@/types/Character.interface';
import IGame from '@/types/Game';

export default interface IGameQuery {
  game: IGame;
  npcs: ICharacter[];
  pcs: ICharacter[];
}
