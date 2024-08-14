// Todo型
declare type Todo = {
  /** todoのID */
  readonly id: number;
  /** todoの内容 */
  value: string;
  /** 完了、未完了フラグ */
  checked: boolean;
  /** 削除フラグ */
  removed: boolean;
};
