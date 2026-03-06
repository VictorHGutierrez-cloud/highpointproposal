

## Plano: Melhorar legibilidade e atualizar nome

### Problema identificado
O texto nos slides está pequeno quando visualizado em telas menores que 1920px (o conteúdo é escalado para baixo pelo `SlideLayout`). Além disso, o nome completo "Victor Henrique Aguiar Gutierrez Duarte" aparece em dois lugares e precisa ser simplificado.

### Alterações

**1. Aumentar tamanhos de fonte base nos componentes reutilizáveis (`slides.tsx`)**
- `SectionLabel`: de `28px` para `32px`
- `SlideTitle`: de `72px` para `80px`
- `SlideSubtitle`: de `32px` para `36px`
- Textos de corpo: subir de `16-18px` para `20-22px`
- Textos de detalhe/impacto: subir de `14-16px` para `18px`
- Itens de lista e descrições menores: bump proporcional

**2. Atualizar nome em dois arquivos**
- `slides.tsx` linha 57: "Victor Henrique Aguiar Gutierrez Duarte" → "Victor Gutierrez"
- `Footer.tsx` linha 12: mesma alteração

**3. Slides específicos com texto denso — ajustes pontuais**
- Slide 3 (Ferramentas Atuais): items de lista de `16px` para `18px`
- Slide 5 (Dores): descrições de `18px` para `20px`, impacto de `16px` para `18px`
- Slide 6 (Custo): linhas de cálculo de `20px` para `22px`
- Slide 8 (Integração): items de `18px` para `20px`
- Slide 9 (Comparação): células de `17px` para `20px`, cabeçalho de `20px` para `22px`

