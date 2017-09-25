var respostas = {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:""};

function test(pergunta,valor){
	var x = valor;
	var y = pergunta;
	respostas[y]=x;
	console.log(respostas);
}

function main(){
	var valores = [];
	for (var key in respostas){
		valores.push(respostas[key]);
	}
	var person = avaliacao(valores);
	var imagem= document.getElementById('imagem');
	var titulo= document.getElementById('tituloresp');
	var texto= document.getElementById('textoresp');
	imagem.style.height = '200px';
	if (person=="nada"){
		titulo.innerHTML="Por favor responda mais perguntas."
	}
	else if (person=="faustop"){
		imagem.src="imagens/faustop.jpg";
		titulo.innerHTML="Você é <i>FAUSTOP</i>!"
		texto.innerHTML="Pode-se considerar um vencedor na vida! Ser <i>FAUSTOP</i> significa que você pensa como o onipotente Faustão e tem todo o Potencial para <i>Liderar a Audiência nas Tardes de Domingo</i> com todo o seu carisma, experiência e habilidade em interromper os outros no meio da fala, o mundo está na palma das suas mãos. Tenha um Bom dia e lembre-se de beber muita Pepsi!";

	}
	else if (person=="dancarina"){
		imagem.src="imagens/dancarina.jpg";
		imagem.style.height = '250px';
		titulo.innerHTML="Você é as dançarinas do Faustão!";
		texto.innerHTML="Rebolar é a sua vida, quando você levanta de manhã faz 1 hora de zumba antes de comer 2 colheres de chia com whey e fica sem mais nada até o meio dia onde você faz um suco detox com 3 rúculas e gelo. De tarde, hora de ir pra academia e fazer agachamento em 3 séries de 20 repetiçoes com selfies intercaladas nos intervalos. À noite e hora de ensaiar a música de abertura das Videocassetadas pela milésima vez. Tudo isso sem tirar o sorriso perfeito do rosto e deixar de alimentar seu pug.";
	}
	else if (person=="carol"){
		imagem.src="imagens/carol.jpg";
		titulo.innerHTML="Você é a Carol Nakamura!";
		texto.innerHTML="Asiática, bonita e talentosa! Você tem todas as características para ser a apresentadora de um programa de audiência nas tardes de domingo! Exceto que o Faustão existe e agora você está presa no limbo entre ele e as dançarinas por toda sua vida que se chama assistente de palco. Mesmo se esforçando muito para alcançar seus objetivos, você nunca chegará lá. Virar youtuber ta na moda. Que tal?";

	}
	else if (person=="faro"){
		imagem.src="imagens/faro.jpg";
		titulo.innerHTML="Você é o Rodrigo Faro!";
		texto.innerHTML="Uma pessoa carismática e independente, sempre na luta para alcançar seus objetivo. Porém sempre está na (grande) sombra do Faustão em segundo lugar em audiência e na vida. Tudo que você queria era ser o principal programa das tardes de domingo e nem mostrando vídeos de pessoas caindo vai te levar a esse lugar. Sugiro tentar ganhar um peso.";

	}
	else{
		imagem.src="imagens/gato.jpg";
		titulo.innerHTML="Você é o Gato doido!";
		texto.innerHTML="Nasceu para o palco e age somente de acordo com seus instintos! Ser o Gato Doido significa que você perdeu completamente a noção da realidade e agora vive preso entre o paradoxo artista-animal consagrado por este homem no 'Se Vira nos 30' onde não conseguiu a vitória e segue em vingança por toda sua vida contra o Faustão.<br> Não conhece essa fera? <a href='https://www.youtube.com/watch?v=rAcyH_jNt3M'>Clique aqui!</a><br>Ô loco, Meu!";

	}


}

function avaliacao(valores){

	var faustop=["amigos",
				"todos",
				"selena",
				"nenhum",
				"meu",
				"agradecer",
				"pepsi",
				"4",
				"retrato",
				"big"
				];


	var dancarina=["exercicio",
					"danca",
					"bambam",
					"dingdong",
					"errou",
					"autografo",
					"salada",
					"3",
					"yoga",
					"chiclete"
					];


	var carol=["estudar",
				"propaganda",
				"yudi",
				"danca2",
				"fera",
				"textao",
				"sushi",
				"2",
				"panfletos",
				"banda"
				];


	var rodrigoFaro=["mal",
					"videocassetadas",
					"gugu",
					"arquivo",
					"fogo",
					"magro",
					"margarina",
					"0",
					"prata",
					"sofre"
					];


	var gatoDoido=["pet",
					"sevira",
					"andremarques",
					"videocassetadas2",
					"morer",
					"sevira2",
					"sucrilhos",
					"1",
					"bola",
					"ratm"
					];

	var pts={"gatodoido":0,"faro":0,"carol":0,"dancarina":0,"faustop":0}

	for (i=0;i<valores.length;i++){
		if (faustop.indexOf(valores[i]) > -1){ 
			pts["faustop"]++;
		}
		else if (dancarina.indexOf(valores[i]) > -1 ){
			pts["dancarina"]++;
		}
		else if (carol.indexOf(valores[i]) > -1 ){
			pts["carol"]++;
		}
		else if (rodrigoFaro.indexOf(valores[i]) > -1 ){
			pts["faro"]++;
		}
		else if (gatoDoido.indexOf(valores[i]) > -1 ) {
			pts["gatodoido"]++;
		}
	}
	console.log(pts);
	var  maior="faustop";
	for (var key in pts){
		if (pts[key]>pts[maior]){
			maior=key
		}
	}
	if (pts[maior]==0){
		return("nada")
	}
	else{
	return maior
	}
}
	

