function gerarDiaDaSem() {
    const diaDaSemana = new Date().toLocaleDateString('pt-br', {
        weekday: 'long'
    })
    const data = new Date().toLocaleDateString('pt-br')
    const hora = new Date().toLocaleTimeString('pt-br', {
        hour: 'numeric',
        minute: 'numeric'
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    return dataCompleta
}
export default gerarDiaDaSem