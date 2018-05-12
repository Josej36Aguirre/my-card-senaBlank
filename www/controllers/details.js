angular.module('starter').controller('detailstroller', function($state){

	var vm = this;
	var cantantesName = $state.params.cantante;

	switch(cantantesName){
		case 'Kurt Cobait':
		vm.detalles ={
			nombre: 'Kurt Cobait',
			fechaNacimiento: '20 febrero de 1967',
			resumen: 'Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.',
			fotoURL:'img/kurt.jpg'
		};
	}
	//Boton regresar
	vm.goBack = function(){
		$state.go('lista');
	}
});
