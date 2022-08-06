export default interface ICharacter {
  id: string;
  name: string;
  maxHp: number;
  currentHp: number;
  features: Record<string, Record<string, number>>;
  picture: string;
  description: string;
  is_npc?: boolean;
  isNpc?: boolean;
  inventory: string;
  equipment: string;
  equipment_items?: {
    id: string;
    name: string;
    bonus: number;
    effect: string | null;
    is_equipped: boolean;
    quantity: number;
    status: string | null;
    kind: string;
  }[];
}
