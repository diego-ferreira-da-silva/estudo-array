//num.sort() Deixa os valores em ordem Crescente.
//num.length Mostra o tamanho do vetor. 
//num.push  Adiciona mais um no vetor na ultima posição
let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`Nosso vetor tem ${num.length} Elementos`)
console.log(`O elemento na posição 2 é "${num[1]}"`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log ('O valor não foi encontrado.')
}else{
console.log(`O valor "8" está na posição ${pos}`)
}

