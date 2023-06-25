import IGame from "@/types/Game";
import IUser from "@/types/User.interface";

export default interface IGamesQuery {
  games: IGame[];
  dungeon_masters: Pick<IUser, 'id' | 'username'>[];
}