# MadWod Gestão — SPA

App web (um único `index.html`) para gerir clientes, fornecedores, artigos/stock, orçamentos, calculadoras, agenda, lembretes e pastas. Funciona no PC e no iPhone (instalável no ecrã principal, offline).

## Publicar no GitHub Pages
1. Criar um repositório (ex.: `madwod-gestao`) e carregar **todos** os ficheiros desta pasta.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
3. Abrir `https://<utilizador>.github.io/madwod-gestao/`.
4. No iPhone: abrir no Safari → Partilhar → **Adicionar ao ecrã principal**.

> ⚠️ Não coloque o Excel com dados de clientes no repositório se ele for público (RGPD). O GitHub serve só para alojar a app; os dados ficam no dispositivo e no Excel.

## Dados e sincronização
- Os dados ficam guardados no navegador de cada dispositivo.
- **Acesso remoto (PC + iPhone):** em *Dados & Excel → Acesso remoto e offline*, ligue um repositório **privado** `madwod-dados` com um token fine-grained (Contents: Read and write, só esse repositório). A app guarda `madwod-dados.json` lá e junta as alterações de todos os dispositivos. Sem rede, guarda localmente e envia quando a ligação voltar.
- **Offline no PC pela pasta do Drive:** ponha `MadWod_Gestao.html` na pasta do Google Drive/OneDrive, abra-o no Chrome/Edge e use *Criar ficheiro na pasta do Drive*. Nos outros PCs, *Usar ficheiro existente*.
- **Dados & Excel → Importar** lê o ficheiro `MadWod_Gestao.xlsx` (não mude nomes de abas nem cabeçalhos).
- **Exportar** gera o Excel completo (dashboard, fórmulas e uma aba por cliente).
- Para passar dados entre PC e iPhone: exportar num, guardar no iCloud Drive/OneDrive, importar no outro.

## Atualizar a app
Substituir o `index.html` no repositório. Se o iPhone mostrar a versão antiga, fechar e reabrir a app.

## Personalizador público (WordPress)
`personalizar.html` é uma página pública só com o personalizador de t-shirts (sem dados da loja).
No WordPress: editar a página → bloco **HTML personalizado** → colar:

```html
<iframe src="https://SEU-UTILIZADOR.github.io/madwod-gestao/personalizar.html" style="width:100%;height:1100px;border:0" loading="lazy" title="Personalizar t-shirt MadWod"></iframe>
```
Para mostrar um botão de WhatsApp, abra `personalizar.html` e preencha `const WHATSAPP=""` com o número (ex.: "351910000000").
