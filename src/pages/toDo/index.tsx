import MainTitle from '../components/mainTitle/MainTitle';
import Layout from '../components/layout/Layout';
import ToDoList from '../components/toDo/ToDoList';

export default function Todo() {
  return (
    <Layout>
      <MainTitle title='할일' />
      <ToDoList />
    </Layout>
  );
}
