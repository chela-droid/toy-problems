function carspeedchecker (speedcar){
    if (speedcar<= 70){
        return 'ok'
    }else if (speedcar<=130){
        return((speedcar-70)/5)+'demirerit points'

    }else {
        return 'licence suspended'
    }
}
function handleclick (events){
    let speed = parseInt(document.getElementById('speed').value)
    if (speed !== undefined){
        let message = carspeedchecker(speed)
        document.getElementById('Message').textContent = Message
    }
}