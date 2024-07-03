
//? Esta funcion dibuja la Imagen
const painter = (coloresHexadecimales) => {
  const gridContainer = document.getElementById('grid-container');
  coloresHexadecimales.forEach(row => {
    row.forEach(color => {
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.style.backgroundColor = color;
      gridContainer.appendChild(div);
    });
  });
}

//? Esta funcion permite limpiar la pagina
const cleaner = () => {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';
}

const coloresHexadecimales = [
  ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'],
  ['#FF8C33', '#33FF8C', '#338CFF', '#FF338C', '#8C33FF'],
  ['#FFC133', '#33FFC1', '#33C1FF', '#FFC133', '#C133FF'],
  ['#FFF633', '#33FFF6', '#33F6FF', '#F6FF33', '#F633FF'],
  ['#FFD133', '#33FFD1', '#33D1FF', '#FFD133', '#D133FF']
];

/* Aqui inicia tu codigo  */

/*defininindo una nueva array con el tamaño de la original pero vacia*/
let n=coloresHexadecimales.length
let matrizCopia = Array.from({ length: n }, () => Array(n).fill(0));
/* definimos una variable donde estara la informacion del usuario*/
let grados=prompt('ingrese en cuantos grados desea girar la matriz 90 o 180')
/*giro de 180 grados*/
if (grados==180) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        matrizCopia[n - 1 - i][n - 1 - j] = coloresHexadecimales[i][j];
    }
}
  /*gira a la derecha*/
} else { let direccion=prompt('Por favor elija si desea moverse hacia la izquierda o la derecha') 
  if (direccion=='derecha') {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
     matrizCopia[j][n-1-i]=coloresHexadecimales[i][j]
       
      }
       
     }
  /*gira a la izquierda*/
} else { 
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
   matrizCopia[n-1-j][i]=coloresHexadecimales[i][j]
     
    }
     
   }
  
}
  
}
  


cleaner();
painter(matrizCopia)

console.log(matrizCopia)
/* Aqui termina tu codigo  */

