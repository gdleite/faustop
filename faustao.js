var respostas = {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:""};
var person = "";


function test(pergunta,valor){
	var x = valor;
	var y = pergunta;
	respostas[y]=x;
	console.log(respostas);
}

function respostasToArray(){
	var valores = [];
	for (var key in respostas){
		valores.push(respostas[key]);
	}
	console.log(valores);
	avaliacao(valores);

}

function avaliacao(valores){

	var faustop=["amigos",
				"todos",
				"selena",
				"nenhum",
				"meu",
				"agradecer",
				"pepsi",
				"4"
				];


	var dancarina=["exercicio",
					"danca",
					"bambam",
					"dingdong",
					"errou",
					"autografo",
					"salada",
					"3"
					];


	var carol=["estudar",
				"propaganda",
				"yudi",
				"danca2",
				"fera",
				"textao",
				"sushi",
				"2"
				];


	var rodrigoFaro=["mal",
					"videocassetadas",
					"gugu",
					"arquivo",
					"fogo",
					"magro",
					"margarina",
					"0"
					];


	var gatoDoido=["pet",
					"sevira",
					"andremarques",
					"videocassetadas2",
					"morer",
					"sevira2",
					"sucrilhos",
					"1"
					];

	var pts={"gatodoido":0,"faro":0,"carol":0,"dancarina":0,"faustop":0}

	for (i=0;i<valores.length;i++){
		console.log(valores[i]);
		if (valores[i] in faustop){ 
			pts["faustop"]++;
		}
		else if (valores[i] in dancarina){
			pts["dancarina"]++;
		}
		else if (valores[i] in carol){
			pts["carol"]++;
		}
		else if (valores[i] in rodrigoFaro){
			pts["faro"]++;
		}
		else {
			pts["gatodoido"]++;
		}
	}
	console.log(pts)
}
	

