function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf] ")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() ) //function anonima que retorna os estados
        .then(states => {
            for( const state of states ){ //for para carregar todos os estados
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city] ")
    const stateInput = document.querySelector("input[name=state] ")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text  //atualiza dinamicamento quando troca o id do estado

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) 
    .then(cities => {     
        for( const city of cities ){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
.querySelector("select[name=uf] ")
.addEventListener("change", getCities)


