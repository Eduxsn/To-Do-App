import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { TaskCard } from './src/components/TaskCard/TaskCard';

export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  


  const handleAddTask = () => {
    if(task === "") {
      console.log(taskItems)

    } else {
      setTaskItems([...taskItems, task])
      // setTask(null)
    }
  }

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const showIndex = (taskName) => {
    console.log(taskName)
  }
  
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Olá Eduardo</Text>

      <Text style={styles.subTitle}>CRIAR UM TO-DO</Text>
      <Text style={styles.subTitleText}>O que você quer lembrar?</Text>

      <TextInput style={styles.input} placeholder={"ex: Comprar Café"} onChangeText={setTask} ></TextInput>

      <Text style={styles.categoryTitle}>Escolha uma categoria</Text>

      <View style={styles.category}>
        <View style={styles.categoryCard}>
          <View style={[styles.categoryDot, styles.workDot]}></View>
          <View style={styles.categoryText}>
            <Text>Trabalho</Text>
          </View>
        </View>

        <View style={styles.categoryCard}>
          <View style={[styles.categoryDot, styles.personalDot]}></View>
          <View style={styles.categoryText}>
            <Text>Pessoal</Text>
          </View>
        </View>

      </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.addButton} onPress={() => handleAddTask()} activeOpacity={.7} >
            <Text style={styles.buttonText}>ADD TODO</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.worksTitle}>Lista de tarefas</Text>

        {
          taskItems.map((item, index) => {
            return (
                <TouchableOpacity key={index} onPress={showIndex(index)}>
                  <TaskCard taskName={item} remove={handleDeleteTask} />
                </TouchableOpacity>
              
              ) 
          })
        }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: '600',
    color: '#7f7f7f',
    marginBottom: 25,
  },
  subTitle: {
    color: '#7f7f7f',
    fontSize: 14,
    marginBottom: 6,
  },
  subTitleText: {
    color: '#7f7f7f',
    fontSize: 12,
    fontWeight: '600'
  },
  input: {
    marginTop: 8,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  categoryTitle: {
    color: '#7f7f7f',
    marginTop: 20,
    fontWeight: '600'
  },
  category: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#FFF',
    paddingHorizontal: 56,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryText: {
    color: '#7f7f7f',
  },
  categoryDot: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderRadius: 60,
    marginBottom: 6
  },
  workDot: {
    borderColor: '#1000c4'
  },
  personalDot: {
    borderColor: '#ff4ddb'
  },
  buttonArea: {
    marginTop: 12
  },
  addButton: {
    backgroundColor: '#ea49ac',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600'
  },
  worksTitle: {
    color: '#7f7f7f',
    marginTop: 20,
    fontWeight: '600',
    marginBottom: 10,
  }
});
