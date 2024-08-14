declare type Filter =
  /** 削除済み以外のすべてのtodo */
  | "all"
  /** 完了したtodo */
  | "checked"
  /** 未完了のtodo */
  | "unchecked"
  /** 削除済みのtodo */
  | "removed";
