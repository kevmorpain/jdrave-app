export default interface ICharacterObject {
  id?: string;
  character_id: string;
  object_id: string;
  name: string;
  bonus: number;
  effect: string | null;
  is_equipped: boolean;
  quantity: number;
  status: string | null;
  kind: string;
}
