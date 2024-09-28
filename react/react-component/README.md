# hooks

1. useState

2. useEffect（默认就加载一次）

- 只接受一个参数时，充当 componentDidUpdate 生命周期
- 接受了第二个参数时，充当 componentDidUpdate 生命周期
- 第二个参数接收为空数组时，充当 componentDidMount 生命周期
- 第二个参数接收为 xxx 时，作为 xxx 的副作用函数
- 回调函数中返回了一个新的函数时，充当了componentWillDistorty
