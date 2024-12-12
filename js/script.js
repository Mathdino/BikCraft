//Ativar itens no Orçamento 
// Passado parametro plea URL do site, utilizando os 'ID' e 'Value', assim o javascript verifica se os tipos
// São verdadeiros e quando o usuário clica na bicicleta ou o seguro, ele carrega a pag já com a opção carregada
const params = new URLSearchParams(location.search);

params.forEach((item) => {
  const element = document.querySelector(`[type="radio"][value="${item}"]`);
  if (element) element.checked = true;
});

// Ativar e mostrar perguntas frequentes
const dts = document.querySelectorAll("dt");

dts.forEach((dt) => {
  dt.addEventListener("click", () => {
    dt.parentElement.classList.toggle("ativa");
  });
});

//Ativar Links do menu
// Verfica qual item do menu está ativo e na pag ativa ele add a classe "ativo", que está com width=100% no CSS
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});

// Ativar Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", () => {
    if (matchMedia("(min-width: 1000px)").matches) {
      galeriaContainer.prepend(img);
    }
  });
});

 if (window.SimpleAnime){
  new SimpleAnime();
 } 
