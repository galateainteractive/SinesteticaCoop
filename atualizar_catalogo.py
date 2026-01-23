import os
import json

# Configuracoes
DIRETORIO_MUSICAS = "musicas"  # Pasta dos projetos
ARQUIVO_SAIDA = "composicoes.json"

def gerar_catalogo():
    catalogo = []
    
    # Verifica se a pasta musicas existe
    if not os.path.exists(DIRETORIO_MUSICAS):
        print(f"ERRO: A pasta '{DIRETORIO_MUSICAS}' nao foi encontrada.")
        return

    print(f"--- Varrendo pasta '{DIRETORIO_MUSICAS}' ---")

    # Lista todas as pastas dentro de 'musicas'
    for nome_pasta in os.listdir(DIRETORIO_MUSICAS):
        caminho_completo = os.path.join(DIRETORIO_MUSICAS, nome_pasta)
        
        # Verifica se eh um diretorio
        if os.path.isdir(caminho_completo):
            caminho_settings = os.path.join(caminho_completo, "settings.json")
            
            # So adiciona se tiver o settings.json dentro
            if os.path.exists(caminho_settings):
                dados = None
                
                # Tenta ler como UTF-8 primeiro
                try:
                    with open(caminho_settings, 'r', encoding='utf-8') as f:
                        dados = json.load(f)
                except UnicodeDecodeError:
                    # Se falhar, tenta ler como Latin-1 (padrao Windows)
                    try:
                        with open(caminho_settings, 'r', encoding='latin-1') as f:
                            dados = json.load(f)
                    except Exception as e:
                        print(f"[ERRO] Falha de leitura em {nome_pasta}: {e}")

                if dados:
                    try:
                        # Pega o nome da composicao (ou usa o nome da pasta se falhar)
                        nome_exibicao = dados.get("compositionName", nome_pasta)
                        
                        entry = {
                            "nome": nome_exibicao,
                            "pasta": f"{DIRETORIO_MUSICAS}/{nome_pasta}"
                        }
                        
                        catalogo.append(entry)
                        print(f"[OK] Adicionado: {nome_exibicao}")
                    except Exception as e:
                        print(f"[ERRO] Falha ao processar dados de {nome_pasta}: {e}")
            else:
                print(f"[PULAR] {nome_pasta} (sem settings.json)")

    # Salva o arquivo final
    try:
        with open(ARQUIVO_SAIDA, 'w', encoding='utf-8') as f_out:
            json.dump(catalogo, f_out, indent=4, ensure_ascii=False)
        print(f"\n--- Sucesso! '{ARQUIVO_SAIDA}' atualizado com {len(catalogo)} itens. ---")
    except Exception as e:
        print(f"Erro ao salvar arquivo: {e}")

if __name__ == "__main__":
    gerar_catalogo()