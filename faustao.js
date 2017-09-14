var respotas={1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:"",11:"",12:"",13:"",14:""}
console.log(respotas)
var t=document.getElementById('ss')
console.log(t)

function resposta(pergunta, valor){
	var x = valor
	respostas.push({pergunta:x})
	console.log(respostas)
}