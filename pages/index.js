import { useState } from 'react';

import Image from 'next/image';

import Link from 'next/link';

function ProfilePic() {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="profile pic"
      />
    </div>
  )
}

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

      <ProfilePic />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like {likes}</button>
    </div>
  )
}