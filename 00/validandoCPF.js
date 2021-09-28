function ValidaCPF(enviocpf){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return enviocpf.replace(/\D+/g, '')
        } 
    })

    ValidaCPF.prototype.isSequencia = function(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
    ValidaCPF.prototype.valida = function(){
        if(this.cpfLimpo.length !== 11)return false;
        if(typeof this.cpfLimpo === 'undefined')return false;
        if(this.isSequencia()) return false;

        const cpfparcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfparcial);
        const digito2 = this.criaDigito(cpfparcial + digito1);

        const novoCPF = cpfparcial + digito1 + digito2;
        return novoCPF === this.cpfLimpo;
    }

    ValidaCPF.prototype.criaDigito = function(parcial){
        const cpfArray = Array.from(parcial);
        let reverso = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (reverso * Number(val));
            reverso--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}
  
const cpf = new ValidaCPF('211.111.111-20');

console.log(cpf.valida());

if(!cpf.valida()){
    console.log('falso')
}else{
    console.log('verdadeiro');
}