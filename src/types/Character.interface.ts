import ICharacterObject from './CharacterObject.interface';
import { EStatus } from './Status.enum';

export default interface ICharacter {
  id: string;
  name: string;
  maxHp: number;
  currentHp: number;
  features: Record<string, Record<string, number>>;
  picture_url: string;
  description: string;
  is_npc?: boolean;
  isNpc?: boolean;
  inventory: string;
  equipment: string;
  items?: ICharacterObject[];
  status: EStatus;
}
