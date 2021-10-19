function relog() {
    
    const rel = document.querySelector('.relogioo')

    
    criazero = (num) => {
        return  num > 9 ? num : '0'+num  
      }


        const data = new Date();
        const hora = this.criazero(data.getHours())
        const minutos = this.criazero(data.getMinutes())
        const segundos = this.criazero(data.getSeconds());
    
        
        const horas = `${hora}:${minutos}:${segundos}`;
        rel.innerHTML = horas; 
    }
        
        
setInterval(relog, 1000)
