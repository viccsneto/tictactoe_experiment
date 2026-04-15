# Revisão Socrática Final

Data: 2026-04-15
Projeto: tictactoe_experiment

## 1) Verificação Autônoma de Código

A revisão iniciou com validação objetiva das tarefas no código.

### Tarefa 1 (emojis)
Status: concluída.

Evidências:
- Definição dos jogadores com emoji em [game.js](../game.js#L9) e [game.js](../game.js#L10).
- Fluxo de turno e vitória usando os mesmos valores em [script.js](../script.js#L24) e [script.js](../script.js#L56).
- Interface exibindo emojis em [index.html](../index.html#L33), [index.html](../index.html#L37) e [index.html](../index.html#L42).
- Estilos mapeados para classes de jogador em [style.css](../style.css#L128) e [style.css](../style.css#L132).
- Testes com cenários em 🐱/🐶 em [tests/game.test.js](../tests/game.test.js#L44).

### Tarefa 2 (placar)
Status: concluída.

Evidências:
- Estrutura do placar no HTML em [index.html](../index.html#L31).
- Elementos de score no DOM em [script.js](../script.js#L9) e [script.js](../script.js#L10).
- Renderização de placar em [script.js](../script.js#L18).
- Incremento no evento de vitória em [script.js](../script.js#L59).
- Persistência do placar por sessão (restart limpa tabuleiro, não o score) em [script.js](../script.js#L71).

## 2) Perguntas Iniciais de Perfil

1. Quanto tempo de experiência em programação você tem?
- Resposta: "3 anos"

2. Já usou assistentes de código antes? Qual(is)?
- Resposta: "GitHub Copilot e ChatGPT."

3. Já tinha programado tic-tac-toe antes?
- Resposta: "Sim."

4. Que modelo LLM você utilizou durante o processo?
- Resposta: "Auto, não defini um LLM."

Avaliação:
- O participante demonstrou experiência intermediária e familiaridade prévia com IA assistiva.

## 3) Parte A - Tarefa 1 (Emojis)

### Perguntas reflexivas e respostas

1. O que foi implementado na Tarefa 1?
- Resposta: "Fiz a troca de X/O para emojis de gato e cão."
- Avaliação: correta e aderente ao requisito.

2. Explicação de módulos sem olhar código.
- Resposta: "Sim, consigo. O game.test.js são os testes, o game.js é a lógica, e o index.html é a parte visual do sistema."
- Avaliação: estrutura geral correta (teste, lógica e visual), com boa separação mental de responsabilidades.

3. Autonomia para depuração sem IA.
- Resposta: "Acredito que sim."
- Avaliação: confiança positiva; não detalhou método de depuração.

4. Compreensão do porquê da estratégia.
- Resposta: "Acho que para não ter problema de carregar, pois pode ocorrer erro no carregamento da imagem."
- Avaliação: parcialmente correta na intenção de robustez, mas tecnicamente incompleta: emojis usados no projeto são caracteres Unicode, não imagens externas.

5. Capacidade de onboarding.
- Resposta: "Sim."
- Avaliação: positiva, coerente com entendimento demonstrado dos módulos.

6. Sustentabilidade sem IA.
- Resposta: "Sim, pois é um sistema fácil, mas acho que na parte do pipeline poderia haver algum problema."
- Avaliação: resposta madura; reconhece confiança na manutenção funcional e risco maior na camada processual/pipeline.

7. Satisfação com o resultado.
- Resposta: "Sim."
- Avaliação: satisfeita.

### Debate socrático (2 questões)

Q1. Se trocar os jogadores para texto (cat/dog), o que quebra primeiro?
- Resposta: "Não quebraria, pois não uso diretamente o emoji, e sim uma constante."
- Avaliação técnica: parcialmente correta. A lógica pode continuar se tudo mudar de forma consistente, mas quebra requisito da tarefa e expectativas de testes/UI (que exigem 🐱/🐶).

Q2. Internacionalização futura: o que é domínio e o que é apresentação?
- Resposta: "Usaria i18n para isso, criaria um JSON com as palavras-chave utilizadas e carregaria conforme o idioma do PC."
- Avaliação técnica: correta. Propõe externalização de strings e resolução por idioma com chaves.

Resultado Parte A:
- Domínio funcional: bom.
- Domínio arquitetural: bom, com um ajuste conceitual importante sobre Unicode vs imagem.

## 4) Parte B - Tarefa 2 (Placar)

### Perguntas reflexivas e respostas

1. O que foi implementado na Tarefa 2?
- Resposta: "Adicionei um placar."
- Avaliação: correta.

2. Explicação de módulos.
- Resposta: "index para o front e script.js para o backend."
- Avaliação: parcialmente correta. Houve ajuste: neste projeto ambos rodam no front-end (navegador), sendo [index.html](../index.html) estrutura e [script.js](../script.js) lógica de interação.

3. Autonomia para depuração sem IA.
- Resposta: "Sim."
- Avaliação: positiva.

4. Justificativa da lógica de incremento no vencedor.
- Resposta: "Porque, senão, não faz sentido para o jogo."
- Avaliação: correta e direta.

5. Capacidade de onboarding.
- Resposta: "Sim."
- Avaliação: positiva.

6. Sustentabilidade sem IA.
- Resposta: "Sim, pois a lógica não é muito complexa."
- Avaliação: coerente com o escopo.

7. Satisfação com resultado.
- Resposta: "Sim."
- Avaliação: satisfeita.

### Debate socrático (2 questões)

Q1. Manter placar após restart é decisão ou efeito colateral?
- Resposta: "É uma decisão. Se reiniciar a cada novo jogo, não sai do 1 a 0; não faz sentido. Ele só zera ao recarregar a página."
- Avaliação técnica: correta e consistente com [script.js](../script.js#L71).

Q2. Como adicionar botão "Zerar placar" sem quebrar tabuleiro?
- Resposta: "Eu alteraria somente o placar no botão para zerar as variáveis."
- Avaliação técnica: correta. Separação de responsabilidades preservada.

Resultado Parte B:
- Domínio funcional: bom.
- Coerência de produto: boa.

## 5) Reflexão Comparativa Final

Pergunta:
- Como você se sente em relação à implementação da Tarefa 1 em comparação com a Tarefa 2? Cite prós e contras de cada uma.

Resposta:
- "A Tarefa 2 foi mais tranquila, mas, por conta da partida, achei que na Tarefa 1 usar os markdowns facilitou o entendimento e, como usei isso um pouco na Tarefa 2, achei mais fácil implementar."

Avaliação:
- Reflexão coerente. O participante reconhece que estruturação prévia ajudou a execução posterior.

## 6) Verificação de Consentimento

Arquivo verificado: [artifacts/consentimento.md](consentimento.md)

Conferência:
- Matrícula: preenchida.
- Nome completo: preenchido.
- Consentimento explícito: preenchido (Sim).

Status: válido para encerramento do experimento.

## 7) Conclusão

A revisão socrática foi concluída com sucesso.
Os artefatos finais obrigatórios foram gerados.

Está tudo pronto para o PR.
