const now = new Date()

console.log('Adesso sono le: ' + now)

const appuntamenti = []

const elencoMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]

const stampaMeseNelTitolo = function () {
    const titolo = document.querySelector('h1')
    const indiceMese = now.getMonth()
    const attualeMese = elencoMesi[indiceMese]
    titolo.innerText = attualeMese
}

const quantiGiorniNelMese = function () {
    const prendiAnno = now.getFullYear()
    const prendiMese = now.getMonth()
    const ultimoGiornoMese = new Date(prendiAnno, prendiMese + 1, 0)
    const numeroDelGiorno = ultimoGiornoMese.getDate()

    return numeroDelGiorno
}

const deselezionaGiorni = function () {
    const selezionato = document.querySelector('.selected')
    if (selezionato) {
        selezionato.classList.remove('selected')
    }
}

const modificaCasellaMeeting = function (indiceGiorno) {
    const boxGiorno = document.getElementById('nuovoMeetingGiorno')
    boxGiorno.classList.add('haUnGiorno')
    boxGiorno.innerText = indiceGiorno + 1
}

const creaGiorni = function (numeroDiGiorni) {
    const calendarioContenitore = document.getElementById('calendario')
    for (let i = 0; i < numeroDiGiorni; i++) {
        const giornoContenitore = document.createElement('div')
        giornoContenitore.addEventListener('click', function (e) {
            deselezionaGiorni()
            giornoContenitore.classList.add('selected')
            modificaCasellaMeeting(i)
            if (appuntamenti[i].length > 0) {
                // mostra appuntamenti
            } else {
                // nascondi appuntamenti
                const appuntamentiContenitore = document.getElementById('appuntamenti')
                appuntamentiContenitore.style.display = 'none'
            }
        })
        const cellaTitolo = document.createElement('h3')
        cellaTitolo.innerText = i + 1
        giornoContenitore.appendChild(cellaTitolo)
        calendarioContenitore.appendChild(giornoContenitore)
        appuntamenti.push([])
    }
}


const numeriGiorniMeseCorrente = quantiGiorniNelMese()
creaGiorni(numeriGiorniMeseCorrente)
stampaMeseNelTitolo()







