# images/

Imagens do portfólio. Para trocar uma, mantenha o mesmo nome de arquivo e o site continua
funcionando sem mexer no código. Se mudar a extensão, atualize o campo `image` do projeto
em `script.js`.

Telas com fotos vão melhor em JPEG (PNG fica várias vezes maior); capturas de interface,
com texto e áreas chapadas, vão melhor em PNG.

| Arquivo             | Onde aparece                         | Tamanho sugerido    |
| ------------------- | ------------------------------------ | ------------------- |
| `memoria-viva.jpg`  | Card do projeto Memória Viva Escolar | 1200×750 px (16:10) |
| `sono360.png`       | Card do projeto Sono360              | 1200×750 px (16:10) |
| `cnsaude.png`       | Card do projeto CNSaúde              | 1200×750 px (16:10) |
| `hemodoctor.png`    | Card do projeto HemoDoctor           | 1200×750 px (16:10) |

Dicas:

- Exporte em PNG ou WebP com no máximo ~300 KB para a página continuar leve.
- O card recorta a imagem (`object-fit: cover`), então deixe o conteúdo importante no centro.
- Ao adicionar um projeto novo, coloque a imagem aqui e aponte o campo `image` no array
  `projects` de `script.js`.
