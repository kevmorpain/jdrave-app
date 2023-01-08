import { EEntity } from '@/types/Entity.enum';
import { EObjectKind } from '@/types/ObjectKind.enum';

export default interface IDraftEntity {
  id: string;
  title: string;
  description: string;
  entity: EEntity;
  kind: EObjectKind;
  picture_url: string;
}
