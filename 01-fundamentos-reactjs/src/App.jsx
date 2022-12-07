import { Header } from './components/Header';
import { Post } from './Post';


import './global.css';

export function App(){
  return (
    <div>
      <Header />

      <Post
      author="Leon Moreti"
      content="Propriedades de uma função"
      />
      <Post
      author="Lomé"
      content="Uma nova propriedade"
      />
    </div>
  )
}
