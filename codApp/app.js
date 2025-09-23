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
  const [profileName, setProfileName] = useState('João');
  const [profileEmail, setProfileEmail] = useState('joao@email.com');
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
        <Text style={[styles.title,{color: theme.color}]}>Bem-vindo ao App de Receitas</Text>
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
        image: 'https://i.imgur.com/9Q9pX3v.jpg',
        ingredients: ['2 xícaras de açúcar', '3 ovos', '1 xícara de chocolate em pó', '1 xícara de leite', '2 xícaras de farinha'],
        steps: ['Pré-aqueça o forno a 180°C', 'Misture os ingredientes secos', 'Adicione ovos e leite', 'Coloque na forma', 'Asse por 40 minutos']
      },
      'Panqueca de Banana': {
        image: 'https://i.imgur.com/jL1lBvH.jpg',
        ingredients: ['2 bananas maduras', '2 ovos', '1/2 xícara de farinha', '1 colher de sopa de óleo'],
        steps: ['Amasse as bananas', 'Misture ovos e farinha', 'Aqueça a frigideira', 'Cozinhe cada panqueca', 'Sirva quente']
      },
      'Salada de Frango': {
        image: 'https://i.imgur.com/BJfr8Ru.jpg',
        ingredients: ['200g de frango cozido', 'Alface', 'Tomate', 'Cenoura ralada', 'Molho de sua preferência'],
        steps: ['Corte os vegetais', 'Desfie o frango', 'Misture todos os ingredientes', 'Adicione o molho', 'Sirva']
      },
      'Pizza Margherita': {
        image: 'https://i.imgur.com/7fvh3Yp.jpg',
        ingredients: ['Massa de pizza', 'Molho de tomate', 'Queijo mussarela', 'Manjericão'],
        steps: ['Pré-aqueça o forno', 'Abra a massa', 'Espalhe molho e queijo', 'Adicione manjericão', 'Asse por 15-20 minutos']
      },
      'Smoothie de Morango': {
        image: 'https://i.imgur.com/R6l2s7B.jpg',
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
  title:{fontSize:28,fontWeight:'bold',marginBottom:20,textAlign:'center'},
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
