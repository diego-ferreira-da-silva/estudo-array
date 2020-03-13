let valores = [8, 1, 7, 4, 2, 9]


for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}
//uma maneira de mostrar os valores na tela, usando a repetição for
for(var pos = 0 ; pos < num.length; pos++){
    console.log(num[pos])
}
//Simplificado apenas para Objetos e Vetores. 
for (let pos in num){
    console.log(`A Posição ${pos} tem um valor ${num[pos]}`)
}