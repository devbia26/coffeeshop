
# Cats, Coffee & Books

Landing page de uma cafeteria com navegação em âncoras, carrosséis de fotos e cardápio em três categorias.

## Visão geral

Projeto estático em **HTML**, **CSS** e **JavaScript** (sem build nem dependências). A página inclui cabeçalho com menu responsivo, hero com carrossel, seções Sobre, Cardápio e Galeria, botão “voltar ao topo” e rolagem suave entre seções.

## Funcionalidades

- **Menu fixo (sticky)** no topo ao rolar a página
- **Navegação interna** pelos links do menu (`#home`, `#sobre`, `#cardapio`, `#galeria`) sem recarregar a página
- **Carrossel no hero** com fotos, indicadores (bolinhas), botões anterior/próxima e troca automática
- **Carrossel na galeria** com o mesmo padrão de interação
- **Cardápio** em grid com três colunas (Bebidas, Salgados, Doces) e efeito de destaque ao passar o mouse
- **Botão com seta** para voltar ao topo (aparece após rolar um pouco)
- **Fallback de imagens** no JS: tenta extensões e pastas alternativas (`images` / `imagem`) quando uma imagem não carrega

## Estrutura de arquivos

```
bookscaffe/
├── index.html          # Estrutura da página e seções
├── style.css           # Estilos e layout responsivo
├── mobile-navbar.js    # Menu, carrosséis, voltar ao topo, fallback de imagens
├── README.md           # Este arquivo
├── images/             # Logo, slides do hero e outras imagens (recomendado)
└── imagem/             # Fotos da galeria (conforme referências no HTML)
```

> As pastas `images/` e `imagem/` devem existir no mesmo nível dos arquivos HTML/CSS/JS, com os arquivos referenciados em `index.html` (nomes e extensões devem coincidir ou o script de fallback tentará variações comuns).

## Como executar

1. Clone ou copie a pasta do projeto.
2. Abra `index.html` no navegador (duplo clique ou arrastar o arquivo para o Chrome, Edge, Firefox, etc.).

Para desenvolvimento com recarregamento automático, use a extensão **Live Server** no VS Code/Cursor e abra a raiz do projeto.

## Requisitos

- Navegador moderno com suporte a ES6 (JavaScript atual).
- Nenhuma instalação de Node ou pacotes é necessária.

## Personalização rápida

- **Cores e tipografia:** edite `style.css`.
- **Textos e ordem das seções:** edite `index.html`.
- **Tempo do carrossel:** em `mobile-navbar.js`, o parâmetro `intervalMs` nas chamadas `initSlider` (valor em milissegundos).
- **Largura máxima do conteúdo:** regra `max-width` em `.content-section` e, se existir, `#cardapio.content-section`.

## Licença

Uso pessoal ou do autor do projeto; ajuste esta seção se for publicar com uma licença específica.
