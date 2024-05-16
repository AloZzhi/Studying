function foo() {
    var bar = () => {
        console.log(this);
    }
    bar();
}



foo();

