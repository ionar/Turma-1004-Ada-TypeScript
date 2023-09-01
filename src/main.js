"use strict";
class Company {
    constructor(name, employees) {
        this.employees = 0;
        this.name = name;
        this.employees = employees;
        console.log(`Instanciando a empresa ${this.name} com ${this.employees} funcionários`);
    }
    addEmployer(quantidade) {
        this.employees = this.employees + quantidade;
        console.log(`Você adicionou ${quantidade} funcionarios`);
    }
    showNumberOfEmployess() {
        console.log(`A companhia agora tem ${this.employees} felizes funcionários`);
    }
    showCompanyName() {
        console.log(`O nome da empresa é: ${this.name}`);
    }
}
let e1 = new Company("Ionar Tec", 1);
e1.addEmployer(3);
e1.showNumberOfEmployess();
e1.showCompanyName();
