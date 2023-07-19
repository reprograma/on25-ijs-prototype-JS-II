class Historic {
  constructor() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimento = [];
  }
  consultar() {
    this.consultas.push(Date());
  }
  vacinar(value) {
    this.vacinas.push(value);
    consultar();
  }
  examinar(value) {
    this.procedimento.push(value);
    consultar();
  }
}
