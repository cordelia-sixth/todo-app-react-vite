// Todo型
export type Todo = {
  /** todoのID */
  readonly id: number;
  /** todoの内容 */
  title: string;
  /** 完了、未完了フラグ */
  completed: boolean;
  /** 削除フラグ */
  deleted: boolean;
};
