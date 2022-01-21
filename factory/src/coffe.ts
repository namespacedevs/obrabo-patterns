export class Coffe {
    constructor(_name: string, _type: string){
        this.name = _name;
        this.type = _type;
    }
    name: string;
    type: string;
    watterIsHot: boolean = false;

    boil(): void {
        console.log('Iniciando fervura...')
        this.watterIsHot = true;
        console.log('Fervura Concluida!! \n');
    }
    addCoffe() : Boolean {
        if(this.watterIsHot){
            console.log('Adicionando Café...');
            console.log('Café adicionado com sucesso!');
            return true;
        }
        console.log('Ops!!! para adicionar o café a água precisa estar quente!')
        return false;
    }
}