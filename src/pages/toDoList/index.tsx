import MainTitle from '../components/mainTitle/MainTitle';
import Layout from '../components/layout/Layout';
import Todo from '../components/toDo/ToDo';

export default function TodoList() {
  return (
    <Layout>
      <MainTitle title='할일' />
      <Todo />
    </Layout>
  );
}
