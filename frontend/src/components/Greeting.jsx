import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <a onClick={() => setGreeting(randomMessage())}>
        <h3>{greeting}! Thanks for visiting.</h3>
      </a>
    </div>
  );
}
