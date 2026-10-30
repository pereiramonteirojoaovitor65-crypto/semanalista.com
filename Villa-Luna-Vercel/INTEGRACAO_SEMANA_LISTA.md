# Semana Lista - integração da PV

A PV em espanhol foi extraída para a pasta já utilizada pelo projeto. Os dois scripts inline de rastreamento da UTMify foram preservados exatamente uma vez no cabeçalho. `vercel.json` foi mantido.

Os recursos da nova página usam nomes com hash e o caminho `assets/`, compatível com as regras existentes de cache. A imagem principal é WebP responsiva e priorizada. As demais imagens usam carregamento adiado.

## Checkout

O `config.js` anterior contém checkout de outra oferta (Villa Luna). Ele foi preservado para referência, mas não é carregado pela nova página. Os botões da Semana Lista continuam em modo de revisão, sem cobrar ou redirecionar para o produto antigo. Configurar os dois checkouts corretos é uma etapa separada.

## Rastreamento

Preservar o código não comprova recebimento de eventos na plataforma. Depois da publicação, conferir a página real, o carregamento dos scripts e os eventos na conta UTMify/Meta. Não há evento Purchase simulado. Connect rate e velocidade reais não foram medidos nesta integração.

Os arquivos e imagens antigos não foram apagados; a versão anterior do HTML também permanece no histórico Git.
