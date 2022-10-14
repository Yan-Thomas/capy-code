---
id: cl8m9zhv700713otadzf94gug
---

# Fundamentos do CSS

CSS é o acrônimo de Cascading Style Sheets (em português, "Folhas de Estilo em Cascata"), sendo a tecnologia responsável pela estilização de páginas web.

Você pode tanto adicionar a estilização do seu site diretamente no HTML, seja através do atributo `style` ou como conteúdo do elemento `<style></style>`{lang="html"}, ou utilizar-se de um link externo para um arquivo `.css`, como mostramos no código de exemplo ao lado.

Para modificar algo no CSS, você precisa criar uma regra, ou seja, um conjunto de seletor, propriedades e valores, uma regra no CSS se parecerá com isso:

```css
seletor {
    propriedade1: valor1;
    propriedade2: valor2;
}
```

## Seletores

Primeiramente, você precisa selecionar o que precisa ser modificado numa página, seletores podem se referir a elementos, como no exemplo onde selecionamos diretamente `button` ou classes, atributos, dentre outras das diversas opções.

Alguns seletores notáveis:

- `*`{lang="css"} seleciona todos os elementos da página
- `.nome-da-minha-classe`{lang="css"} seleciona uma classe específica
- `#nome-do-meu-id`{lang="css"} seleciona um ID específico

## Propriedades e Valores

Dentro do bloco da regra, você define as propriedades, que podem variar dependendo do elemento selecionado e recebem diferentes valores

Algumas propriedades notáveis são:

- `background-color`{lang="css"} modifica a cor de fundo de um elemento
- `padding`{lang="css"} adiciona um preenchimento entre o conteúdo de um elemento e sua borda
- `margin`{lang="css"} adiciona um espaçamento entre um elemento e outros ao redor
- `border`{lang="css"} define diversas características da borda de um elemento

No código de exemplo ao lado, existe o arquivo `styles.css`, onde colocamos quantas regras desejarmos aplicar nesta página.