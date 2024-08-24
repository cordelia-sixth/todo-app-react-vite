// Todo型
export type Todo = {
  /** todoのID */
  readonly id: number;
  /** todoの内容 */
  value: string;
  /** 完了、未完了フラグ */
  completed: boolean;
};
