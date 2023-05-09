import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';
import { Card, cardProps } from '../components/card/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<cardProps[]>([]);
  const [user, setUser] = useState({ name: "", avatar: "" });


  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  type apiResponse = {
    name: string;
    avatar_url: string;
  }

  type user = {
    name: string;
    avatar: string;
  }

  useEffect(() => {
    fetch('https://api.github.com/users/Luizh3nr1que')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} />
        </div>
      </header>

      <input type="text" placeholder="Digite o algo..." onChange={e => setStudentName(e.target.value)} />

      <button className='btn' type="button" onClick={handleAddStudent} >Adicionar</button>


      {
        students.map(student => (
          <Card key={student.time} name={student.name} time={student.time} />
        ))
      }

    </div >
  )
}

let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Veja a sua lista'
});
window.addEventListener('focus', () => {
  document.title = docTitle;
});




