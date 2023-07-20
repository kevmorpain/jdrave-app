import ICharacter from './Character.interface';
import IGame from './Game';

export default interface ICharacterWithGame extends ICharacter {
  game: IGame;
}
