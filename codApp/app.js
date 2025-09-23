import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';

export default function App() {
  // ======================
  // Estado de navegação
  // ======================
  const [screen, setScreen] = useState(1); // controla qual tela está sendo exibida

  // ======================
  // Modo escuro global
  // ======================
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // ======================
  // Tema e cores do app
  // ======================
  const theme = {
    background: darkMode ? '#08415C' : '#E1EFE6',
    color: darkMode ? '#E1EFE6' : '#08415C',
    inputBg: darkMode ? '#333' : '#fff',
    inputColor: darkMode ? '#E1EFE6' : '#08415C',
    cardBg: '#53A2BE',
    mainButton: '#FFA400',
    dangerButton: '#E10B20',
    menuBg: '#08415C',
    menuItem: '#FFA400',
  };

  // ======================
  // Estados de cadastro e login
  // ======================
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // ======================
  // Tela 4 - Página inicial de receitas
  // ======================
  const recipesInit = [
    {id:'1',title:'Bolo de Chocolate'},
    {id:'2',title:'Panqueca de Banana'},
    {id:'3',title:'Salada de Frango'},
    {id:'4',title:'Pizza Margherita'},
    {id:'5',title:'Smoothie de Morango'},
  ];
  const [search, setSearch] = useState('');
  const filteredRecipes = recipesInit.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));

  // Estado para receita selecionada
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // ======================
  // Tela 5 - Perfil
  // ======================
  const [profileName, setProfileName] = useState('cara aletorio');
  const [profileEmail, setProfileEmail] = useState('caraAletatorio@email.com');
  const [profilePassword, setProfilePassword] = useState('123456');

  // ======================
  // Tela 6 - Gerenciar receitas
  // ======================
  const [recipes, setRecipes] = useState([...recipesInit]);
  const [newRecipe, setNewRecipe] = useState('');

  const addRecipe = () => {
    if(newRecipe.trim() === '') return;
    const id = (recipes.length + 1).toString();
    setRecipes([...recipes, {id, title: newRecipe}]);
    setNewRecipe('');
  };

  // ======================
  // Funções de navegação
  // ======================
  const nextScreen = () => { if(screen < 12) setScreen(screen + 1); }
  const prevScreen = () => { if(screen > 1) setScreen(screen - 1); }
  const goToScreen = (num) => setScreen(num);

  // ======================
  // ======================
  // TELAS
  // ======================
  // ======================

  // ----------- TELA 1: Entrada -----------
  if(screen === 1){
    return (
      <View style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>🍪 Bem-vindo ao Cookify 🍪</Text>




    <Image
    source={require('./assets/Logocomnome.png')} // Caminho da imagem
    style={styles2.imagem}
    />



        <TouchableOpacity style={[styles.button,{backgroundColor: theme.mainButton}]} onPress={nextScreen}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ----------- TELA 2: Cadastro -----------
  if(screen === 2){
    return (
      <ScrollView style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>Cadastro</Text>
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg, color: theme.inputColor, borderColor:'#53A2BE'}]}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg, color: theme.inputColor, borderColor:'#53A2BE'}]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg, color: theme.inputColor, borderColor:'#53A2BE'}]}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.mainButton}]} onPress={nextScreen}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.dangerButton}]} onPress={prevScreen}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ----------- TELA 3: Login -----------
  if(screen === 3){
    return (
      <ScrollView style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>Login</Text>
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg, color: theme.inputColor, borderColor:'#53A2BE'}]}
          placeholder="Email"
          value={loginEmail}
          onChangeText={setLoginEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg, color: theme.inputColor, borderColor:'#53A2BE'}]}
          placeholder="Senha"
          value={loginPassword}
          onChangeText={setLoginPassword}
          secureTextEntry
        />
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.mainButton}]} onPress={nextScreen}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.dangerButton}]} onPress={prevScreen}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ----------- TELA 4: Página Inicial / Receitas com Menu Inferior -----------
  if(screen === 4){
    return (
      <View style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>Receitas</Text>
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg, color: theme.inputColor, borderColor:'#53A2BE'}]}
          placeholder="Pesquisar..."
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={filteredRecipes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.card,{backgroundColor: theme.cardBg}]}
              onPress={()=>{
                setSelectedRecipe(item);
                goToScreen(8); // Tela de detalhes
              }}
            >
              <Text style={{color: theme.inputColor, fontSize:18}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Menu inferior ajustado: Receita | Home | Contas */}
        <View style={[styles.menu,{backgroundColor: theme.menuBg}]}>
          <TouchableOpacity onPress={()=>goToScreen(6)}>
            <Text style={[styles.menuItem,{color: theme.menuItem}]}>Receita</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(4)}>
            <Text style={[styles.menuItem,{color: theme.menuItem}]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(5)}>
            <Text style={[styles.menuItem,{color: theme.menuItem}]}>Contas</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ----------- TELA 5: Perfil -----------
  if(screen === 5){
    return (
      <ScrollView style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>Perfil e Configurações</Text>
        <View style={styles.row}>
          <Text style={[styles.label,{color: theme.color}]}>Tema escuro:</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
        <Text style={[styles.sectionTitle,{color: theme.color}]}>Dados da Conta</Text>
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg,color: theme.inputColor,borderColor:'#53A2BE'}]}
          placeholder="Nome"
          value={profileName}
          onChangeText={setProfileName}
        />
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg,color: theme.inputColor,borderColor:'#53A2BE'}]}
          placeholder="Email"
          value={profileEmail}
          onChangeText={setProfileEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg,color: theme.inputColor,borderColor:'#53A2BE'}]}
          placeholder="Senha"
          value={profilePassword}
          onChangeText={setProfilePassword}
          secureTextEntry
        />
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.mainButton}]} onPress={()=>alert('Alterações salvas!')}>
          <Text style={styles.buttonText}>Salvar alterações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.dangerButton}]} onPress={()=>alert('Deslogado!')}>
          <Text style={styles.buttonText}>Sair da conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.cardBg}]} onPress={()=>goToScreen(4)}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ----------- TELA 6: Gerenciar receitas -----------
  if(screen === 6){
    return (
      <ScrollView style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>Receitas Cadastradas</Text>
        <FlatList
          data={recipes}
          keyExtractor={item=>item.id}
          renderItem={({item})=>
            <View style={[styles.card,{backgroundColor: theme.cardBg}]}>
              <Text style={{color: theme.inputColor, fontSize:18}}>{item.title}</Text>
            </View>
          }
        />
        <Text style={[styles.sectionTitle,{color: theme.color}]}>Cadastrar nova receita</Text>
        <TextInput
          style={[styles.input,{backgroundColor: theme.inputBg,color: theme.inputColor,borderColor:'#53A2BE'}]}
          placeholder="Nome da receita"
          value={newRecipe}
          onChangeText={setNewRecipe}
        />
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.mainButton}]} onPress={addRecipe}>
          <Text style={styles.buttonText}>Adicionar receita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.cardBg}]} onPress={()=>goToScreen(4)}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ----------- TELA 8: Detalhes da Receita -----------
  if(screen === 8 && selectedRecipe){
    // Dados de exemplo para cada receita
    const recipeDetails = {
      'Bolo de Chocolate': {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YcR6sKgbgNXNv-TFI84zeSpIrTMTltrEPA&s',
        ingredients: ['2 xícaras de açúcar', '3 ovos', '1 xícara de chocolate em pó', '1 xícara de leite', '2 xícaras de farinha'],
        steps: ['Pré-aqueça o forno a 180°C', 'Misture os ingredientes secos', 'Adicione ovos e leite', 'Coloque na forma', 'Asse por 40 minutos']
      },
      'Panqueca de Banana': {
        image: 'https://static.itdg.com.br/images/640-440/53e47bf452300d58b8e741ae370eae4f/365870-original.jpg',
        ingredients: ['2 bananas maduras', '2 ovos', '1/2 xícara de farinha', '1 colher de sopa de óleo'],
        steps: ['Amasse as bananas', 'Misture ovos e farinha', 'Aqueça a frigideira', 'Cozinhe cada panqueca', 'Sirva quente']
      },
      'Salada de Frango': {
        image: 'https://s2-receitas.glbimg.com/C7yAeRdn4soKLKN_HVGhMHvxmB8=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/L/5/pr5gh3TwuD1S5B3KfYqQ/vlcsnap-2024-02-16-14h59m32s087.png',
        ingredients: ['200g de frango cozido', 'Alface', 'Tomate', 'Cenoura ralada', 'Molho de sua preferência'],
        steps: ['Corte os vegetais', 'Desfie o frango', 'Misture todos os ingredientes', 'Adicione o molho', 'Sirva']
      },
      'Pizza Margherita': {
        image: 'data:image/jpeg;base64,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',
        ingredients: ['Massa de pizza', 'Molho de tomate', 'Queijo mussarela', 'Manjericão'],
        steps: ['Pré-aqueça o forno', 'Abra a massa', 'Espalhe molho e queijo', 'Adicione manjericão', 'Asse por 15-20 minutos']
      },
      'Smoothie de Morango': {
        image: 'data:image/jpeg;base64,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',
        ingredients: ['200g de morangos', '1 copo de leite', '1 colher de mel', 'Gelo a gosto'],
        steps: ['Lave os morangos', 'Bata todos os ingredientes no liquidificador', 'Sirva gelado']
      }
    };
    const details = recipeDetails[selectedRecipe.title];

    return (
      <ScrollView style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>{selectedRecipe.title}</Text>
        <View style={{alignItems:'center', marginBottom:15}}>
          <Image source={{uri: details.image}} style={{width:300, height:200, borderRadius:10}} />
        </View>

        <Text style={[styles.sectionTitle,{color: theme.color}]}>Ingredientes</Text>
        {details.ingredients.map((ing, index)=>(
          <Text key={index} style={{color: theme.color, fontSize:16, marginBottom:5}}>• {ing}</Text>
        ))}

        <Text style={[styles.sectionTitle,{color: theme.color}]}>Modo de preparo</Text>
        {details.steps.map((step, index)=>(
          <Text key={index} style={{color: theme.color, fontSize:16, marginBottom:5}}>{index+1}. {step}</Text>
        ))}

        <TouchableOpacity style={[styles.button,{backgroundColor: theme.cardBg}]} onPress={()=>goToScreen(4)}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ----------- TELAS 7, 9-12: Outras páginas simples -----------
  if(screen >=7 && screen <=12 && screen !==8){
    const names = {
      7:'Notificações',
      9:'Ajuda',
      10:'Sobre',
      11:'Contato',
      12:'Configurações Avançadas'
    };
    return (
      <View style={[styles.container,{backgroundColor: theme.background}]}>
        <Text style={[styles.title,{color: theme.color}]}>{names[screen]}</Text>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.mainButton}]} onPress={nextScreen}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: theme.dangerButton}]} onPress={prevScreen}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}



// ======================
// ESTILOS
// ======================
const styles = StyleSheet.create({
  container:{flex:1,padding:20,paddingTop:50},
  title:{fontSize:50,fontWeight:'bold',marginBottom:20,textAlign:'center'},
  input:{height:40,borderWidth:1,borderRadius:5,paddingHorizontal:10,marginBottom:10},
  card:{padding:15,borderRadius:5,marginBottom:5},
  button:{paddingVertical:12,borderRadius:8,alignItems:'center',marginVertical:5},
  buttonText:{color:'#fff',fontSize:18,fontWeight:'bold'},
  menu:{flexDirection:'row',justifyContent:'space-around',paddingVertical:15,borderTopWidth:1,borderColor:'#ccc'},
  menuItem:{fontSize:16,fontWeight:'bold'},
  row:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20},
  label:{fontSize:18},
  sectionTitle:{fontSize:22,fontWeight:'bold',marginTop:20,marginBottom:10}
});

const styles2 = StyleSheet.create({
imagem:{
  width:700,
  height:400,
  resizeMode: 'contain',
  verticalAlign: 'center',
  
}
});
