export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    return fechaNueva.toLocaleDateString('es-ES', {
        day: '2-digit',
        year: 'numeric',
        month: 'long'
    })
}