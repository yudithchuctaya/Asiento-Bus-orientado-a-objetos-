   this.numAsientos = 32;
  
function Pasajeros (nombre,apellido,dni){
    this.nombre=nombre;
    this.apellido =apellido;
    this.dni=dni;


  }
   this.celdas = document.getElementsByTagName('td');
     for (var i= 0; i < this.celdas.length; i++) {
    this.celdas[i].addEventListener('click',Bus,false);
    }
function Bus(){
  this.asientos=0;
  
  this.add = function(celdas){
      this.celdas.push(celdas);
   }

  this.buscar= function(){

  }
  this.reservar =function(){

  }
  this.cancelar = function(){

  }
  this.listar=function(){

  }
}


	




