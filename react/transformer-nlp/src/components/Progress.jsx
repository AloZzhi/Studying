//react props 通过 函数参数传递
export default function Progress({text,percentage}){
  //简化三元运算符 阮一峰es6  有值就取本身，没值取0
  percentage = percentage??0;
  return(
    <div className="progress-container">
      <div className="progress-bar"
        style={{'width':`${percentage}%`}}
      >
        {text}({`${percentage.toFixed(2)}`}%)//显示百分比....显示百分比后两位
      </div>
    </div>
  )
}