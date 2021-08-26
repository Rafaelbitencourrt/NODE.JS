module.exports.quadrado = function quadrado(lado) {
  return lado * lado;
};
module.exports.circulo = function circulo(raio) {
  const pi = 3.14;
  return pi * raio * raio;
};
module.exports.triangulo = function triangulo(base, altura) {
  return (base * altura) / 2;
};
module.exports.retangulo = function retangulo(base, altura) {
  return base * altura;
};
