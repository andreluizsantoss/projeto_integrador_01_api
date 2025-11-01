# SOS Sorocaba V3 - Estrutura Modular

## 📁 Estrutura do Projeto

```
V3/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── components/         # Componentes React
│   │   ├── Layout.js       # Layout principal
│   │   ├── Home.js         # Página inicial
│   │   ├── ChartComponent.js # Componente de gráficos
│   │   └── ...             # Outros componentes
│   ├── hooks/              # Hooks customizados
│   │   └── useMockApi.js   # Hook para API mockada
│   ├── utils/              # Utilitários
│   │   └── mockData.js     # Dados mockados
│   ├── styles/             # Estilos CSS
│   │   └── forms.css       # Estilos principais
│   └── App.js              # Componente raiz
└── README.md               # Este arquivo
```

## 🚀 Como usar

1. Abra o arquivo `public/index.html` no navegador
2. O sistema carregará automaticamente todos os componentes

## 📦 Componentes Criados

- **Layout**: Estrutura principal com navegação
- **Home**: Página inicial com estatísticas
- **ChartComponent**: Componente reutilizável para gráficos
- **useMockApi**: Hook para simular chamadas de API

## 🔧 Próximos Passos

Para completar a migração, adicione os componentes restantes:
- Dashboard.js
- PatientsList.js
- Register.js
- Activities.js
- Profile.js
- EditPatient.js

## 💡 Vantagens desta Estrutura

- ✅ **Modularidade**: Cada componente em arquivo separado
- ✅ **Reutilização**: Componentes podem ser importados facilmente
- ✅ **Manutenibilidade**: Código organizado e fácil de manter
- ✅ **Escalabilidade**: Fácil adicionar novos componentes