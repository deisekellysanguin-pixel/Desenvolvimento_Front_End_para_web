# Projeto Mulheres + Fortes

Este é um projeto de front-end para um site institucional fictício da ONG "Mulheres + Fortes", dedicada ao combate à violência doméstica e ao apoio a mulheres sobreviventes. O site foi desenvolvido com foco em acessibilidade, responsividade e interatividade, utilizando tecnologias web modernas sem o uso de frameworks externos.

## ✨ Funcionalidades Principais

O site é composto por três páginas principais e diversas funcionalidades interativas:

- **Responsividade Completa:** Layout totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Menu Mobile:** Menu hambúrguer funcional para uma navegação fluida em telas menores.
- **Tema Escuro (Dark Mode):** Um alternador de tema que salva a preferência do usuário no `localStorage` para visitas futuras.
- **Chatbot Interativo:** Um assistente virtual simples, acessível em todas as páginas, programado para responder a perguntas frequentes sobre projetos, voluntariado e contatos de emergência.
- **Formulário de Cadastro Avançado:**
  - Validação de campos nativa do HTML5.
  - Máscaras de input em JavaScript para campos como CPF, Telefone e CEP, melhorando a experiência do usuário.
  - Mensagem de sucesso dinâmica após o envio.
- **Funcionalidade de Doação PIX:** Na página de projetos, há uma seção para doações com um botão que exibe e permite copiar uma chave PIX de forma segura.
- **Foco em Acessibilidade (a11y):**
  - Uso de tags HTML semânticas (`<header>`, `<main>`, `<section>`, `<nav>`, etc.).
  - Atributos ARIA para componentes dinâmicos como o menu mobile e o chatbot.
  - Indicadores de foco visíveis (`focus-visible`) para facilitar a navegação via teclado.
- **Animações e Transições CSS:** Efeitos sutis em botões, cards e outros elementos para criar uma experiência de usuário mais agradável e moderna.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização moderna com:
  - **Variáveis CSS:** Para um sistema de design consistente (cores, fontes, espaçamentos).
  - **Flexbox e Grid Layout:** Para a construção de layouts complexos e responsivos.
  - **Media Queries:** Para garantir a adaptação a diferentes tamanhos de tela.
  - **Animações (`@keyframes`) e Transições:** Para interatividade visual.
- **JavaScript (Vanilla JS / ES6+):** Utilizado para todas as funcionalidades dinâmicas, sem dependência de bibliotecas ou frameworks.

## 📂 Estrutura do Projeto

```
/
├── index.html          # Página Inicial (Home)
├── projetos.html       # Página de Projetos e Doações
├── cadastro.html       # Página de Cadastro de Voluntários
├── README.md           # Este arquivo
├── css/
│   └── style.css       # Folha de estilos principal
├── js/
│   ├── main.js         # Código JavaScript principal (comentado)
│   └── minified.js     # Versão minificada do JS (exemplo)
└── imagens/
    ├── ...             # Imagens utilizadas no site (escola.jpg, unidas.jpg, etc.)
```

## ⚙️ Como Executar o Projeto

Como este é um projeto de front-end estático, você não precisa de um servidor complexo para executá-lo.

1. **Clone o repositório (ou baixe os arquivos):**
   ```sh
   git clone https://github.com/seu-usuario/mulheres-mais-fortes.git
   ```

2. **Navegue até a pasta do projeto:**
   ```sh
   cd mulheres-mais-fortes
   ```

3. **Abra o arquivo `index.html` no seu navegador de preferência.**
   - Você pode simplesmente dar um duplo clique no arquivo `index.html` no seu explorador de arquivos.
   - Ou, se você utiliza o VS Code com a extensão "Live Server", pode clicar com o botão direito no arquivo `index.html` e selecionar "Open with Live Server".

## 👩‍💻 Autora

**Deise Kelly Sanguin**

---

*Este projeto foi criado como parte de um portfólio e não representa uma organização real.*
