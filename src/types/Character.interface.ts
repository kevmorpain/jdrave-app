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
}
