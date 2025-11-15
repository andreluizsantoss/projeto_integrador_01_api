# Deploy no Vercel - SOS Sorocaba

## Problemas Resolvidos

### 1. CSS não carregando
- Criado `vercel.json` com configurações específicas para Create React App
- Configurado build command e output directory corretos

### 2. Erro de API
- Atualizado `src/services/api.js` com configuração de ambiente
- Adicionado timeout e headers apropriados
- Melhorado tratamento de erros

## Configuração de Deploy

### Variáveis de Ambiente no Vercel
Configure as seguintes variáveis no painel do Vercel:

```
REACT_APP_API_URL=https://projeto-integrador-01-api.onrender.com
```

### Comandos de Build
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

## Verificações Pós-Deploy

1. **CSS**: Verificar se os estilos estão carregando corretamente
2. **API**: Testar login com credenciais padrão:
   - Usuário: `administrador`
   - Senha: `administrador`

## Troubleshooting

### Se o CSS ainda não carregar:
1. Limpar cache do Vercel
2. Fazer novo deploy
3. Verificar se o arquivo `App.css` está sendo importado corretamente

### Se a API não responder:
1. Verificar se a API no Render está ativa
2. Testar a URL da API diretamente no navegador
3. Verificar logs do Vercel para erros de CORS

## URLs
- Frontend: https://reactsossorocaba.vercel.app
- API: https://projeto-integrador-01-api.onrender.com