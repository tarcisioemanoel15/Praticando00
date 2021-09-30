class ValidaCPF {
    constructor(enviocpf){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: enviocpf.replace(/\D+/g, '')
        })
    }
    isSequencia(){
        const seq = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return seq === this.cpfLimpo;
    }
    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        this.geraDigito();
        return this.novocpf === this.cpfLimpo;;
    } 

    geraDigito(){
        const cpfparcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geranoDigito(cpfparcial);
        const digito2 = ValidaCPF.geranoDigito(cpfparcial + digito1);
        this.novocpf = cpfparcial + digito1 + digito2;
    }

    static geranoDigito(gera){
        let total = 0;
        let reverso = gera.length + 1;
        
        for(let res of gera){
            total += reverso * Number(res);
            reverso--;
        }
        const digito =  11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
}

// const cpf = new ValidaCPF('211.111.111-20');
// console.log(cpf.valida())

