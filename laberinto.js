  /*Definicion del laberinto 0 = libre 1=pared 2=raton 3=camino recorrido  5=meta*/
 const mapa1= [
    ['2', '1', '1', '1', '1', '0', '1', '0', '0', '0'],
    ['0', '1', '0', '1', '1', '0', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '1', '0', '1', '0', '1', '0'],
    ['0', '1', '1', '0', '0', '0', '0', '0', '1', '0'],
    ['0', '1', '1', '0', '1', '1', '0', '1', '1', '1'],
    ['0', '1', '1', '0', '1', '0', '0', '0', '0', '1'],
    ['0', '1', '1', '1', '1', '1', '1', '1', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '1', '1', '0'],
    ['0', '1', '1', '1', '1', '1', '0', '0', '1', '0'],
    ['0', '0', '0', '0', '0', '1', '1', '0', '1', '5']]

    const mapa=[
    ['2', '1', '0', '0', '1', '0', '1', '0', '0', '5'],
    ['0', '1', '1', '0', '1', '0', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '1', '0', '1', '0', '1', '0'],
    ['1', '1', '1', '0', '1', '0', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '0', '0', '1', '0', '1', '0'],
    ['0', '1', '1', '1', '1', '0', '1', '0', '1', '0'],
    ['0', '1', '0', '0', '0', '0', '0', '0', '1', '0'],
    ['0', '1', '0', '1', '1', '1', '1', '1', '1', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0']]



//varibles para todo el codigo
    let ratonPosicion = []
const FILAS = mapa1.length
const COLUMNAS = mapa1[0].length
let intentos = 0
let ubicacionesVisitadas = []

/* lo primero que hago aqui es encontrar la posisicion del raton utilizando dos findIdex anidados, que me permitiriran recorrer toda la matriz
en busqueda el indice donde se encuentre '2' y esto lo guardo en una varible */
    const encontrarRatonPosicion=()=> {
        const indice = mapa1.findIndex((x) => x.findIndex((y) => y === '2') !== -1)
    if (indice !== -1) {
        let x=mapa1[indice]
      let segunda=x.findIndex((y) => y === '2')
      ratonPosicion=[indice,segunda]
        console.log(`La ubicación del ratón es (${ratonPosicion}`)
    }
    }
    //ya sabiendo donde esta parado el raton en todo momento, el necesita saber que le rodea para poder moverse
    const obtenerEntorno=(posicion)=> {
        const [x, y] = posicion
        const Entorno = []
    
        const movimientos = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    
        for (let i = 0; i < movimientos.length; i++) {
            const [direccionx, direcciony] = movimientos[i]
            const nuevax = x + direccionx
            const nuevay = y + direcciony
            if (nuevax >= 0 && nuevax < FILAS && nuevay >= 0 && nuevay < COLUMNAS) {
                Entorno.push([nuevax, nuevay])
            }
        }
    
        return Entorno;
    }
    /* una vez que se ha encontrado donde esta el raton y todo lo que lo rodea es hora de moverlo siguiendo algunos parametros muy especificos */
    const moverRaton=(x, y)=> {
        // Verificar si el ratón ha encontrado la salida
        if (mapa1[x][y] == '5') {
            console.log(`¡El ratón ha encontrado la salida en (${x},${y}) después de ${intentos} intentos!`)
            return true
        }
        mapa1[x][y] = '3'
        ubicacionesVisitadas.push([x, y])
    
        // Obtener entorno y verificar cada uno en su posicion actual
        const Entorno = obtenerEntorno([x, y])
    
        for (let i = 0; i < Entorno.length; i++) {
            const [nuevax, nuevay] = Entorno[i]
            const valor = mapa1[nuevax][nuevay]
    
            if (valor == '0' || valor == '5') {
                intentos++;
                if (moverRaton(nuevax, nuevay)) {
                    return true; // Si encuentra la salida, termina
                }
            }
        }
    }
    
    // Función para iniciar la búsqueda del ratón hacia la salida
    const moverHastaSalida=()=> {
        encontrarRatonPosicion()
        if (ratonPosicion.length==0) {
            console.log('No se encontró la posición inicial del ratón.')
        }
    
        if (moverRaton(ratonPosicion[0], ratonPosicion[1])==false) {
            console.log('El ratón no puede moverse, está atrapado.')
        }
    
        console.log('Estado final del laberinto:')
        console.table(mapa1)
        console.log('Ubicaciones visitadas por el ratón:')
        console.log(ubicacionesVisitadas)
        console.log(`Número total de intentos: ${intentos}`)
    }
    
    moverHastaSalida()