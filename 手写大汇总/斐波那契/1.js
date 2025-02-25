function fibonacci(n){
  if(n<=1){
    return n
  }
  let fib = [0,1]
  for(let i = 1;i<=n;i++){
    fib[i]=fib[i-1]+fib[1-2]
  }
  return fib[n]
}