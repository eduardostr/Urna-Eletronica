			document.addEventListener('click', function(e){
				var input_candidato = document.getElementsByName('nNum')[0];
				
				var candidatos = {
					22: {
						src: './images/bolsonaro.jpg',
						nome: 'BOLSONARO',
						msg: 'CONFIRMA SEU VOTO'
					}, 13:{
						src: './images/lula.jpg',
						nome: 'LULA',
						msg: 'CONFIRMA SEU VOTO'
					}, corrige: {
						src: './images/candidato.jpg',
						nome: '',
						msg: 'DIGITE O NÚMERO'
					}, branco: {
						src: './images/candidato.jpg',
						nome:'BRANCO',
						msg: 'CONFIRME A ESCOLHA'
					}
				}
				
				var foto_candidato = document.querySelector('img');
				var nome_candidato = document.querySelector('#nome');
				
				function source_candidato(num_candidato){
					foto_candidato.src = candidatos[num_candidato]['src'];
					nome_candidato.innerHTML = candidatos[num_candidato]['nome'];
					document.getElementsByTagName('h1')[0].innerHTML = candidatos[num_candidato]['msg'];
				}
				//BRANCO
				if(e.target.dataset.branco == 'branco'){
					input_candidato.value ="00";
					return source_candidato('branco');
				}
				//LIMPAR
				if(e.target.dataset.limpar == 'corrige'){
					input_candidato.value ="";
					return source_candidato('corrige');
				}
				
				/*
				* Quando clicamos no BRANCO ou CORRIGE
				* vai entrar na condição abaixo pois os mesmo são BTN
				* Poderíamos colocar mais condições abaixo ou simplesmente
				* passar os códigos do BRANCO para a parte de cima como
				* fiz neste código
				*/
				if(e.target.tagName =='BTN' && input_candidato.value.length <2){
					input_candidato.value = input_candidato.value + e.target.dataset.value
					return source_candidato(input_candidato.value)

				}
	
			});