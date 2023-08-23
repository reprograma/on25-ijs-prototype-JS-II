// NOME: Priscila Baer Gomes Vieira

class Animal{
	constructor(nome, idade, cor, social){
		this.nome = nome
		this.idade = idade
		this.cor = cor
		this.consultas = []
		this.social = social
	}        
	
    consultar(){
		this.consultas.unshift(new Date())
	}
  
    brincar(){
        console.log("Hora de brincar!!")
    }
	
    acariciar(){
		console.log("Hora do carinho")
    }
	
    alimentar(comida){
		console.log(`${this.nome} recebeu ${comida}`)
	}
}

class Domesticado extends Animal{
	
	constructor(nome, idade, cor, social, castrado){
		super(nome, idade, cor, social)
		this.castrado = castrado
		this.vacinas = []
	}


	vacinar(vacina){
		this.vacinas.push(vacina)
		super.consultar()
	}

	castrar(){
		if(this.castrado){
			console.log(`OPA!!! ${this.nome} já foi castrado!`)
		} else{
			this.castrado = true
			super.consultar()
			console.log(`${this.nome} foi castrado!`)
		}
	}
}

class Gato extends Domesticado{
	constructor(nome, idade, cor, social, castrado){
		super(nome, idade, cor, social, castrado)
		this.externo = false
	}

	miar(){
		console.log("miau miaauuu")
	} 
  
	alimentar(comida){
		const comidasFavoritas = ["frango","sachê","peixe"]
		
		if(comidasFavoritas.includes(comida)){
			this.social = true
			super.alimentar(comida)			
			console.log(", uma de suas favoritas e agora deixa acariciar")
		}else{
			console.log(`${comida} não é a comida favorita de ${this.nome}`)
		}
		
	}		
	
	acariciar(){
		super.acariciar()
		if(this.social){
			console.log("ron ron ron")
		}else{
			console.log(`${this.nome} não é sociável, está silvando. Se der sua comida favorita, ficará sociável e deixará ser acariciado`)
		}
    }
}


class Cachorro extends Domesticado{
	#ferido
	
	constructor(nome, idade, cor, social, castrado, raca){
		super(nome, idade, cor, social, castrado)
		this.#ferido = true
		this.raca = raca
	}

	latir(){
		console.log("au aauuu")
	} 
	
	acariciar(){
		super.acariciar()
		console.log("aufff")
    }
	
	brincar(){
		super.brincar()		
		if(this.#ferido){
			console.log(`${this.nome} não está bem, não veio brincar, vamos ao veterinário!`)
			this.#ferido = false
			super.consultar()
		}else{		
			console.log(`Pega a bolinha ${this.nome}!!`)
		}
    }
}

class Papagaio extends Animal{	
	constructor(nome, idade, cor, social)
		super(nome, idade, cor, social)
	}

	falar(){
		console.log('Oi oi td bem?')
	} 
	
	acariciar(){
		super.acariciar()
		console.log("Prrrll")
    }
	
	brincar(){
		super.brincar()		
		falar()
    }
	
	alimentar(comida){
		super.alimentar(comida)
		falar()
	}
}

class Hamster extends Animal{	
	constructor(nome, idade, cor, social)
		super(nome, idade, cor, social)
		this.tipo= "sírio"
	}
	
	consultar(){
		brincar()
		super.consultar()
	}
	
	brincar(){
		console.log(`Brincando com ${this.nome}´)
    }
}

function chamar(listaAnimais) {
	const listaAnimaisQueResponderam = []

	listaAnimais.forEach(animal => {
		if(animal.social){
			listaAnimaisQueResponderam.push(animal)
		} 
	})
	return listaAnimaisQueResponderam
}