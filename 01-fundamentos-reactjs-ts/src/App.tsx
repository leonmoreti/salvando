import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';
import { Avatar } from './components/Avatar';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/leonmoreti.png',
        name: 'Leon Moreti',
        role: 'Frontend Developer'
      },
      content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no meu NLW Return, evento da Rockseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content:  'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-11-29 20:00:00'),
},
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/leonmoreti.png',
    name: 'Leon Moreti',
    role: 'Frontend Developer'
  },
  content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no meu NLW Return, evento da Rockseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content:  'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-05 20:00:00'),
  },
];

//iteração

export function App(){
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
