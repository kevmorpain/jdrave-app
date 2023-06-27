import IGame from './Game';
import { EObjectKind } from './ObjectKind.enum';
import { EStatus } from './Status.enum';

export interface INewObject {
  name: string;
  description: string;
  kind: EObjectKind;
  can_be_equipped: boolean;
  picture_url: string | null;
  status: EStatus;
}

export default interface IObject {
  id: string;
  name: string;
  description: string;
  kind: EObjectKind;
  can_be_equipped: boolean;
  updated_at: string;
  picture_url: string;
  status: EStatus;
  games: { game: IGame }[];
}
