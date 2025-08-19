# Cookify 🍴

O **Cookify** é um aplicativo que criamos com a ideia de facilitar o dia a dia de quem gosta de cozinhar. A proposta é permitir que qualquer pessoa possa **organizar, compartilhar e encontrar receitas direto do celular**, de um jeito simples, bonito e funcional.

Agora, vamos desenvolver o app usando **React Native com Expo (via ExpoDev)**, uma ferramenta moderna que permite criar aplicativos Android e iOS com uma única base de código. Com isso, conseguimos mais controle visual e funcionalidades avançadas, além de ser uma ótima oportunidade para aprender programação real com JavaScript.

---

🎯 **Objetivos do App**

* Facilitar o cadastro e a busca de receitas
* Permitir a troca de receitas entre os usuários
* Ajudar na organização de ingredientes e compras
* Garantir bom desempenho mesmo em celulares simples ou com internet limitada

---

⚙️ **Funcionalidades do App**

1. 📝 **Cadastro de Receitas** – *Samuel*

   * Nome da receita
   * Categoria (ex: doce, salgado, saudável)
   * Lista de ingredientes com checkbox
   * Modo de preparo
   * Tempo de preparo e número de porções
   * Foto da comida (tirada na hora ou da galeria)

2. 👀 **Visualizar Receitas** – *Theo*

   * Ver todas as receitas (do usuário e de outros via Firebase)
   * Exibir detalhes completos com imagem, ingredientes e modo de preparo

3. 🔎 **Buscar Receitas** – *Guilherme*

   * Campo de busca por nome da receita

4. 🛒 **Lista de Compras** – *Maria*

   * Geração automática da lista com ingredientes das receitas escolhidas
   * Checkbox para marcar itens comprados

5. ⭐ **Favoritar Receitas** – *Maria*

   * Marcar/desmarcar receitas como favoritas
   * Tela de favoritos para fácil acesso

6. 😄 **Sistema de Avaliação** – *Theo*

   * O usuário pode avaliar com estrelas ou emojis (ex: “gostei / não gostei”)

7. 🧁 **Sistema de Filtros** – *Guilherme*

   * Filtro por categoria (doce, salgado, saudável, etc.)

8. 👨‍🍳 **Modo Passo a Passo** – *Samuel*

   * Mostra o preparo em etapas, com botões “Próximo” e “Voltar”
   * Ideal para seguir durante o preparo da receita

---

🛠 **Necessidades Funcionais**

   Elementos necessários para o funcionamento do app

1. 🌐 **Conexão com a Internet**

   * Acesso via Wi-Fi ou dados móveis
   * Necessária para publicar, visualizar e avaliar receitas

2. 📸 **Câmera**

   * Captura de fotos das receitas preparadas
   * Suporte a diferentes resoluções de imagem

3. 🖼️ **Galeria**

   * Seleção de imagens já armazenadas no dispositivo
   * Permite anexar fotos às receitas publicadas

4. 🔔 **Sistema de Notificações**

   * Envio de alertas sobre comentários, avaliações e novas receitas
   * Configuração de notificações push pelo sistema operacional

5. 💾 **Armazenamento Interno**

   * Salvamento de receitas favoritas para acesso offline
   * Armazenamento temporário (cache) de imagens e dados do app

---

💻 **Parte Técnica:**

✅ React Native com Expo
Vamos criar o app usando React Native com Expo, que permite criar aplicativos modernos para Android e iOS com código em JavaScript.

✅ Compatível com Android e iOS
O app pode rodar em qualquer celular com Android ou iOS. Para a escola, podemos focar em Android, mas o código serve para os dois.

✅ Login obrigatório com Firebase Authentication
O usuário precisa fazer login para usar o app. Vamos usar o Firebase Authentication, que permite login por e-mail e senha (ou Google, se quiser).
Cada receita será salva ligada ao usuário logado.

✅ Banco de dados online com Firebase Firestore
As receitas serão salvas na nuvem usando o Firebase Firestore. Assim, o usuário pode acessar suas receitas de qualquer lugar.

✅ Armazenamento de imagens com Firebase Storage
As fotos das receitas (tiradas na hora ou da galeria) serão enviadas e salvas no Firebase Storage.

✅ Armazenamento local com AsyncStorage (opcional)
Podemos guardar dados temporários, como favoritos ou última busca, dentro do celular usando o AsyncStorage. Mas as receitas principais ficam no Firebase.

✅ Interface responsiva e moderna
As telas serão construídas com componentes do React Native (View, ScrollView, TextInput, FlatList, etc.) e terão um visual simples e fácil de navegar, adaptando-se a vários tamanhos de tela.

✅ Navegação entre telas com React Navigation
Vamos usar a biblioteca React Navigation para o usuário conseguir trocar de tela (ex: login, receitas, detalhes, favoritos...).

✅ App leve e com bom desempenho
Mesmo com internet fraca ou celular simples, o app vai funcionar bem, pois a interface é otimizada e os dados são carregados sob demanda.

---

✅ **Conclusão**

Escolhemos esse projeto porque ele resolve um problema do dia a dia e também serve como uma excelente oportunidade de aprendizado. Com o **Cookify**, qualquer pessoa pode salvar, ver ou compartilhar receitas de forma prática, além de contar com recursos úteis como lista de compras e modo passo a passo. Mesmo sendo um projeto escolar, estamos usando ferramentas profissionais e criando algo que pode realmente funcionar para o público.

---

👨‍👩‍👧‍👦 **Integrantes do grupo**

* @Guilhermesilvaandre
* @dudex-computer
* @samuelsantanatorriani
* @TheoEggert127

📱 **Protótipo:**
[acessar protótipo](https://marvelapp.com/prototype/11b8944e)

