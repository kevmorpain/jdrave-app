import ICharacterWithGame from '@/types/CharacterWithGame.interface';
import IGame from '@/types/Game';

export default interface ICharactersQuery {
  characters: ICharacterWithGame[];
  games: IGame[];
}
