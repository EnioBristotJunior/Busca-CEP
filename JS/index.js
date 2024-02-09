//Variáveis

let logradouro = document.getElementById("logradouro");
let complemento = document.getElementById("complemento");
let bairro = document.getElementById("bairro");
let localidade = document.getElementById("localidade");
let uf = document.getElementById("uf");
let cep = document.getElementById("cep").value;
let procurar = document.getElementById("enviar");

//Função pra procurar o CEP

function procura() {
  try {
    const busca = new XMLHttpRequest();
    busca.onload = function () {
      dados = JSON.parse(this.responseText);

      console.log(dados);
      logradouro.innerText = dados.logradouro;
      complemento.innerText = dados.complemento;
      if (!complemento.innerText) complemento.innerText = "Não há";
      bairro.innerText = dados.bairro;
      localidade.innerText = dados.localidade;
      uf.innerText = dados.uf;
    };
    busca.open(
      "GET",
      "https://viacep.com.br/ws/" +
        document.getElementById("cep").value +
        "/json/"
    );
    busca.send();

    verifica();
  } catch (elaMelargou) {
    console.log("Não sei dizer... o que mudou... mas nada está igual...");
  }
}

function verifica() {
  if (!logradouro.innerText) {
    console.log("caba caiu aqui");
  } else {
    console.log("feo aqui");
  }
}
