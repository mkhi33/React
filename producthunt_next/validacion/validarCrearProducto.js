export default function validarCrearProducto( valores ) {
    let errores = {}
    // Validar el nombre del usuario
    if( !valores.nombre ) {
        errores.nombre = "El nombre es obligatorio"
    }
    // Validar el nombre de la empresa
    if( !valores.empresa ) {
        errores.empresa = "Nombre de empresa es obligatorio"
    }

    //Validar la URL
    if( !valores.url ) {
        errores.url = "La url del producto es obligatorio"
    }else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no válida"
    }

    // Validar descripción
    if( !valores.descripcion ) {
        errores.descripcion = "Agrega una descripción al producto"
    }
    return errores
    
}