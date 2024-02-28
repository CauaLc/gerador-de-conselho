const botaoConselho = document.getElementById('btn-conselho')
const numeroDoConselho = document.getElementById('numero-conselho')
const descricaoConselho = document.getElementById('conselhos')

async function buscarConselho(){
    const resposta = await fetch ("https://api.adviceslip.com/advice")
    const conteudoConselho = await resposta.json()
    const idConselho = `Advice #${conteudoConselho.slip.id}`
    const textoDoConselho = `"${conteudoConselho.slip.advice}"`

    numeroDoConselho.innerHTML = idConselho
    descricaoConselho.innerHTML = textoDoConselho
}

botaoConselho.addEventListener('click', buscarConselho)

 buscarConselho()
