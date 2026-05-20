/**
 * O PARADOXO DE ANA - LÓGICA E MÁQUINA DE ESTADOS DO JOGO
 * Desenvolvedor Front-end Sênior
 */

// ==========================================================================
// ROTEIRO E BANCO DE DADOS DAS CENAS DO JOGO
// ==========================================================================
const scriptData = [
    // ----------------------------------------------------------------------
    // ESTADO 2: Prólogo - A Queda (Índices 0 - 2)
    // ----------------------------------------------------------------------
    {
        state: 2,
        bg: 'assets/img/bg_prologo.png',
        speaker: 'Brenda',
        text: 'Ugh... nossa cabeça... Onde nós estamos? Isso não se parece com o IFSC...',
        charLeft: 'brenda',
        charRight: 'none',
        activeSpeaker: 'left',
        type: 'dialogue'
    },
    {
        state: 2,
        bg: 'assets/img/bg_prologo.png',
        speaker: 'Professora Ana Vilã',
        text: 'Vocês acharam que poderiam ignorar a geometria? Bem-vindos ao Mundo Retilíneo!',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 2,
        bg: 'assets/img/bg_prologo.png',
        speaker: 'Professora Ana Vilã',
        text: 'Para voltar ao mundo real, vocês terão que me provar que dominam as retas. Preparem-se para o primeiro portão!',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },

    // ----------------------------------------------------------------------
    // ESTADO 3: Fase de Conceito 1 (O Ensino das Paralelas)
    // ----------------------------------------------------------------------
    {
        state: 3,
        bg: 'assets/img/bg_conceito1.png',
        speaker: 'Professora Ana Vilã',
        text: 'Antes de testar vocês, devem compreender a base da realidade. Duas retas são paralelas se estiverem no mesmo plano e nunca compartilharem um único ponto.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 3,
        bg: 'assets/img/bg_conceito1.png',
        speaker: 'Professora Ana Vilã',
        text: "Mas o que acontece quando uma terceira reta, chamada de 'Transversal', corta essas duas paralelas? Cria-se magia angular.",
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 3,
        bg: 'assets/img/bg_conceito1.png',
        speaker: 'Professora Ana Vilã',
        text: 'Os ângulos que estão do mesmo lado da transversal e na mesma posição chamam-se Ângulos Correspondentes. Eles são SEMPRE iguais.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 3,
        bg: 'assets/img/bg_conceito1.png',
        speaker: 'Professora Ana Vilã',
        text: 'Além disso, temos os Ângulos Alternos Internos. Estão em lados opostos da transversal, na zona interna. Eles também são perfeitamente iguais!',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },

    // ----------------------------------------------------------------------
    // ESTADO 4: Ato 1 - O Desafio das Paralelas (Cálculo)
    // ----------------------------------------------------------------------
    {
        state: 4,
        bg: 'assets/img/bg_ato1.png',
        speaker: 'Professora Ana Vilã',
        text: 'Vamos aplicar esta lei! Os ângulos alternos internos deste cruzamento são descritos por 5x - 20° e 3x + 40°.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 4,
        bg: 'assets/img/bg_ato1.png',
        speaker: 'Professora Ana Vilã',
        text: 'Sabendo que eles são iguais, qual é o valor de x e a medida exata deste ângulo?',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'question',
        options: {
            A: { text: 'x = 20, Ângulo = 80°', isCorrect: false },
            B: { text: 'x = 30, Ângulo = 130°', isCorrect: true },
            C: { text: 'x = 40, Ângulo = 150°', isCorrect: false }
        }
    },

    // ----------------------------------------------------------------------
    // ESTADO 5: Fase de Conceito 2 (O Choque das Concorrentes)
    // ----------------------------------------------------------------------
    {
        state: 5,
        bg: 'assets/img/bg_conceito2.png',
        speaker: 'Professora Ana Vilã',
        text: 'Passaram... Mas o universo nem sempre é paralelo. Às vezes, os caminhos colidem em um único ponto: as Retas Concorrentes.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 5,
        bg: 'assets/img/bg_conceito2.png',
        speaker: 'Professora Ana Vilã',
        text: "Quando duas retas se cruzam, formam quatro ângulos. Os que estão de frente um para o outro chamam-se 'Opostos pelo Vértice' (OPV). Eles são como espelhos, têm exatamente a mesma medida.",
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },

    // ----------------------------------------------------------------------
    // ESTADO 6: Ato 2 - O Ponto de Impacto (Cálculo)
    // ----------------------------------------------------------------------
    {
        state: 6,
        bg: 'assets/img/bg_ato2.png',
        speaker: 'Professora Ana Vilã',
        text: 'A geometria analítica mostra onde o choque acontece. A Reta da Verdade obedece a y = 2x + 1. A Reta da Ilusão obedece a y = -x + 4.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 6,
        bg: 'assets/img/bg_ato2.png',
        speaker: 'Professora Ana Vilã',
        text: 'As duas são concorrentes. Em qual coordenada (x, y) exata do plano elas colidem?',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'question',
        options: {
            A: { text: '(2, 5)', isCorrect: false },
            B: { text: '(1, 3)', isCorrect: true },
            C: { text: '(-1, 5)', isCorrect: false }
        }
    },

    // ----------------------------------------------------------------------
    // ESTADO 7: Ato 3 - A Perfeição Perpendicular
    // ----------------------------------------------------------------------
    {
        state: 7,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'As concorrentes perpendiculares são a elite! Elas cruzam-se formando exatamente quatro ângulos retos de 90°.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 7,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'A lei secreta para isto acontecer é multiplicar os seus coeficientes angulares (m1 * m2) e o resultado tem de ser obrigatoriamente -1.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue'
    },
    {
        state: 7,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'Se a minha reta tem a equação y = 1/2x + 3, qual deve ser a equação da reta de vocês para ser perpendicular e passar na origem (0,0)?',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'question',
        options: {
            A: { text: 'y = 2x', isCorrect: false },
            B: { text: 'y = -1/2x', isCorrect: false },
            C: { text: 'y = -2x', isCorrect: true }
        }
    },

    // ----------------------------------------------------------------------
    // ESTADO 8: FINAL BOSS - O Paradoxo do ENEM
    // ----------------------------------------------------------------------
    {
        state: 8,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'Tolos! Pensaram que as continhas simples seriam o fim? O mundo real é muito mais complexo. Preparem-se para o teste nacional!',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue',
        bossEffect: true,
        shakeEffect: true
    },
    {
        state: 8,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: '(Adaptação ENEM) Dois engenheiros planejaram duas avenidas retilíneas. A Avenida A segue a equação 2x - y + 3 = 0.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue',
        bossEffect: true,
        shakeEffect: true
    },
    {
        state: 8,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'A Avenida B foi registrada como 4x - 2y - 5 = 0.',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue',
        bossEffect: true,
        shakeEffect: true
    },
    {
        state: 8,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'Analisando apenas as equações, o que o plano afirma sobre a posição destas avenidas?',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'question',
        bossEffect: true,
        shakeEffect: true,
        options: {
            A: { text: 'São perpendiculares e cruzam-se formando 90°.', isCorrect: false },
            B: { text: 'São estritamente paralelas, não haverá cruzamento.', isCorrect: true },
            C: { text: 'São concorrentes oblíquas, cruzando-se em um ponto.', isCorrect: false }
        }
    },
    {
        state: 8,
        bg: 'assets/img/bg_ato3.png',
        speaker: 'Professora Ana Vilã',
        text: 'IMPOSSÍVEL! Vocês isolaram o \'y\' e perceberam que ambas tinham a inclinação igual a 2?! Vocês dominam completamente a geometria...',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue',
        bossEffect: true,
        shakeEffect: true
    },
    {
        state: 8,
        bg: 'assets/img/bg_inicial.jpeg',
        speaker: 'Professora Ana Vilã',
        text: 'O conhecimento destruiu meu domínio. O portal... abriu-se!',
        charLeft: 'brenda',
        charRight: 'ana_vila',
        activeSpeaker: 'right',
        type: 'dialogue',
        bossEffect: false
    },

    // ----------------------------------------------------------------------
    // ESTADO 9: Epílogo e Finalização (Índices 15 - 16)
    // ----------------------------------------------------------------------
    {
        state: 9,
        bg: 'assets/img/bg_inicial.jpeg', // Retorna ao fundo inicial
        speaker: 'Brenda',
        text: 'Em um piscar de olhos, voltamos para a sala...',
        charLeft: 'none',
        charRight: 'none',
        activeSpeaker: 'none',
        type: 'dialogue'
    },
    {
        state: 9,
        bg: 'assets/img/bg_inicial.jpeg',
        speaker: 'Brenda',
        text: 'A Professora Ana me olha do quadro. Eu guardo o celular no bolso imediatamente.',
        charLeft: 'none',
        charRight: 'none',
        activeSpeaker: 'none',
        type: 'dialogue'
    }
];

// ==========================================================================
// ESTADO INTERNO DO JOGO
// ==========================================================================
let gameState = {
    currentState: 0,        // 0: Menu, 1: Vídeo, 2+: Roteiro/Atos
    currentSceneIndex: 0,   // Índice no array scriptData
    isMuted: false,
    isTyping: false,
    typingTimer: null,
    fullTextToType: '',
    bgmStarted: false
};

// Mapeamento de caminhos reais de sprites dos personagens
const charSprites = {
    davi: 'assets/img/char_davi.png',
    brenda: 'assets/img/char_brenda.png',
    ana_vila: 'assets/img/char_ana_vila.png',
    none: ''
};

// ==========================================================================
// REFERÊNCIAS DOS ELEMENTOS DOM
// ==========================================================================
const dom = {
    gameContainer: document.getElementById('gameContainer'),
    bgLayer: document.getElementById('bgLayer'),
    introVideo: document.getElementById('introVideo'),
    bgm: document.getElementById('bgm'),
    
    // Sprites
    charLeft: document.getElementById('charLeft'),
    charRight: document.getElementById('charRight'),
    
    // Telas / Overlays
    menuScreen: document.getElementById('menuScreen'),
    gameOverScreen: document.getElementById('gameOverScreen'),
    finalizationScreen: document.getElementById('finalizationScreen'),
    contentModal: document.getElementById('contentModal'),
    
    // Caixa de diálogo
    dialogueContainer: document.getElementById('dialogueContainer'),
    speakerName: document.getElementById('speakerName'),
    dialogueText: document.getElementById('dialogueText'),
    
    // Botões
    btnIniciar: document.getElementById('btnIniciar'),
    btnConteudo: document.getElementById('btnConteudo'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    btnVolume: document.getElementById('btnVolume'),
    volIcon: document.getElementById('volIcon'),
    
    // Painel de Respostas
    optionsContainer: document.getElementById('optionsContainer'),
    optA: document.getElementById('optA'),
    optB: document.getElementById('optB'),
    optC: document.getElementById('optC'),
    optAText: document.getElementById('optAText'),
    optBText: document.getElementById('optBText'),
    optCText: document.getElementById('optCText'),
    
    // Botões de Recomeço
    btnTentarNovamente: document.getElementById('btnTentarNovamente'),
    btnRecomeçar: document.getElementById('btnRecomeçar')
};

// Configurações do BGM
dom.bgm.volume = 0.2;

// ==========================================================================
// CONTROLES DE ÁUDIO E SOM
// ==========================================================================
function toggleVolume() {
    gameState.isMuted = !gameState.isMuted;
    dom.bgm.muted = gameState.isMuted;
    
    if (gameState.isMuted) {
        dom.volIcon.src = 'assets/img/btn_vol_off.png';
    } else {
        dom.volIcon.src = 'assets/img/btn_vol_on.png';
        // Se a música deve estar tocando e ainda não começou devido a políticas do navegador, toca
        if (gameState.bgmStarted) {
            dom.bgm.play().catch(e => console.log("Áudio bloqueado pelo navegador:", e));
        }
    }
}

function startBGM() {
    if (!gameState.isMuted) {
        dom.bgm.play()
            .then(() => {
                gameState.bgmStarted = true;
                console.log("BGM iniciada com sucesso!");
            })
            .catch(e => {
                console.log("Áudio pendente de interação com o usuário para tocar.", e);
            });
    }
}

// ==========================================================================
// MÁQUINA DE ESCREVER (TYPEWRITER EFFECT)
// ==========================================================================
function typeWriter(text, speed = 25) {
    clearInterval(gameState.typingTimer);
    gameState.isTyping = true;
    gameState.fullTextToType = text;
    dom.dialogueText.innerHTML = '';
    
    let index = 0;
    gameState.typingTimer = setInterval(() => {
        if (index < text.length) {
            dom.dialogueText.innerHTML += text.charAt(index);
            index++;
        } else {
            completeTyping();
        }
    }, speed);
}

function completeTyping() {
    clearInterval(gameState.typingTimer);
    dom.dialogueText.innerHTML = gameState.fullTextToType;
    gameState.isTyping = false;
}

// ==========================================================================
// RENDERIZADOR DE CENAS DA MÁQUINA DE ESTADOS
// ==========================================================================
function renderScene() {
    const scene = scriptData[gameState.currentSceneIndex];
    if (!scene) {
        // Se ultrapassou o script, finaliza o jogo
        showFinalizationScreen();
        return;
    }

    // 1. Atualizar Estado Atual do Jogo
    gameState.currentState = scene.state;

    // 1.5. Aplicar Efeitos do Boss Final (Filtros e Tremor)
    if (scene.bossEffect) {
        dom.gameContainer.classList.add('boss-theme');
    } else {
        dom.gameContainer.classList.remove('boss-theme');
    }

    if (scene.shakeEffect) {
        dom.gameContainer.classList.remove('shake-anim');
        void dom.gameContainer.offsetWidth; // Força reflow no DOM para resetar e disparar a animação
        dom.gameContainer.classList.add('shake-anim');
    } else {
        dom.gameContainer.classList.remove('shake-anim');
    }

    // 2. Atualizar Imagem de Fundo (Backdrop)
    dom.bgLayer.style.backgroundImage = `url('${scene.bg}')`;

    // 3. Gerenciar Exibição e Animação de Sprites
    handleSprites(scene);

    // 4. Exibir Caixa de Diálogo e Processar Texto
    dom.dialogueContainer.classList.remove('hide');
    dom.speakerName.innerText = scene.speaker;
    typeWriter(scene.text);

    // 5. Ocultar Painel de Alternativas se estiver ativo
    dom.optionsContainer.classList.add('hide');

    // 6. Caso seja uma pergunta, preparar as alternativas
    if (scene.type === 'question') {
        // Espera a digitação terminar ou clique de avanço para exibir as perguntas
        // Para uma melhor experiência de jogo, mostramos as alternativas assim que a digitação do enunciado terminar
        const checkInterval = setInterval(() => {
            if (!gameState.isTyping) {
                clearInterval(checkInterval);
                // Exibe as opções apenas se ainda estivermos na mesma cena
                if (gameState.currentSceneIndex === scriptData.indexOf(scene)) {
                    showOptions(scene.options);
                }
            }
        }, 100);
    }
}

// Controla as transições, destaques e trocas de sprites dos personagens
function handleSprites(scene) {
    // Sprite Esquerdo (Davi ou Brenda)
    if (scene.charLeft !== 'none') {
        dom.charLeft.src = charSprites[scene.charLeft];
        dom.charLeft.classList.remove('hide');
        dom.charLeft.classList.add('show');
        
        // Aplica o destaque ao falante ativo
        if (scene.activeSpeaker === 'left') {
            dom.charLeft.classList.add('talking');
            dom.charLeft.classList.remove('listening');
        } else {
            dom.charLeft.classList.remove('talking');
            dom.charLeft.classList.add('listening');
        }
    } else {
        dom.charLeft.classList.add('hide');
        dom.charLeft.classList.remove('show', 'talking', 'listening');
    }

    // Sprite Direito (Ana Vilã)
    if (scene.charRight !== 'none') {
        dom.charRight.src = charSprites[scene.charRight];
        dom.charRight.classList.remove('hide');
        dom.charRight.classList.add('show');
        
        // Aplica o destaque ao falante ativo
        if (scene.activeSpeaker === 'right') {
            dom.charRight.classList.add('talking');
            dom.charRight.classList.remove('listening');
        } else {
            dom.charRight.classList.remove('talking');
            dom.charRight.classList.add('listening');
        }
    } else {
        dom.charRight.classList.add('hide');
        dom.charRight.classList.remove('show', 'talking', 'listening');
    }
}

// Exibe as alternativas de resposta no centro da tela
function showOptions(options) {
    dom.optAText.innerText = options.A.text;
    dom.optBText.innerText = options.B.text;
    dom.optCText.innerText = options.C.text;

    // Desvincula e vincula os eventos de clique corretos de forma limpa
    dom.optA.onclick = () => selectOption(options.A.isCorrect);
    dom.optB.onclick = () => selectOption(options.B.isCorrect);
    dom.optC.onclick = () => selectOption(options.C.isCorrect);

    dom.optionsContainer.classList.remove('hide');
}

// Lógica de seleção de alternativas
function selectOption(isCorrect) {
    if (isCorrect) {
        // Acertou: Oculta painel e avança para o próximo diálogo (que é a reação de acerto)
        dom.optionsContainer.classList.add('hide');
        advanceGame();
    } else {
        // Errou: Exibe a tela de Game Over
        showGameOverScreen();
    }
}

// ==========================================================================
// FLUXO DO JOGO E TRANSIÇÃO DE ESTADOS
// ==========================================================================
function advanceGame() {
    // Se estiver digitando, acelera e completa o texto
    if (gameState.isTyping) {
        completeTyping();
        return;
    }

    const currentScene = scriptData[gameState.currentSceneIndex];
    
    // Se for uma pergunta ativa e as opções estão visíveis, bloqueia o avanço por clique comum na tela
    if (currentScene && currentScene.type === 'question' && !dom.optionsContainer.classList.contains('hide')) {
        return;
    }

    gameState.currentSceneIndex++;
    renderScene();
}

// Inicializa a cena principal e oculta menus
function startDialogueGame() {
    gameState.currentState = 2;
    gameState.currentSceneIndex = 0;
    
    dom.menuScreen.classList.add('hide');
    dom.introVideo.classList.add('hide');
    dom.gameOverScreen.classList.add('hide');
    dom.finalizationScreen.classList.add('hide');
    dom.gameContainer.classList.remove('boss-theme');
    dom.gameContainer.classList.remove('shake-anim');
    
    renderScene();
}

// Transição do vídeo de introdução (Mundo Real)
function playIntroVideo() {
    gameState.currentState = 1;
    dom.menuScreen.classList.add('hide');
    dom.introVideo.classList.remove('hide');
    
    // Pausar a música de fundo durante a introdução em vídeo
    dom.bgm.pause();
    
    // Reset e reprodução do vídeo
    dom.introVideo.currentTime = 0;
    
    const playPromise = dom.introVideo.play();
    
    // Proteção contra falhas de reprodução automática de navegadores
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Vídeo iniciado.");
        }).catch(error => {
            console.log("Reprodução de vídeo bloqueada ou arquivo ausente, pulando para o Prólogo:", error);
            endVideoIntro();
        });
    }

    // Evento de fim de vídeo
    dom.introVideo.onended = () => {
        endVideoIntro();
    };

    // Caso o vídeo falhe de alguma forma, também pulará para o jogo normal
    dom.introVideo.onerror = () => {
        console.log("Erro ao carregar vídeo, iniciando o jogo diretamente.");
        endVideoIntro();
    };
}

// Finaliza a introdução em vídeo e inicia a Visual Novel
function endVideoIntro() {
    dom.introVideo.classList.add('hide');
    dom.introVideo.pause();
    
    // Inicia a música de fundo e transiciona para o prólogo
    startBGM();
    startDialogueGame();
}

// Exibe a tela de Game Over
function showGameOverScreen() {
    dom.gameOverScreen.classList.remove('hide');
}

// Recarrega exatamente a pergunta que o jogador errou (sem perder o progresso)
function retryCurrentQuestion() {
    dom.gameOverScreen.classList.add('hide');
    renderScene();
}

// Exibe tela final do jogo
function showFinalizationScreen() {
    dom.dialogueContainer.classList.add('hide');
    dom.charLeft.classList.add('hide');
    dom.charRight.classList.add('hide');
    dom.gameContainer.classList.remove('boss-theme');
    dom.gameContainer.classList.remove('shake-anim');
    dom.finalizationScreen.classList.remove('hide');
}

// Reinicia o jogo do absoluto zero
function resetGameToMenu() {
    gameState.currentState = 0;
    gameState.currentSceneIndex = 0;
    gameState.bgmStarted = false;
    dom.bgm.pause();
    dom.bgm.currentTime = 0;
    
    // Reset da imagem de fundo para a tela inicial
    dom.bgLayer.style.backgroundImage = "url('assets/img/bg_inicial.jpeg')";
    dom.gameContainer.classList.remove('boss-theme');
    dom.gameContainer.classList.remove('shake-anim');
    
    dom.finalizationScreen.classList.add('hide');
    dom.menuScreen.classList.remove('hide');
}

// ==========================================================================
// VINCULAÇÃO DE EVENTOS E EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
    // Menu Principal
    dom.btnIniciar.onclick = () => {
        playIntroVideo();
    };

    dom.btnConteudo.onclick = () => {
        dom.contentModal.classList.remove('hide');
    };

    dom.btnCloseModal.onclick = () => {
        dom.contentModal.classList.add('hide');
    };

    // Controle de Volume
    dom.btnVolume.onclick = (e) => {
        e.stopPropagation(); // Evita avançar diálogo ao ajustar som
        toggleVolume();
    };

    // Avançar diálogo ao clicar na caixa de diálogo ou no palco do jogo
    dom.dialogueContainer.onclick = (e) => {
        e.stopPropagation();
        advanceGame();
    };
    
    // Cliques na tela (palco) também avançam o diálogo para fluidez no mobile/desktop
    dom.gameContainer.onclick = (e) => {
        // Impede cliques acidentais no menu ou quando outras telas estão por cima
        if (gameState.currentState >= 2 && 
            dom.gameOverScreen.classList.contains('hide') && 
            dom.finalizationScreen.classList.contains('hide') &&
            dom.contentModal.classList.contains('hide')) {
            advanceGame();
        }
    };

    // Controles de Reinício
    dom.btnTentarNovamente.onclick = () => {
        retryCurrentQuestion();
    };

    dom.btnRecomeçar.onclick = () => {
        resetGameToMenu();
    };
}

// ==========================================================================
// CONTROLES DE INTERAÇÃO E ÁUDIO INICIAL
// ==========================================================================
window.onload = () => {
    // Carrega fundo da tela inicial
    dom.bgLayer.style.backgroundImage = "url('assets/img/bg_inicial.jpeg')";
    setupEventListeners();
    
    // Tenta iniciar a música agressivamente no primeiro clique ou toque na tela do menu
    const enableAudioOnInteraction = () => {
        startBGM();
        // Remove os listeners apenas se a música de fato tiver começado
        if (gameState.bgmStarted) {
            document.removeEventListener('click', enableAudioOnInteraction);
            document.removeEventListener('touchstart', enableAudioOnInteraction);
            document.removeEventListener('keydown', enableAudioOnInteraction);
        }
    };
    document.addEventListener('click', enableAudioOnInteraction);
    document.addEventListener('touchstart', enableAudioOnInteraction);
    document.addEventListener('keydown', enableAudioOnInteraction);
};
