import { EStatus } from "./Status.enum";

interface IUser {
  id: string;
  username: string;
}

export default interface IGame {
  id: string;
  title: string;
  status: EStatus;
  description: string;
  picture_url: string;
  created_at: string;
  updated_at: string | null;
  dungeon_master: IUser;
  players: {
    user: IUser;
  }[];
}
