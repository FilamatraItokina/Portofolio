const link =
document.getElementById('liens');

const boite = 
document.getElementById('boiteP');

link.remove();

const boutonSavoir = 
document.getElementById('savoir');

boutonSavoir.addEventListener('click',
  ()=>{
    boite.appendChild(link);
    boutonSavoir.remove();
  }
)