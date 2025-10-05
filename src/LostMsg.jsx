export default function LostMsg({ lang }) {
  const ripMessages = [
    `Goodbye ${lang}, the world will miss you.`,
    `Farewell ${lang}, your syntax lives on in our hearts.`,
    `Rest in peace ${lang}, your logic was legendary.`,
    `Gone but not forgotten, ${lang}.`,
    `${lang} has exited with status: eternal sleep.`,
    `The compiler won't run without you, ${lang}.`,
    `Goodbye ${lang}, your functions will echo forever.`,
    `Rest easy ${lang}, your code was poetry.`,
    `${lang} has been deprecated from existence.`,
    `Goodbye ${lang}, your last guess was your last breath.`,
    `Rest in peace ${lang}, no more bugs to fix.`,
    `The stack is empty, ${lang} is gone.`,
    `${lang} threw its final exception.`,
    `Goodbye ${lang}, your variables are now null.`,
  ]

  const randomIndex = Math.floor(Math.random() * ripMessages.length);
  const message = ripMessages[randomIndex];

  return <p>{message}</p>;
}