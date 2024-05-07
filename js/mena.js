fetch("https://data.kurzy.cz/json/meny/b[1].json")
  .then((response) => response.json())
  .then((data) => {

    const bankaElement = document.getElementById("banka")
    const dencElement = document.getElementById("den")
    const newKurz = document.getElementById("kurzy")

    bankaElement.innerHTML = data.banka
    dencElement.innerHTML = data.denc


    for (const mena in data.kurzy) {
      const menaElement = document.createElement("div")
      menaElement.classList.add("mena")

      // Do el. vložím vše týkající se měny
      menaElement.innerHTML = `
        <strong>${mena}</strong>:  
        <table> 
          <td>Název měny:</td>
           <td><strong>${data.kurzy[mena].nazev}</strong></td>
          </tr>  
          <tr>
            <td>Jednotka:</td>
            <td>${data.kurzy[mena].jednotka}</td>
          </tr>
          <tr>
          <td>Nákup:</td>
            <td>${data.kurzy[mena].dev_nakup}</td>
          </tr>
          <tr>
          <td>Prodej:</td>
            <td>${data.kurzy[mena].dev_prodej}</td>
          </tr>
          <td>Validační nákup:</td>
            <td>${data.kurzy[mena].val_nakup}</td>
          </tr>
          <td>Validační prodej:</td>
            <td>${data.kurzy[mena].val_prodej}</td>
          </tr>    
        </table>
      `
      newKurz.appendChild(menaElement)
    }
  })