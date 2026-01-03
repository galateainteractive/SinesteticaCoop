/* ARQUIVO DE CONFIGURAÇÃO DE TEXTOS
   Edite o que estiver entre aspas "". 
   Não apague as vírgulas ou chaves.
*/

const GAME_TEXTS = {
    // Cabeçalho do Overlay
    overlayTitle: "PROTOCOLO DE COMUNICAÇÃO",
    overlaySubtitle: `SUA MISSÃO: Guiar o Player no <strong>HEADSET</strong>. Ele tem os controles, mas você tem o mapa.<br><br>
                      <strong>ESTRATÉGIA:</strong><br>
                      1. Localize onde o som entra no Groove.<br>
                      2. Analise Ritmo, altura (grave, agudo, qual a nota) e timbre.<br>
                      3. Transmita: <strong>Cantarole</strong> (intuição) ou use os <strong>Dados Técnicos</strong> (ciência) abaixo.`,

    // Seção 1: Física
    section1Title: "1. A FÍSICA DO SOM (343 m/s)",
    section1Content: `<strong>PRECISION LAB:</strong> Use o <strong>H-ZOOM</strong> para ampliar. Quando ampliado, você pode <strong>ARRASTAR</strong> o gráfico lateralmente.<br>
                      <strong>MEDINDO A ONDA:</strong> Encontre o ponto exato onde a onda se repete (1 ciclo) e veja a distância na régua.`,
    formula: "FREQ (Hz) = 343 ÷ COMPRIMENTO (m)",

    // Tabela de Notas (Cromática) - Edite valores aqui se precisar
    notesTable: [
        { note: "C3 (Dó)", freq: "130.8", meters: "~ 2.62m" },
        { note: "C#3 / Db3", freq: "138.6", meters: "~ 2.47m" },
        { note: "D3 (Ré)", freq: "146.8", meters: "~ 2.33m" },
        { note: "D#3 / Eb3", freq: "155.6", meters: "~ 2.20m" },
        { note: "E3 (Mi)", freq: "164.8", meters: "~ 2.08m" },
        { note: "F3 (Fá)", freq: "174.6", meters: "~ 1.96m" },
        { note: "F#3 / Gb3", freq: "185.0", meters: "~ 1.85m" },
        { note: "G3 (Sol)", freq: "196.0", meters: "~ 1.75m" },
        { note: "G#3 / Ab3", freq: "207.6", meters: "~ 1.65m" },
        { note: "A3 (Lá)", freq: "220.0", meters: "~ 1.56m" },
        { note: "A#3 / Bb3", freq: "233.1", meters: "~ 1.47m" },
        { note: "B3 (Si)", freq: "246.9", meters: "~ 1.39m" },
        { note: "C4 (Dó)", freq: "261.6", meters: "~ 1.31m" }
    ],

    octaveLogic: `<strong>LÓGICA DAS OITAVAS:</strong><br>
                  Onda DOBRA de tamanho = Nota cai uma oitava (mais grave).<br>
                  Onda CAI PELA METADE = Nota sobe uma oitava (mais aguda).`,

    // Seção 2: Ritmo
    section2Title: "2. SINCRONIA (RITMO & DIVS)",
    section2Content: `Use o slider <strong>DIVS</strong> para dividir o compasso. Informe ao player em qual "fatia" do tempo o som começa.`,

    // Seção 3: Timbre
    section3Title: "3. IDENTIDADE (TIMBRE)",
    section3Content: `Descreva a geometria da onda nas tracks de baixo: "Redonda", "Quadrada", "Pontuda", "Crescente".`
};

