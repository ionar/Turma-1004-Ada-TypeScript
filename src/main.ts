class Company {
    name: string;
    employees: number = 0;

    constructor(name: string, employees: number) {
        this.name = name;
        this.employees = employees;
        console.log(`Instanciando a empresa ${this.name} com ${this.employees} funcionários`)
    }

    addEmployer(quantidade: number): void {
        this.employees = this.employees + quantidade;
        console.log(`Você adicionou ${quantidade} funcionarios`);
    }

    showNumberOfEmployess(): void {
        console.log(`A companhia agora tem ${this.employees} felizes funcionários`);
    }

    showCompanyName(): void {
        console.log(`O nome da empresa é: ${this.name}`);
    }
}

let e1 = new Company("Ionar Tec", 1);
e1.addEmployer(3);
e1.showNumberOfEmployess();
e1.showCompanyName();

