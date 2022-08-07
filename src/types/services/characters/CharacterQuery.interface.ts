import ICharacter from '@/types/Character.interface';
import IObject from '@/types/Object.interface';

export default interface ICharacterQuery {
  character: ICharacter;
  objects: IObject[];
}
