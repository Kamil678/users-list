export type SortKey = "name" | "email" | "username" | "country" | "date";

export interface Column {
  name: SortKey;
  title: string;
}
