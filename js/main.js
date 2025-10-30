/**
 * --------------------------------------
 * ARQUIVO JAVASCRIPT PRINCIPAL
 * --------------------------------------
 * Este arquivo contém todas as funcionalidades JavaScript do site.
 * O atributo 'defer' na tag <script> do HTML garante que este código
 * só roda após o DOM (a estrutura da página) estar completamente carregado.
 */

/**
 * --------------------------------------
 * FUNCIONALIDADE DO MENU MOBILE
 * --------------------------------------
 * Controla a abertura e fechamento do menu de navegação em dispositivos móveis.
 */
function initMobileMenu() {
    const btnMobile = document.getElementById('btn-mobile');
    const navMenu = document.getElementById('menu-principal');

    if (!btnMobile || !navMenu) return; // Não executa se os elementos não existirem na página

    const toggleMenu = (event) => {
        // Previne o comportamento padrão de eventos de toque, como zoom.
        if (event.type === 'touchstart') event.preventDefault();
        
        btnMobile.classList.toggle('active');
        navMenu.classList.toggle('active');

        const isMenuActive = navMenu.classList.contains('active');
        btnMobile.setAttribute('aria-expanded', isMenuActive);
        btnMobile.setAttribute('aria-label', isMenuActive ? 'Fechar menu' : 'Abrir menu');
    };

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}

/**
 * --------------------------------------
 * FUNCIONALIDADE DO CHATBOT (Todas as páginas)
 * --------------------------------------
 * Controla a visibilidade e a interação básica do chatbot.
 */
function initChatbot() {
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');

    if (!chatbotToggleBtn || !chatbotWindow || !chatbotCloseBtn) return;

    // Abre o chatbot
    chatbotToggleBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('hidden'); // Permite que a janela seja visível
        chatbotToggleBtn.classList.add('hidden'); // Esconde o botão de abrir usando uma classe
    });

    // Fecha o chatbot
    chatbotCloseBtn.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');      // Adiciona a classe para iniciar a animação de fechar
        chatbotToggleBtn.classList.remove('hidden');// Mostra o botão de abrir novamente
    });

    if (!chatbotSendBtn || !chatbotInput || !chatbotMessages) return;

    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);
        messageElement.textContent = text;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const getBotResponse = (userText) => {
        const text = userText.toLowerCase().trim();
        let botResponse = "";

        // Verifica se o usuário digitou uma opção do menu
        switch (text) {
            case '1':
                botResponse = "Nossos principais projetos são: Escola da Autonomia, Rede de Acolhimento e Abrigos Seguros. Você pode saber mais na nossa página de Projetos.";
                break;
            case '2':
                botResponse = "Ficamos felizes com seu interesse! Você pode se cadastrar como voluntária na página Quero Ajudar'. O link está no menu principal do site.";
                break;
            case '3':
                botResponse = "Para ajuda imediata, ligue para 180 (Central de Atendimento à Mulher). Para falar conosco, envie um e-mail para: contato@mulheresfortes.org.br ou ligue para (11) 98765-4321.";
                break;
            default:
                // Se não for uma opção do menu, usa a lógica de palavras-chave
                if (text.includes('projeto')) {
                    botResponse = "Nossos principais projetos são: Escola da Autonomia, Rede de Acolhimento e Abrigos Seguros. Você pode saber mais na nossa página de Projetos.";
                } else if (text.includes('voluntari') || text.includes('ajudar')) { // Pega "voluntário", "voluntária", "voluntariado"
                    botResponse = "Ficamos felizes com seu interesse! Você pode se cadastrar como voluntária na página 'Quero Ajudar'. O link está no menu principal do site.";
                } else if (text.includes('ajuda') || text.includes('contato') || text.includes('urgente')) {
                    botResponse = "Para ajuda imediata, ligue para 180 (Central de Atendimento à Mulher). Para falar conosco, envie um e-mail para contato@mulheresfortes.org.br ou ligue para (11) 98765-4321.";
                } else {
                    botResponse = "Desculpe, não entendi. Por favor, escolha uma das opções do menu ou reformule sua pergunta. Se esta for uma emergência, ligue para 180.";
                }
        }

        addMessage(botResponse, 'bot');
    };

    const handleSend = () => {
        const userText = chatbotInput.value.trim();
        if (userText) {
            addMessage(userText, 'user');
            chatbotInput.value = '';
            setTimeout(() => {
                getBotResponse(userText);
            }, 1000);
        }
    };

    chatbotSendBtn.addEventListener('click', handleSend);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    const showMenu = () => {
        const menuText = `Como posso ajudar hoje?
1. Saber mais sobre os projetos;
2. Como ser voluntário(a);
3. Contatos e ajuda urgente.`;
        addMessage(menuText, 'bot');
    };

    // Mensagem inicial do bot
    setTimeout(() => {
        addMessage("Olá! Sou a assistente virtual da Mulheres + Fortes.", 'bot');
        setTimeout(showMenu, 500); // Mostra o menu logo após a saudação
    }, 500);
}

/**
 * FUNCIONALIDADE DA SEÇÃO DE DOAÇÃO PIX (Página projetos.html)
 * --------------------------------------
 * Controla a exibição e a cópia da chave PIX.
 */
function initPixCopy() {
  const showPixBtn = document.getElementById("show-pix-key-btn");
  const pixDetails = document.getElementById("pix-key-details");
  const copyPixBtn = document.getElementById("copy-pix-btn");
  const pixKeyInput = document.getElementById("pix-key");
  const copyFeedback = document.getElementById("copy-feedback");

  if (!showPixBtn || !pixDetails) return; // Sai se não estiver na página de projetos

  showPixBtn.addEventListener("click", () => {
    pixDetails.hidden = !pixDetails.hidden;
  });

  if (copyPixBtn && pixKeyInput && copyFeedback) {
    copyPixBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(pixKeyInput.value).then(() => {
        copyFeedback.hidden = false;
        setTimeout(() => {
          copyFeedback.hidden = true;
        }, 2000);
      }).catch(err => {
        console.error("Falha ao copiar a chave PIX: ", err);
      });
    });
  }
}

/**
 * --------------------------------------
 * FUNCIONALIDADE DO FORMULÁRIO DE CADASTRO (Página cadastro.html)
 * --------------------------------------
 * Controla a validação, o envio e a exibição da mensagem de sucesso do formulário.
 */
function initForm() {
    const form = document.getElementById('cadastro-form');
    const successMessage = document.getElementById('success-message');

    if (!form || !successMessage) return; // Não executa se não estiver na página de cadastro

    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    // Máscara para o campo CPF
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o terceiro dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o sexto dígito
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen antes dos dois últimos dígitos
            e.target.value = value;
        });
    }

    // Máscara para o campo Telefone/WhatsApp
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
            
            // Adapta a máscara para celular (9 dígitos) ou telefone fixo (8 dígitos)
            if (value.length > 13) { // Se for celular com 9 dígitos no corpo
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            } else { // Se for telefone fixo
                value = value.replace(/(\d{4})(\d)/, '$1-$2');
            }

            // Remove o hífen se o usuário apagar o número que o gerou
            if (value.length === 14 && e.inputType === 'deleteContentBackward') {
                 value = value.replace('-', '');
            }
            e.target.value = value;
        });
    }

    // Máscara para o campo CEP
    if (cepInput) {
        cepInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca o hífen depois do quinto dígito
            e.target.value = value;
        });
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação simples para garantir que o formulário é válido
        if (form.checkValidity()) {
            // Esconde o formulário
            form.style.display = 'none';
            
            // Mostra a mensagem de sucesso
            successMessage.hidden = false;
            successMessage.style.display = 'block';

            // Opcional: Rola a página para a mensagem de sucesso para garantir visibilidade
            successMessage.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Se o navegador suportar, ele mostrará mensagens de erro nos campos inválidos.
            // Você pode adicionar um feedback customizado aqui se desejar.
            console.log("Formulário inválido. Por favor, corrija os campos marcados.");
        }
    });
}

/**
 * --------------------------------------
 * INICIALIZAÇÃO DOS MÓDULOS
 * --------------------------------------
 * Chama todas as funções para ativar as funcionalidades do site.
 */
initMobileMenu(); // Ativa o menu mobile em todas as páginas.
initChatbot();    // Ativa o chatbot em todas as páginas.
initForm();       // Ativa o formulário (só executa na página de cadastro).
initPixCopy();    // Ativa a funcionalidade PIX (só executa na página de projetos).
