/**
 * Todoを表す型
 * @property id 一意の識別子
 * @property title タイトル
 * @property completed 完了と未完了の切り替えフラグ
 */
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

/**
 * 表示するTodoのフィルタリング
 * - all - 全てのTodo
 * - completed - 完了したTodo
 * - incompleted - 未完了のTodo
 */
const filterValues = ["all", "completed", "incompleted"] as const;
export type Filter = (typeof filterValues)[number];

export const isFilter = (arg: string): arg is Filter =>
  filterValues.some((value) => value === arg);
