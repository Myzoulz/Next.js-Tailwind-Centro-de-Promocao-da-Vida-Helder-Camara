<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Workflow de Git

- **Nunca fazer commit, push, abrir PR ou fazer deploy sem o usuário pedir explicitamente.**
- **Mudanças pequenas** (correções de design, bugs pontuais, ajustes de UI/estilo, docs) podem ser commitadas **direto na `main`** e enviadas com `git push`.
- **Mudanças maiores** (features, refatorações, integrações) seguem **branch + PR**:
  1. criar branch descritiva a partir de `main`;
  2. implementar e validar localmente (lint/build/teste);
  3. commitar, push, abrir PR com título/descrição e testes;
  4. aguardar o check da Vercel e o OK do usuário antes do merge.
