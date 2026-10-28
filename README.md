# Portfólio — Leonardo Moretti

Site pessoal em HTML, CSS e JavaScript puros, sem framework e sem build. Pensado para
rodar direto no GitHub Pages.

```
index.html     estrutura da página
style.css      tema escuro, responsivo (mobile first)
script.js      textos PT/EN, array de projetos, fade ao rolar
images/        imagens dos projetos
curriculo.pdf  (adicionar) currículo baixado pelo botão do hero
```

## Rodar localmente

Abrir `index.html` no navegador já funciona. Para ficar igual à produção:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Publicar no GitHub Pages

1. Suba os arquivos na raiz do repositório (branch `main`).
2. **Settings → Pages → Source:** `Deploy from a branch`, branch `main`, pasta `/ (root)`.
3. O site sai em `https://leonardoma07.github.io/<nome-do-repo>/`.

## O que ainda falta preencher

- `curriculo.pdf` na raiz do projeto (o botão "Baixar currículo" aponta para ele).
- Substituir `images/memoria-viva.png` por um print real do projeto.
- Os links do card em `script.js` → `projects[0].links` (`code`, `demo`, `docs`).
  Campo vazio não gera botão.

## Adicionar um projeto

Copie um bloco no array `projects` de `script.js`:

```js
{
  image: "images/novo-projeto.png",
  alt: { pt: "Descrição da imagem", en: "Image description" },
  title: "Nome do projeto",
  description: { pt: "...", en: "..." },
  tags: ["Python", "AWS"],
  links: { code: "https://...", demo: "", docs: "" }
}
```

Com um projeto a seção mostra um card de destaque horizontal; a partir de dois ela vira
grid automaticamente.

## Editar textos

Tudo vive no objeto `translations` em `script.js` (`pt` e `en`). O HTML só marca o lugar
com `data-i18n="chave"`. Para um texto novo: adicione a chave nas duas línguas e use
`data-i18n` no elemento (ou `data-i18n-aria-label` para rótulos de acessibilidade).
