import { useState } from 'react';

import Link from 'next/link';

function Header({ title }) {
  return <h1>{ title ? title : 'Default Title' }</h1>;
}

export default function HomePage() {
  const names = ['Ada', 'Grace', 'Marg'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />

      <h2>Read <Link href="/posts/first-post">this page!</Link></h2>

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like {likes}</button>
    </div>
  )
}