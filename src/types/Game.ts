interface IUser {
  id: string;
  username: string;
}

export default interface IGame {
  id: string;
  title: string;
  description: string;
  picture_url: string;
  created_at: string;
  dungeon_master: IUser;
}
