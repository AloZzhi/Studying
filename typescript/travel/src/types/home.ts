export type HomeTopBarItem = {
  /** 标题 */
  title: string
  /** 图标 */
  icon: string
}

//js里没有type ts 里有type,
//使用ts关键字 自定义一个类型的约束
//类型声明以;隔开
export type RecentlyViewItem = {
  title: string;
  cover: string;
  price: number;

}