podes exportar/importar una funcion en un archivo para llevarlo a otro archivo, simplemente poniendo "export" adelante de una funcion
ejemplo:
export function sumar( a , b ) = {
    return a+b
}
y para importarla:
import {sumar} from './nombredecarpeta.jajaja'

podes exportar por defecto, "export default" podes importar/exportar un solo default y le podes poner el nombre que quieras en el import, pero la buena practica es que sea igual al otro archivo
