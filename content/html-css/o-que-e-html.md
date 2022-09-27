---
id: cl8j6qgxb0087lotaj6m2qrd0
project: "html-inicial-capy-code"
---


# O que é HTML?

HTML ou Hyper-Text Markup Language ("Linguagem de Marcação de Hipertexto" em português) é uma linguagem de marcação que define a estrutura de uma página web.

### Estrutura de um documento HTML

A estrutura base de uma página HTML vai se parecer com isso:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- tags meta irão aqui! -->
  </head>
  <body>
    <h1>Um título no HTML</h1>
    <p>Um parágrafo no HTML</p>
  </body>
</html>
```

Como você pode ver, um documento HTML é composto de "caixas" de `<abertura>` e `</fechamento>`. Nós chamamos esse conjunto de um elemento, e cada um deles tem um significado e função única. Aqui está uma pequena lista do que cada um dos elementos no código de exemplo acima representa:

- `<!DOCTYPE html>` explicita de que o arquivo se trata de uma página HTML convencional.
- `<head>` contém informações utilizadas por navegadores e sistemas de busca, como o título e ícone da página, também serve para vincular a página a outros recursos como arquivos CSS e JavaScript.
- `<body>` envolve todo o, de fato, conteúdo da sua página.
- `<h1>` os elementos de `<h1>` a `<h6>` representam um título. Sua ordem e uso é importante por vários motivos que vamos nos aprofundar em seguida.
- `<p>` representa um parágrafo de texto.
