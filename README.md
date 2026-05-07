# BikCraft

Site institucional e de e-commerce de bicicletas elétricas artesanais feitas sob medida. Projeto estático desenvolvido com HTML5, CSS3 e JavaScript Vanilla, sem dependências externas.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Demonstração](#demonstração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Páginas](#páginas)
- [Tecnologias](#tecnologias)
- [Arquitetura CSS](#arquitetura-css)
- [JavaScript](#javascript)
- [Responsividade](#responsividade)
- [Como Executar](#como-executar)

---

## Visão Geral

A BikCraft é uma marca fictícia de bicicletas elétricas de alto padrão. O site apresenta o catálogo de produtos (Magic, Nimbus e Nebula), planos de seguro, formulário de orçamento dinâmico, páginas de contato com lojas físicas e termos de uso.

**Características principais:**

- Design responsivo com 3 breakpoints (1200px / 800px / 600px)
- Formulário de orçamento dinâmico controlado por CSS (`:checked`) e URL params
- Galeria de imagens interativa por clique
- Accordion de perguntas frequentes
- Animações de entrada via `data-anime`
- Sem frameworks nem bibliotecas externas (exceto Google Fonts)

---

## Demonstração

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local.

---

## Estrutura do Projeto

```
BikCraft/
│
├── index.html               # Página inicial
├── bicicletas.html          # Catálogo completo de bicicletas
├── orcamento.html           # Formulário de orçamento
├── seguros.html             # Planos de seguro
├── contato.html             # Contato e lojas físicas
├── termos.html              # Termos e condições
├── favicon.svg
│
├── bicicletas/              # Páginas individuais de produto
│   ├── magic.html
│   ├── nimbus.html
│   └── nebula.html
│
├── css/
│   ├── style.css            # Arquivo principal (importa todos os outros)
│   ├── style.min.css        # Versão minificada
│   ├── global/
│   │   ├── global.css       # Reset e estilos base
│   │   ├── header.css
│   │   └── footer.css
│   ├── utilidades/
│   │   ├── cores.css        # Variáveis de cor (CSS Custom Properties)
│   │   ├── tipografia.css   # Sistema de classes tipográficas
│   │   ├── componentes.css  # Botões, links, títulos, containers
│   │   ├── formulario.css   # Estilos base de formulário
│   │   └── simple-anime.css # Classes de animação
│   ├── home/
│   │   ├── introducao.css
│   │   ├── tecnologia.css
│   │   ├── parceiros.css
│   │   └── depoimento.css
│   ├── bicicletas/
│   │   ├── bicicletas.css
│   │   └── bicicletas-lista.css
│   ├── bicicleta/
│   │   ├── bicicleta.css
│   │   └── seguro.css
│   ├── seguros/
│   │   ├── seguros.css
│   │   ├── vantagens.css
│   │   └── perguntas.css
│   ├── contato/
│   │   ├── contato.css
│   │   └── lojas.css
│   ├── orcamento/
│   │   └── orcamento.css
│   └── termos/
│       └── termos.css
│
├── js/
│   ├── script.js            # Lógica principal do site
│   └── simple-anime.js      # Plugin de animações de entrada
│
└── img/
    ├── bikcraft.svg         # Logo principal
    ├── bicicleta/           # Galeria das bicicletas individuais
    ├── bicicletas/          # Thumbnails do catálogo
    ├── fotos/               # Imagens de seções (tecnologia, etc.)
    ├── icones/              # Ícones SVG de características
    ├── lojas/               # Mapas das lojas físicas
    ├── parceiros/           # Logos dos parceiros
    ├── redes/               # Ícones de redes sociais
    └── dec/                 # Elementos decorativos SVG
```

---

## Páginas

### `index.html` — Home
- Hero com chamada principal e imagem destacada
- Grade com os 3 modelos de bicicleta e preços
- Seção de tecnologia (motor elétrico, rastreador GPS, fibra de carbono)
- Parceiros (8 empresas)
- Depoimento de cliente
- Chamada para os planos de seguro

### `bicicletas.html` — Catálogo
- Lista as 3 bicicletas com especificações técnicas resumidas
- Cada item exibe imagem, preço, descrição e ícones de recursos
- Links para as páginas individuais

### `bicicletas/magic.html` · `nimbus.html` · `nebula.html` — Produto
- Galeria de 3 fotos com interatividade (clique em thumbnail reordena)
- Preço e botão "Comprar Agora" com informações de entrega e estoque
- Seção "Informações" (Motor, Velocidade, Rastreador, Fibra de Carbono)
- Ficha técnica completa (peso, dimensões, marchas, tamanho da roda)
- Links para os outros modelos
- Chamada para o seguro

### `orcamento.html` — Orçamento
- Seleção do tipo: **Bikcraft** (bicicleta) ou **Seguro**
- Ao selecionar Bikcraft: exibe os 3 modelos com detalhes
- Ao selecionar Seguro: exibe os planos Prata e Ouro
- Formulário de dados pessoais (nome, sobrenome, CPF, e-mail)
- Formulário de entrega (CEP, logradouro, número, bairro, cidade, estado)
- Suporte a pré-seleção via URL params: `?tipo=seguro&produto=ouro`

### `seguros.html` — Seguros
- Detalhamento dos planos Prata e Ouro com lista de benefícios
- 6 vantagens com ícones (Reparo Elétrico, Carbono, Sustentável, Recuperação, Segurança, Rapidez)
- FAQ em accordion (pagamento, contato, descontos, garantia, parcelamento, trocas)

### `contato.html` — Contato
- Dados da loja online (endereço, e-mails, telefone, redes sociais)
- Formulário de contato (nome, telefone, e-mail, mensagem)
- Duas lojas físicas (Rio de Janeiro e São Paulo) com mapa, endereço e horário

### `termos.html` — Termos e Condições
- Política de Estorno
- Conta do Usuário
- Seguro BikCraft

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura de todas as páginas |
| CSS3 (Custom Properties, Grid, Flexbox) | Layout e estilização |
| JavaScript Vanilla (ES6+) | Interatividade |
| Google Fonts | Poppins, Roboto, Merriweather |
| SVG | Logo, ícones e decorações |

Nenhum framework CSS (Bootstrap, Tailwind) ou biblioteca JS (jQuery, React) é utilizado.

---

## Arquitetura CSS

### Sistema de Cores

Definido em `css/utilidades/cores.css` via CSS Custom Properties:

```css
--cor-0:  #ffffff  /* branco */
--cor-1 a --cor-12  /* escala de cinza até preto */
--cor-p1: #ffbb00  /* amarelo ouro — cor primária */
--cor-p2 a --cor-p5  /* variações do ouro */
```

### Sistema Tipográfico

Classes no padrão `font-{família}-{tamanho}` em `css/utilidades/tipografia.css`:

| Classe | Fonte | Peso | Tamanho |
|---|---|---|---|
| `.font-1-xs` | Poppins | 500 | 0.75rem |
| `.font-1-s` | Poppins | 500 | 1rem |
| `.font-1-m` | Poppins | 500 | 1.125rem |
| `.font-1-l` | Poppins | 500 | 1.5rem |
| `.font-1-xl` | Poppins | 600 | 2rem |
| `.font-1-xxl` | Poppins | 600 | 4rem |
| `.font-2-*` | Roboto | 400/500 | equivalente |

### Componentes Globais (`componentes.css`)

- **`.container`** — max-width 1200px, centralizado
- **`.botao`** — gradiente ouro, com variantes `.secundario` e `.seta`
- **`.link`** — sublinhado animado, cor ouro
- **`.titulo`** — cabeçalho de seção com decoração SVG

### Organização por Página

Cada página tem sua própria pasta em `css/` com arquivos de seção separados, todos importados por `style.css` na ordem correta.

---

## JavaScript

### `script.js`

**1. Pré-seleção do Formulário de Orçamento**
Lê os parâmetros da URL (`?tipo=...&produto=...`) e marca os radio buttons correspondentes ao carregar a página.

**2. Accordion de Perguntas Frequentes**
Ao clicar em uma pergunta, adiciona/remove a classe `ativa` no elemento pai para exibir a resposta.

**3. Link Ativo no Menu**
Compara a URL atual com os `href` dos links do header e aplica a classe `ativo` ao link correspondente.

**4. Galeria Interativa de Bicicletas**
Ao clicar em uma imagem secundária (em telas ≥ 1000px), ela é movida para o início da galeria com `prepend`, tornando-se a imagem principal.

**5. Inicialização de Animações**
Verifica se `window.SimpleAnime` está disponível e inicializa o plugin de animações.

### `simple-anime.js`

Plugin leve para animações de entrada baseadas em atributo `data-anime`:

- Seleciona todos os elementos com `[data-anime]`
- Aplica a classe `anime` após o delay em milissegundos definido no atributo
- Suporta os efeitos `fadeInDown` e `fadeInLeft` via transformações CSS

**Uso no HTML:**
```html
<div data-anime="400">...</div>
```

---

## Responsividade

O layout adapta em três breakpoints:

| Breakpoint | Alvo | Mudanças principais |
|---|---|---|
| `max-width: 1200px` | Telas médias | Ajustes de padding e grid |
| `max-width: 800px` | Tablets | Grid 2 col → 1 col, fontes menores |
| `max-width: 600px` | Mobile | Layout vertical completo, elementos simplificados |

---

## Como Executar

**Opção 1 — Abrir diretamente:**
```
Clique duas vezes em index.html
```

**Opção 2 — Servidor local com VS Code (Live Server):**
1. Instale a extensão **Live Server**
2. Clique com botão direito em `index.html`
3. Selecione **"Open with Live Server"**

**Opção 3 — Servidor local com Python:**
```bash
# Python 3
python -m http.server 5500

# Acesse: http://localhost:5500
```

**Opção 4 — Servidor local com Node.js:**
```bash
npx serve .

# Acesse: http://localhost:3000
```

---

## Licença

Projeto desenvolvido para fins educacionais.
