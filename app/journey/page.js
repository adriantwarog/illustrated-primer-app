'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Markdown from 'react-markdown';

// Add markdown styling configuration
const markdownComponents = {
  h1: ({ node, ...props }) => (
    <h1 {...props} className="text-5xl font-bold mb-6 text-gray-800 font-[family-name:var(--font-colchester)]" />
  ),
  h2: ({ node, ...props }) => (
    <h2 {...props} className="text-4xl font-bold mb-5 text-gray-800 font-[family-name:var(--font-colchester)]" />
  ),
  h3: ({ node, ...props }) => (
    <h3 {...props} className="text-3xl font-bold mb-4 text-gray-800 font-[family-name:var(--font-colchester)]" />
  ),
  p: ({ node, ...props }) => (
    <p {...props} className="text-xl mb-4 leading-relaxed text-gray-700" />
  ),
  ul: ({ node, ...props }) => (
    <ul {...props} className="list-disc list-inside mb-4 space-y-2" />
  ),
  li: ({ node, ...props }) => (
    <li {...props} className="text-xl text-gray-700" />
  ),
  code: ({ node, ...props }) => (
    <code {...props} className="bg-gray-100 rounded px-2 py-1 font-mono text-sm" />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote {...props} className="border-l-4 border-gray-300 pl-4 italic my-4" />
  ),
};

function capitalizeFirstLetter(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
}

export default function Journey() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const topic = searchParams.get('topic');
  const capitalizedName = capitalizeFirstLetter(name);
  const [journeyContent, setJourneyContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        // const response = await fetch(`/journey/api?name=${encodeURIComponent(name)}&topic=${encodeURIComponent(topic)}`);
        // console.log('Response:', response);
        // const data = await response.json();
        // if (data.error) {
        //   throw new Error(data.error);
        // }
        // setJourneyContent(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching content:', error);
        setJourneyContent('Failed to load content');
        setIsLoading(false);
      }
    }

    if (topic) {
      fetchContent();
    }
  }, [topic, name]);

  return (
    <>
      <Link href="/">
        <Image
          src="/cross.svg"
          width={40}
          height={40}
          alt="Back to home"
          className="fixed top-14 left-14 z-50 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </Link>

      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed top-4 left-4 z-40"
      />
      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed top-4 right-4 z-50 rotate-90"
      />
      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed bottom-4 left-4 z-50 -rotate-90"
      />
      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed bottom-4 right-4 z-50 rotate-180"
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-0">
        
        <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-5xl">
          <div className="w-[80%] aspect-[16/9] rounded-lg bg-gray-200 animate-pulse mb-8" />
          <h1 className="text-6xl mb-2 font-[family-name:var(--font-colchester)]">
            Welcome, {capitalizedName}
          </h1>
          
          <p className="text-4xl text-center">
            Let's begin your journey into {topic}
          </p>

          {isLoading ? (
            <div className="w-[80%] relative">
              <div className="w-full aspect-[16/9] rounded-lg bg-gray-200 animate-pulse mb-8" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-gray-400">Generating your personalized journey...</span>
              </div>
            </div>
          ) : (
            <div className="w-[80%] max-w-none">
              <div className="text-4xl mb-8">
                {journeyContent}
              </div>
              <Markdown components={markdownComponents}>
                {markdownContent}
              </Markdown>
            </div>
          )}
        </main>
      </div>
    </>
  );
} 

const markdownContent = String.raw`
### Chapter 1: Through the JavaScript Looking Glass

Adrian was an ordinary young coder, always curious and eager to learn. One day, while tinkering with his computer, he stumbled upon a peculiar book titled "JavaScript Adventures." As he opened it, a whirlwind of code and colors enveloped him, pulling him into a fantastical world—a world where JavaScript was not just a language but a living, breathing realm.

He found himself in a lush forest, where the trees whispered snippets of code. A white rabbit, wearing a waistcoat and holding a stopwatch, dashed past him. "I'm late for a very important function!" it exclaimed. Intrigued, Adrian followed the rabbit, diving deeper into the heart of JavaScript Land.

### Chapter 2: The Variables of Wonderland

Adrian soon arrived in a whimsical place reminiscent of Wonderland. Here, variables floated like balloons, each labeled with names like \`let\`, \`const\`, and \`var\`. A Cheshire Cat appeared, grinning widely. "Variables are the building blocks of your journey," it purred. "They store your data, your thoughts, your dreams."

Adrian reached out and grabbed a \`let\` balloon. Instantly, it transformed into a glowing orb, displaying the message: \`let curiosity = "boundless";\`. The Cheshire Cat vanished, leaving behind a trail of semicolons.

### Chapter 3: The Looping Caterpillar

Continuing his journey, Adrian encountered a caterpillar lounging on a mushroom, surrounded by swirling loops of smoke. "Loops," it drawled, "are the rhythm of our world. They repeat actions, like the ticking of a clock."

The caterpillar demonstrated with a puff of smoke, forming a loop:  
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  console.log(\`Iteration \${i}\`);
}
\`\`\`
With each iteration, the mushroom glowed brighter. "Beware of infinite loops," the caterpillar warned, "lest you be trapped in their endless dance."

### Chapter 4: Promises and the Async Tea Party

Adrian soon arrived at a Mad Hatter-style tea party, but instead of teapots, the table was filled with pending, resolved, and rejected promises. The host, a quirky figure named Async, cheerfully invited Adrian to join.

"Ah, you’re just in time! We’re learning about Promises and async/await—you can’t enjoy tea without them!" Async declared, serving a cup with floating code.

Async demonstrated with a flourish:  
\`\`\`javascript
function teaParty() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Tea is ready!"), 1000);
  });
}

async function enjoyTea() {
  const message = await teaParty();
  console.log(message);
}

enjoyTea();
\`\`\`
Adrian watched in awe as the code brewed a perfect cup of tea, understanding the magic of asynchronous operations.

### Chapter 5: The Array Forest

Venturing further, Adrian entered a dense forest where arrays grew like trees, each branch holding a different element. A friendly scarecrow greeted him, explaining, "Arrays store collections of data. They’re like lists, but with a twist!"

The scarecrow handed Adrian an array:  
\`\`\`javascript
let companions = ["Scarecrow", "Tinman", "Lion"];
\`\`\`
"Use them wisely," the scarecrow advised, "for they will aid you in your quest."

### Chapter 6: DOM Dragons and the Browser Castle

Adrian arrived at Browser Castle, where a giant DOM dragon guarded the gates. "To enter, you must manipulate the DOM!" the dragon boomed.

"DOM?" Adrian asked.

"The Document Object Model—it’s how everything on a web page is structured! You can add, remove, or change elements right from your code!" the dragon explained.

Adrian thought quickly and tried:  
\`\`\`javascript
let message = document.createElement('p');
message.textContent = "Adrian has entered the castle!";
document.body.appendChild(message);
\`\`\`
With a mighty roar, the DOM dragon allowed Adrian through. Inside the castle, elements floated in midair, rearranging themselves as Adrian practiced manipulating them. He knew he was mastering JavaScript now.

### Chapter 7: The Quest for the Golden Console

At the heart of JavaScript Land lay the Golden Console, the ultimate debugging tool. Adrian had learned much, but he needed the console to solidify his understanding.

On his journey, he encountered errors and bugs—some tricky, some silly. But with each error message, he grew wiser.

Finally, he reached the Golden Console. When he typed:  
\`\`\`javascript
console.log("Adventure complete!");
\`\`\`
The console gleamed, and all of JavaScript Land erupted in celebration. The functions danced, the arrays cheered, and even the loops applauded. Adrian had become a true adventurer of JavaScript.

### Chapter 8: Returning Home

Suddenly, the book reappeared and began swirling again, pulling Adrian back to his desk. He landed with a soft thud, the book closing shut. Adrian smiled—what a journey it had been! He knew now that JavaScript wasn’t just code; it was a world of creativity, logic, and wonder.

He opened his text editor, ready to embark on his next coding adventure.

---

And so, Adrian’s journey in JavaScript Land came to an end, but the real adventure—building, creating, and exploring—was just beginning. **The End.**
`;