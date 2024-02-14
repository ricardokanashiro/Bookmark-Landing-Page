# Desafio Front-end - Bookmark Landing Page

## Sumário:

- [Visão Geral](#visão-geral)
  - [Sobre o Desafio](#sobre-o-desafio)
  - [Links](#links)
- [Sobre o Processo](#sobre-o-processo)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [O que preciso focar mais](#o-que-preciso-focar-mais)

## Visão Geral

<img src="./images/Full Screen Design.png" />

### Sobre o Desafio

O desafio se baseia em desenvolver uma landing page, também conhecidas como páginas de aterrissagem, isto é, páginas onde geralmente traz um formulário para o visitante colocar seus dados e, em troca, ele recebe um e-book, uma consultoria, mais informações sobre o produto ou serviço ou, até mesmo, concretiza uma compra; para um serviço de favoritar sites chamado Bookmark.

Os usuários devem ser capazes de:

- Ver o layout ideal do site dependendo do tamanho da tela do dispositivo;
- Ver os hover states para todos os elementos interativos na página;
- Receber uma mensagem de erro quando o formulário da newsletter for enviado se:
    - O campo de entrada está vazio;
    - O endereço de e-mail não está formatado corretamente;

### Links

- <p>Challenge page profile:</p> 
<a href="https://www.frontendmentor.io/solutions/tip-calculator-html-scss-vanilla-js-5XrKpCnNis">
    <img src="https://img.shields.io/badge/Front_end_Mentor-000?style=for-the-badge&logo=frontendmentor" />
</a>

- <p>Page Live:</p>
<a href="https://ricardokanashiro.github.io/Bookmark-Landing-Page/">
    <img src="https://img.shields.io/badge/Github_Pages-000?style=for-the-badge&logo=github" />
</a>


## Sobre o Processo

Confira nessa sessão quais foram as tecnologias e conceitos mais utilizados nesse desafio:

### Tecnologias utilizadas


<img src="https://img.shields.io/badge/HTML-000?style=for-the-badge&logo=html5&logoColor=E34F26" /> &nbsp;
<img src="https://img.shields.io/badge/CSS-000?style=for-the-badge&logo=css3&logoColor=1572B6" /> &nbsp;
<img src="https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> &nbsp;
<img src="https://img.shields.io/badge/SCSS-000?style=for-the-badge&logo=sass&logoColor=CC6699" /> &nbsp;

- <b>HTML5</b>: linguagem de marcação de hypertexto utilizada para construir o conteúdo da página.
- <b>CSS3</b>: linguagem de estilização utilizado para estilizar os componentes da página.
- <b>Javascript</b>: linguagem de programação de scripts, utilizado para trazer dinamismo e funções para a página.
- <b>SCSS</b>: pré-procesador css utilizado para facilitar a padronização e estilização de componentes.

### O que eu aprendi?

  - Nesse desafio eu pratiquei o desenvolvimento de landing pages, que são páginas mais extensas por conta da divulgação do produto e pelos recusos de converter usuários. Para facilitar esse trabalho, utilizo um abordagem semelhante à biblioteca javascript React, onde as sessões da página, como "Cabeçalho", "Produtos", "Perguntas", "Rodapé" são divididas em componentes, através de folhas de estilo separadas para auxiliar na manutenção e organização do código: 

```css

/* ./components/header.css */

header {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;
    color: white;
}

header button {
    color: blue;
    background-color: white;
    cursor: pointer;
    padding: 10px 20px;
}

header h1 {
    color: black;
    font-size: 40px;
    font-weight: bold;
}

```

```css

/* ./components/produtos.css */

.produtos {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;
    color: white;
}

.produtos button {
    color: blue;
    background-color: white;
    cursor: pointer;
    padding: 10px 20px;
}

.produtos h2 {
    color: black;
    font-size: 40px;
    font-weight: bold;
}
```

- Também se tratando de uma página extensa, pratiquei também a reutilização e padronização de botões, ou seja, ao invés de criar uma estilização de botão para cada componente específico, fiz apenas uma estilização global e modificava especificamente quando necessário:

```css
    /* ./main.css */

    .botao-primario {
        color: white;
        background-color: blue;
        border: 1px solid red;
        font-size: 12px;
    }

    /* ./produtos.css */

    button.botao-primario {
        background-color: red;
    }
```

- Também pratiquei sobre validação de inputs, e conheci um novo evento javascript que ainda não conhecia, o "invalid", que é desparado quando o conteúdo de um input é inválido de alguma:

```javascript
    const input = document.getElementById('#input');

    function triggerError() {
        console.log('Deu erro');
    }

    input.onInvalid = () => triggerError();
```

### O que preciso focar mais?

Fazendo esse desafio percebi que tenho que melhorar quanto a padronização de elementos na página e a reutilização de estilos para os mesmos, deixando o código mais organizado, leve e de mais fácil manutenção. Além disso, quero melhorar a estruturação dos componentes, deixando os arquivos de cada um mais organizado e coerentes.
