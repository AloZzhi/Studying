// console.log('aaa');
// - 冯诺依曼
// - 获得用户的输入
// 后端的进程对象  程序运行的最小单元 
// process 进程对象
// 冯诺依曼计算设备 process 对象 输入设备
// on data 监听输入事件   enter  
/**
 * @func 根据用户输入，输出胜或赢
 * @return  win/lose 
 */
const game = (action) => {
  const arr = ['rock', 'scissor', 'paper'];
  console.log(action);
  // 输入校验
  if (arr.indexOf(action) == -1) {
    throw new Error('用户输入错误');
  }

  let computerAction;
  let random = Math.floor(Math.random() * 3)
  computerAction = arr[random];
  // console.log('电脑出了' + computerAction);
  if (computerAction == action) {
    console.log('平局')
    return 0; // 平局
  } else if (
    (computerAction == 'rock' && action == 'scissor') ||
    (computerAction == 'scissor' && action == 'paper') ||
    (computerAction == 'paper' && action == 'rock')
  ) {
    return -1;
  } else {
    return 1;
  }

}
let winCount = 0;

process.stdin.on('data', (buffer) => {
  // 存储和通信的底层是二进制 
  // console.log(buffer);
  const action = buffer.toString().trim();
  // console.log(action, '------');
  // 独立的随机出拳业务
  const result = game(action);
  if (result == 0) {
    console.log('平局');
  }
  else if (result == 1) {
    console.log('你赢了');
  }
  else {
    console.log('你输了');
  }
  if (result == 1) {
    winCount++;
  }
  winCount++
  if (winCount == 3) {
    console.log('不玩儿');
    process.exit();

  }


})