let count = 1
let a = 2
function main() {
    let count = 2
    let a = 1
    function bar() {
        let count = 3
        function foo() {
            let count = 4
            console.log(a);
        }
        foo()
    }
    bar()
}
main()

/**
 * 全局作用域 也是main的词法作用域
 * main的作用域 也是bar的词法作用域
 * bar的作用域 也是foo的词法作用域
 */