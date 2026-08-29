/* MANUAL / HELP TEXTS
   Two languages are available:
   - pt-BR
   - en

   Edit only the text inside quotes/backticks.
   Do not remove commas or braces.
*/

const GAME_TEXTS = {
    "pt-BR": {
        overlayTitle: "PROTOCOLO DE COMUNICAÇÃO",
        overlaySubtitle: `SUA MISSÃO: Guiar o Player no <strong>HEADSET</strong>. Ele tem os controles, mas você tem o mapa.<br><br>
                          <strong>ESTRATÉGIA:</strong><br>
                          1. Localize onde o som entra no Groove.<br>
                          2. Analise Ritmo, altura (grave, agudo, qual a nota) e timbre.<br>
                          3. Transmita: <strong>Cantarole</strong> (intuição) ou use os <strong>Dados Técnicos</strong> (ciência) abaixo.`,

        section1Title: "1. A FÍSICA DO SOM (343 m/s)",
        section1Content: `<strong>PRECISION LAB:</strong> Use o <strong>H-ZOOM</strong> para ampliar. Quando ampliado, você pode <strong>ARRASTAR</strong> o gráfico lateralmente.<br>
                          <strong>MEDINDO A ONDA:</strong> Encontre o ponto exato onde a onda se repete (1 ciclo) e veja a distância na régua.`,
        formula: "FREQ (Hz) = 343 ÷ COMPRIMENTO (m)",

        tableHeaders: {
            note: "NOTA",
            freq: "FREQ (Hz)",
            length: "COMPRIMENTO (m)"
        },

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

        section2Title: "2. SINCRONIA (RITMO & DIVS)",
        section2Content: `Use o slider <strong>DIVS</strong> para dividir o compasso. Informe ao player em qual "fatia" do tempo o som começa.`,

        section3Title: "3. IDENTIDADE (TIMBRE)",
        section3Content: `Descreva a geometria da onda nas tracks de baixo: "Redonda", "Quadrada", "Pontuda", "Crescente".`,

        closeHelp: "[ TOQUE EM QUALQUER LUGAR PARA FECHAR ]"
    },

    en: {
        overlayTitle: "COMMUNICATION PROTOCOL",
        overlaySubtitle: `YOUR MISSION: Guide the Player in the <strong>HEADSET</strong>. They have the controls, but you have the map.<br><br>
                          <strong>STRATEGY:</strong><br>
                          1. Locate where the sound enters the Groove.<br>
                          2. Analyze rhythm, pitch (low, high, which note), and timbre.<br>
                          3. Communicate: <strong>Hum it</strong> (intuition) or use the <strong>Technical Data</strong> (science) below.`,

        section1Title: "1. THE PHYSICS OF SOUND (343 m/s)",
        section1Content: `<strong>PRECISION LAB:</strong> Use <strong>H-ZOOM</strong> to magnify the waveform. When zoomed in, you can <strong>DRAG</strong> the graph sideways.<br>
                          <strong>MEASURING THE WAVE:</strong> Find the exact point where the wave repeats (1 cycle) and check the distance on the ruler.`,
        formula: "FREQ (Hz) = 343 ÷ WAVELENGTH (m)",

        tableHeaders: {
            note: "NOTE",
            freq: "FREQ (Hz)",
            length: "WAVELENGTH (m)"
        },

        notesTable: [
            { note: "C3", freq: "130.8", meters: "~ 2.62m" },
            { note: "C#3 / Db3", freq: "138.6", meters: "~ 2.47m" },
            { note: "D3", freq: "146.8", meters: "~ 2.33m" },
            { note: "D#3 / Eb3", freq: "155.6", meters: "~ 2.20m" },
            { note: "E3", freq: "164.8", meters: "~ 2.08m" },
            { note: "F3", freq: "174.6", meters: "~ 1.96m" },
            { note: "F#3 / Gb3", freq: "185.0", meters: "~ 1.85m" },
            { note: "G3", freq: "196.0", meters: "~ 1.75m" },
            { note: "G#3 / Ab3", freq: "207.6", meters: "~ 1.65m" },
            { note: "A3", freq: "220.0", meters: "~ 1.56m" },
            { note: "A#3 / Bb3", freq: "233.1", meters: "~ 1.47m" },
            { note: "B3", freq: "246.9", meters: "~ 1.39m" },
            { note: "C4", freq: "261.6", meters: "~ 1.31m" }
        ],

        octaveLogic: `<strong>OCTAVE LOGIC:</strong><br>
                      WAVE DOUBLES IN LENGTH = Note drops one octave (lower).<br>
                      WAVE IS CUT IN HALF = Note rises one octave (higher).`,

        section2Title: "2. SYNC (RHYTHM & DIVS)",
        section2Content: `Use the <strong>DIVS</strong> slider to divide the measure. Tell the player which time "slice" the sound starts on.`,

        section3Title: "3. IDENTITY (TIMBRE)",
        section3Content: `Describe the waveform geometry in the tracks below: "Round", "Square", "Pointed", "Rising".`,

        closeHelp: "[ TAP ANYWHERE TO CLOSE ]"
    }
};
