export interface ITag {
  name: string;
}

export interface INote {
  title: string;
  text: string;
  tags: ITag[];
}
  