fetch("http://api.open-notify.org/iss-now.json")
 .then( (response) => response.json() )
 .then( (data) => {

    const { latitude, longitude } = data.iss_position

    const latitudeISS = document.getElementById("latitude")
    const longitudeISS = document.getElementById("longitude")
    
    latitudeISS.textContent = `${latitude}`
    longitudeISS.textContent = `${longitude}`


    const mapa = document.getElementById("mapISS")
    mapa.addEventListener("click", (e) => {
        e.preventDefault()

        const mapUrl= `https://mapy.cz/zakladni?x=${latitude}y=${longitude}&z=7`
        // const mapUrl= `https://www.google.com/maps/@${latitude},${longitude},5z?entry=ttu`
        window.open(mapUrl, '_blank') 
    })
})

.catch( (error) => {
    const paragraph = document.createElement("p")
    paragraph.textContent = `Chyba v načítání ${error}`
    document.body.appendChild(paragraph)
})