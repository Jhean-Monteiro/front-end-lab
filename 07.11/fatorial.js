function fatorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * fatorial(x-1)
    }
}
fatorial(5);


let olaNome = ()=> { // arrow function
    alert(`Ola`, nome)
};

olaNome()