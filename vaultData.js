const quotes = [
  // STOIC QUOTES (20)
  {
    id: 1,
    category: 'stoic',
    en: 'You have power over your mind - not outside events. Realize this, and you will find strength. – Marcus Aurelius',
    es: 'Tienes poder sobre tu mente, no sobre los eventos externos. Date cuenta de esto, y encontrarás fuerza. – Marcus Aurelius'
  },
  {
    id: 2,
    category: 'stoic',
    en: 'The impediment to action advances action. What stands in the way becomes the way. – Marcus Aurelius',
    es: 'El impedimento para la acción hace avanzar la acción. Lo que se interpone en el camino se convierte en el camino. – Marcus Aurelius'
  },
  {
    id: 3,
    category: 'stoic',
    en: 'It is not what happens to you, but how you react to it that matters. – Epictetus',
    es: 'No es lo que te sucede, sino cómo reaccionas a ello lo que importa. – Epictetus'
  },
  {
    id: 4,
    category: 'stoic',
    en: 'We suffer more often in imagination than in reality. – Seneca',
    es: 'Sufrimos más a menudo en la imaginación que en la realidad. – Seneca'
  },
  {
    id: 5,
    category: 'stoic',
    en: 'The best revenge is not to be like your enemy. – Marcus Aurelius',
    es: 'La mejor venganza es no ser como tu enemigo. – Marcus Aurelius'
  },
  {
    id: 6,
    category: 'stoic',
    en: 'Wealth consists in not having great possessions, but in having few wants. – Epictetus',
    es: 'La riqueza consiste no en tener grandes posesiones, sino en tener pocas necesidades. – Epictetus'
  },
  {
    id: 7,
    category: 'stoic',
    en: 'The willing, destiny guides them. The unwilling, destiny drags them. – Seneca',
    es: 'A los dispuestos, el destino los guía. A los reacios, el destino los arrastra. – Seneca'
  },
  {
    id: 8,
    category: 'stoic',
    en: 'First say to yourself what you would be; and then do what you have to do. – Epictetus',
    es: 'Primero dite a ti mismo lo que quieres ser; y luego haz lo que tienes que hacer. – Epictetus'
  },
  {
    id: 9,
    category: 'stoic',
    en: 'The mind that is anxious about future misfortunes is miserable. – Seneca',
    es: 'La mente que está ansiosa por las desgracias futuras es miserable. – Seneca'
  },
  {
    id: 10,
    category: 'stoic',
    en: 'Confine yourself to the present. – Marcus Aurelius',
    es: 'Limítate al presente. – Marcus Aurelius'
  },
  {
    id: 11,
    category: 'stoic',
    en: 'Man is disturbed not by things, but by the views he takes of them. – Epictetus',
    es: 'El hombre no se perturba por las cosas, sino por las opiniones que tiene de ellas. – Epictetus'
  },
  {
    id: 12,
    category: 'stoic',
    en: 'The happiness of your life depends upon the quality of your thoughts. – Marcus Aurelius',
    es: 'La felicidad de tu vida depende de la calidad de tus pensamientos. – Marcus Aurelius'
  },
  {
    id: 13,
    category: 'stoic',
    en: 'Nothing, to my way of thinking, is a better proof of a well-ordered mind than a man\'s ability to stop just where he is. – Seneca',
    es: 'Nada, en mi forma de pensar, es mejor prueba de una mente bien ordenada que la capacidad de un hombre para detenerse justo donde está. – Seneca'
  },
  {
    id: 14,
    category: 'stoic',
    en: 'You are an actor in a play, which is as the author wants it to be. – Epictetus',
    es: 'Eres un actor en una obra, que es como el autor quiere que sea. – Epictetus'
  },
  {
    id: 15,
    category: 'stoic',
    en: 'How much trouble he avoids who does not look to see what his neighbor says or does. – Marcus Aurelius',
    es: 'Cuántos problemas evita quien no mira lo que dice o hace su vecino. – Marcus Aurelius'
  },
  {
    id: 16,
    category: 'stoic',
    en: 'Every new beginning comes from some other beginning\'s end. – Seneca',
    es: 'Cada nuevo comienzo viene del final de algún otro comienzo. – Seneca'
  },
  {
    id: 17,
    category: 'stoic',
    en: 'Don\'t explain your philosophy. Embody it. – Epictetus',
    es: 'No expliques tu filosofía. Encárnala. – Epictetus'
  },
  {
    id: 18,
    category: 'stoic',
    en: 'The first and best victory is to conquer self. – Plato',
    es: 'La primera y mejor victoria es conquistarse a uno mismo. – Plato'
  },
  {
    id: 19,
    category: 'stoic',
    en: 'He who conquers others is strong; he who conquers himself is mighty. – Lao Tzu',
    es: 'Quien conquista a otros es fuerte; quien se conquista a sí mismo es poderoso. – Lao Tzu'
  },
  {
    id: 20,
    category: 'stoic',
    en: 'The cucumber becomes bitter. Throw it away. There are briars in the road. Turn aside from them. This is enough. – Marcus Aurelius',
    es: 'El pepino se vuelve amargo. Tíralo. Hay espinas en el camino. Apártate de ellas. Esto es suficiente. – Marcus Aurelius'
  },

  // POWER QUOTES (20)
  {
    id: 21,
    category: 'power',
    en: 'The supreme excellence is to subdue the enemy without fighting. – Sun Tzu',
    es: 'La suprema excelencia es someter al enemigo sin luchar. – Sun Tzu'
  },
  {
    id: 22,
    category: 'power',
    en: 'Nearly all men can stand adversity, but if you want to test a man\'s character, give him power. – Abraham Lincoln',
    es: 'Casi todos los hombres pueden soportar la adversidad, pero si quieres probar el carácter de un hombre, dale poder. – Abraham Lincoln'
  },
  {
    id: 23,
    category: 'power',
    en: 'Power concedes nothing without a demand. It never did and it never will. – Frederick Douglass',
    es: 'El poder no concede nada sin una demanda. Nunca lo hizo y nunca lo hará. – Frederick Douglass'
  },
  {
    id: 24,
    category: 'power',
    en: 'Knowledge is power. Information is liberating. – Kofi Annan',
    es: 'El conocimiento es poder. La información es liberadora. – Kofi Annan'
  },
  {
    id: 25,
    category: 'power',
    en: 'The key to successful leadership today is influence, not authority. – Ken Blanchard',
    es: 'La clave del liderazgo exitoso hoy es la influencia, no la autoridad. – Ken Blanchard'
  },
  {
    id: 26,
    category: 'power',
    en: 'Power is not only what you have but what the enemy thinks you have. – Saul Alinsky',
    es: 'El poder no es solo lo que tienes, sino lo que el enemigo cree que tienes. – Saul Alinsky'
  },
  {
    id: 27,
    category: 'power',
    en: 'The measure of a man is what he does with power. – Plato',
    es: 'La medida de un hombre es lo que hace con el poder. – Plato'
  },
  {
    id: 28,
    category: 'power',
    en: 'Power tends to corrupt, and absolute power corrupts absolutely. – Lord Acton',
    es: 'El poder tiende a corromper, y el poder absoluto corrompe absolutamente. – Lord Acton'
  },
  {
    id: 29,
    category: 'power',
    en: 'The most powerful weapon on earth is the human soul on fire. – Ferdinand Foch',
    es: 'El arma más poderosa en la tierra es el alma humana en llamas. – Ferdinand Foch'
  },
  {
    id: 30,
    category: 'power',
    en: 'Power is the ability to achieve purpose, power is the ability to effect change. – Martin Luther King Jr.',
    es: 'El poder es la capacidad de lograr un propósito, el poder es la capacidad de efectuar cambios. – Martin Luther King Jr.'
  },
  {
    id: 31,
    category: 'power',
    en: 'Power is like being a lady... if you have to tell people you are, you aren\'t. – Margaret Thatcher',
    es: 'El poder es como ser una dama... si tienes que decirle a la gente que lo eres, no lo eres. – Margaret Thatcher'
  },
  {
    id: 32,
    category: 'power',
    en: 'True power is sat so reposed that even your enemies cannot find it. – Ralph Waldo Emerson',
    es: 'El verdadero poder está tan en reposo que incluso tus enemigos no pueden encontrarlo. – Ralph Waldo Emerson'
  },
  {
    id: 33,
    category: 'power',
    en: 'Power without a nation\'s confidence is nothing. – Catherine the Great',
    es: 'El poder sin la confianza de una nación no es nada. – Catalina la Grande'
  },
  {
    id: 34,
    category: 'power',
    en: 'The paradox of power is that we gain power by giving it away. – James Autry',
    es: 'La paradoja del poder es que ganamos poder al darlo. – James Autry'
  },
  {
    id: 35,
    category: 'power',
    en: 'Power is not revealed by striking hard or often, but by striking true. – Honoré de Balzac',
    es: 'El poder no se revela golpeando fuerte o a menudo, sino golpeando certero. – Honoré de Balzac'
  },
  {
    id: 36,
    category: 'power',
    en: 'The ultimate measure of a man is not where he stands in moments of comfort, but where he stands at times of challenge. – Martin Luther King Jr.',
    es: 'La medida final de un hombre no es dónde se sitúa en momentos de comodidad, sino dónde se sitúa en tiempos de desafío. – Martin Luther King Jr.'
  },
  {
    id: 37,
    category: 'power',
    en: 'Leadership is not about being in charge. It\'s about taking care of those in your charge. – Simon Sinek',
    es: 'El liderazgo no se trata de estar a cargo. Se trata de cuidar a los que están a tu cargo. – Simon Sinek'
  },
  {
    id: 38,
    category: 'power',
    en: 'The best way to find out if you can trust somebody is to trust them. – Ernest Hemingway',
    es: 'La mejor manera de averiguar si puedes confiar en alguien es confiar en ellos. – Ernest Hemingway'
  },
  {
    id: 39,
    category: 'power',
    en: 'A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell',
    es: 'Un líder es alguien que conoce el camino, va por el camino y muestra el camino. – John C. Maxwell'
  },
  {
    id: 40,
    category: 'power',
    en: 'The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan',
    es: 'El líder más grande no es necesariamente el que hace las cosas más grandes. Es el que hace que la gente haga las cosas más grandes. – Ronald Reagan'
  },

  // NEGOTIATION QUOTES (20)
  {
    id: 41,
    category: 'negotiation',
    en: 'The most important trip you may take in life is meeting people halfway. – Henry Boye',
    es: 'El viaje más importante que puedes hacer en la vida es encontrarte con la gente a medio camino. – Henry Boye'
  },
  {
    id: 42,
    category: 'negotiation',
    en: 'In business, you don\'t get what you deserve, you get what you negotiate. – Chester Karrass',
    es: 'En los negocios, no obtienes lo que mereces, obtienes lo que negocias. – Chester Karrass'
  },
  {
    id: 43,
    category: 'negotiation',
    en: 'The key to successful negotiation is to shift the conversation from a battle over positions to a collaboration over interests. – Roger Fisher',
    es: 'La clave de la negociación exitosa es cambiar la conversación de una batalla por posiciones a una colaboración por intereses. – Roger Fisher'
  },
  {
    id: 44,
    category: 'negotiation',
    en: 'Negotiation is the art of letting someone else have your way. – Daniele Vare',
    es: 'La negociación es el arte de dejar que alguien más haga las cosas a tu manera. – Daniele Vare'
  },
  {
    id: 45,
    category: 'negotiation',
    en: 'He who has learned to disagree without being disagreeable has discovered the most valuable secret of negotiation. – Robert Estabrook',
    es: 'Quien ha aprendido a estar en desacuerdo sin ser desagradable ha descubierto el secreto más valioso de la negociación. – Robert Estabrook'
  },
  {
    id: 46,
    category: 'negotiation',
    en: 'The secret of getting ahead is getting started. The secret of getting started is breaking your overwhelming tasks into small manageable tasks. – Mark Twain',
    es: 'El secreto de salir adelante es empezar. El secreto de empezar es dividir tus tareas abrumadoras en tareas pequeñas y manejables. – Mark Twain'
  },
  {
    id: 47,
    category: 'negotiation',
    en: 'If you are not willing to risk the unusual, you will have to settle for the ordinary. – Jim Rohn',
    es: 'Si no estás dispuesto a arriesgar lo inusual, tendrás que conformarte con lo ordinario. – Jim Rohn'
  },
  {
    id: 48,
    category: 'negotiation',
    en: 'The aim of argument, or of discussion, should not be victory, but progress. – Joseph Joubert',
    es: 'El objetivo de la discusión, o del debate, no debe ser la victoria, sino el progreso. – Joseph Joubert'
  },
  {
    id: 49,
    category: 'negotiation',
    en: 'Listen with the intent to understand, not the intent to reply. – Stephen Covey',
    es: 'Escucha con la intención de entender, no con la intención de responder. – Stephen Covey'
  },
  {
    id: 50,
    category: 'negotiation',
    en: 'The single biggest problem in communication is the illusion that it has taken place. – George Bernard Shaw',
    es: 'El problema más grande en la comunicación es la ilusión de que ha tenido lugar. – George Bernard Shaw'
  },
  {
    id: 51,
    category: 'negotiation',
    en: 'You can get everything in life you want if you will just help enough other people get what they want. – Zig Ziglar',
    es: 'Puedes obtener todo en la vida que quieras si solo ayudas a suficientes otras personas a obtener lo que quieren. – Zig Ziglar'
  },
  {
    id: 52,
    category: 'negotiation',
    en: 'The most effective way to do it, is to do it. – Amelia Earhart',
    es: 'La manera más efectiva de hacerlo, es hacerlo. – Amelia Earhart'
  },
  {
    id: 53,
    category: 'negotiation',
    en: 'Silence is one of the hardest arguments to refute. – Josh Billings',
    es: 'El silencio es uno de los argumentos más difíciles de refutar. – Josh Billings'
  },
  {
    id: 54,
    category: 'negotiation',
    en: 'The wise find pleasure in water; the virtuous find pleasure in hills. – Confucius',
    es: 'Los sabios encuentran placer en el agua; los virtuosos encuentran placer en las colinas. – Confucio'
  },
  {
    id: 55,
    category: 'negotiation',
    en: 'Getting to yes requires that you see the situation from the other side. – Chris Voss',
    es: 'Llegar al sí requiere que veas la situación desde el otro lado. – Chris Voss'
  },
  {
    id: 56,
    category: 'negotiation',
    en: 'The goal is not to be perfect by the end. The goal is to be better today. – Chris Voss',
    es: 'El objetivo no es ser perfecto al final. El objetivo es ser mejor hoy. – Chris Voss'
  },
  {
    id: 57,
    category: 'negotiation',
    en: 'Tactical empathy is understanding the feelings and mindset of another in the moment and also hearing what is behind those feelings. – Chris Voss',
    es: 'La empatía táctica es entender los sentimientos y mentalidad de otro en el momento y también escuchar lo que está detrás de esos sentimientos. – Chris Voss'
  },
  {
    id: 58,
    category: 'negotiation',
    en: 'The beauty of empathy is that it doesn\'t demand that you agree with the other person\'s ideas. – Chris Voss',
    es: 'La belleza de la empatía es que no exige que estés de acuerdo con las ideas de la otra persona. – Chris Voss'
  },
  {
    id: 59,
    category: 'negotiation',
    en: 'Compromise is often a sign of weakness, or an admission of defeat. Strong men don\'t compromise. – Andrew Carnegie',
    es: 'El compromiso es a menudo una señal de debilidad, o una admisión de derrota. Los hombres fuertes no se comprometen. – Andrew Carnegie'
  },
  {
    id: 60,
    category: 'negotiation',
    en: 'The art of negotiation is about turning conflict into collaboration. – William Ury',
    es: 'El arte de la negociación es convertir el conflicto en colaboración. – William Ury'
  },

  // DISCIPLINE QUOTES (20)
  {
    id: 61,
    category: 'discipline',
    en: 'Discipline is the bridge between goals and accomplishment. – Jim Rohn',
    es: 'La disciplina es el puente entre las metas y el logro. – Jim Rohn'
  },
  {
    id: 62,
    category: 'discipline',
    en: 'Success is nothing more than a few simple disciplines, practiced every day. – Jim Rohn',
    es: 'El éxito no es más que unas pocas disciplinas simples, practicadas todos los días. – Jim Rohn'
  },
  {
    id: 63,
    category: 'discipline',
    en: 'We must all suffer from one of two pains: the pain of discipline or the pain of regret. – Jim Rohn',
    es: 'Todos debemos sufrir uno de dos dolores: el dolor de la disciplina o el dolor del arrepentimiento. – Jim Rohn'
  },
  {
    id: 64,
    category: 'discipline',
    en: 'Discipline is choosing between what you want now and what you want most. – Abraham Lincoln',
    es: 'La disciplina es elegir entre lo que quieres ahora y lo que más quieres. – Abraham Lincoln'
  },
  {
    id: 65,
    category: 'discipline',
    en: 'The price of excellence is discipline; the cost of mediocrity is disappointment. – William Arthur Ward',
    es: 'El precio de la excelencia es la disciplina; el costo de la mediocridad es la decepción. – William Arthur Ward'
  },
  {
    id: 66,
    category: 'discipline',
    en: 'Discipline yourself so others won\'t have to. – John Wooden',
    es: 'Disciplínate a ti mismo para que otros no tengan que hacerlo. – John Wooden'
  },
  {
    id: 67,
    category: 'discipline',
    en: 'With self-discipline most anything is possible. – Theodore Roosevelt',
    es: 'Con autodisciplina, casi todo es posible. – Theodore Roosevelt'
  },
  {
    id: 68,
    category: 'discipline',
    en: 'Discipline equals freedom. – Jocko Willink',
    es: 'La disciplina es igual a la libertad. – Jocko Willink'
  },
  {
    id: 69,
    category: 'discipline',
    en: 'Self-discipline is the ability to make yourself do what you should do, when you should do it, whether you feel like it or not. – Elbert Hubbard',
    es: 'La autodisciplina es la capacidad de hacer que te hagas lo que debes hacer, cuando debes hacerlo, te apetezca o no. – Elbert Hubbard'
  },
  {
    id: 70,
    category: 'discipline',
    en: 'The successful person has the habit of doing the things failures don\'t like to do. – Albert Gray',
    es: 'La persona exitosa tiene el hábito de hacer las cosas que a los fracasados no les gusta hacer. – Albert Gray'
  },
  {
    id: 71,
    category: 'discipline',
    en: 'Discipline is the foundation upon which all success is built. – Lailah Gifty Akita',
    es: 'La disciplina es la base sobre la cual se construye todo éxito. – Lailah Gifty Akita'
  },
  {
    id: 72,
    category: 'discipline',
    en: 'The pain of discipline weighs ounces while the pain of regret weighs tons. – Jim Rohn',
    es: 'El dolor de la disciplina pesa onzas mientras que el dolor del arrepentimiento pesa toneladas. – Jim Rohn'
  },
  {
    id: 73,
    category: 'discipline',
    en: 'Discipline is the refining fire by which talent becomes ability. – Roy L. Smith',
    es: 'La disciplina es el fuego refinador por el cual el talento se convierte en habilidad. – Roy L. Smith'
  },
  {
    id: 74,
    category: 'discipline',
    en: 'Discipline is liberation. – Jocko Willink',
    es: 'La disciplina es liberación. – Jocko Willink'
  },
  {
    id: 75,
    category: 'discipline',
    en: 'The discipline of writing something down is the first step toward making it happen. – Lee Iacocca',
    es: 'La disciplina de escribir algo es el primer paso para hacerlo realidad. – Lee Iacocca'
  },
  {
    id: 76,
    category: 'discipline',
    en: 'Discipline is the soul of an army. It makes small numbers formidable. – George Washington',
    es: 'La disciplina es el alma de un ejército. Hace que los números pequeños sean formidables. – George Washington'
  },
  {
    id: 77,
    category: 'discipline',
    en: 'Discipline is just choosing between what you want now and what you want most. – Augusta F. Kantra',
    es: 'La disciplina es simplemente elegir entre lo que quieres ahora y lo que más quieres. – Augusta F. Kantra'
  },
  {
    id: 78,
    category: 'discipline',
    en: 'The groundwork for all happiness is good health. – Leigh Hunt',
    es: 'La base de toda felicidad es la buena salud. – Leigh Hunt'
  },
  {
    id: 79,
    category: 'discipline',
    en: 'Discipline is wisdom and vice versa. – M. Scott Peck',
    es: 'La disciplina es sabiduría y viceversa. – M. Scott Peck'
  },
  {
    id: 80,
    category: 'discipline',
    en: 'No man is free who is not master of himself. – Epictetus',
    es: 'Ningún hombre es libre si no es dueño de sí mismo. – Epictetus'
  },

  // SOLARISM QUOTES (20)
  {
    id: 81,
    category: 'solarism',
    en: 'Like the sun, we must rise each day with renewed energy and purpose. – Carlos Solaris',
    es: 'Como el sol, debemos levantarnos cada día con energía y propósito renovados. – Carlos Solaris'
  },
  {
    id: 82,
    category: 'solarism',
    en: 'The sun teaches us that consistency creates light in the darkest places. – Elena Solaris',
    es: 'El sol nos enseña que la consistencia crea luz en los lugares más oscuros. – Elena Solaris'
  },
  {
    id: 83,
    category: 'solarism',
    en: 'Solar energy is not just about power, it\'s about the discipline to harness nature\'s consistency. – Marcus Solaris',
    es: 'La energía solar no es solo sobre poder, es sobre la disciplina para aprovechar la consistencia de la naturaleza. – Marcus Solaris'
  },
  {
    id: 84,
    category: 'solarism',
    en: 'The sun never negotiates its rising. It simply shows up, every day, with unwavering commitment. – Sofia Solaris',
    es: 'El sol nunca negocia su salida. Simplemente aparece, todos los días, con compromiso inquebrantable. – Sofia Solaris'
  },
  {
    id: 85,
    category: 'solarism',
    en: 'True power comes from within, like the nuclear fusion that powers our sun. – Diego Solaris',
    es: 'El verdadero poder viene del interior, como la fusión nuclear que alimenta nuestro sol. – Diego Solaris'
  },
  {
    id: 86,
    category: 'solarism',
    en: 'The sun gives without asking for anything in return. This is the highest form of leadership. – Ana Solaris',
    es: 'El sol da sin pedir nada a cambio. Esta es la forma más alta de liderazgo. – Ana Solaris'
  },
  {
    id: 87,
    category: 'solarism',
    en: 'Like photosynthesis, growth happens when we absorb the right energy consistently. – Roberto Solaris',
    es: 'Como la fotosíntesis, el crecimiento sucede cuando absorbemos la energía correcta de manera consistente. – Roberto Solaris'
  },
  {
    id: 88,
    category: 'solarism',
    en: 'The sun\'s discipline is perfect: it never misses a day, never arrives late, never makes excuses. – Carmen Solaris',
    es: 'La disciplina del sol es perfecta: nunca falta un día, nunca llega tarde, nunca pone excusas. – Carmen Solaris'
  },
  {
    id: 89,
    category: 'solarism',
    en: 'Solar wisdom: store energy during abundance to sustain yourself through scarcity. – Felipe Solaris',
    es: 'Sabiduría solar: almacena energía durante la abundancia para sostenerte durante la escasez. – Felipe Solaris'
  },
  {
    id: 90,
    category: 'solarism',
    en: 'The sun negotiates with no one, yet all life bends toward its light. – Lucia Solaris',
    es: 'El sol no negocia con nadie, sin embargo, toda la vida se inclina hacia su luz. – Lucia Solaris'
  },
  {
    id: 91,
    category: 'solarism',
    en: 'Solar panels teach us that the right positioning can multiply our power exponentially. – Andrés Solaris',
    es: 'Los paneles solares nos enseñan que la posición correcta puede multiplicar nuestro poder exponencialmente. – Andrés Solaris'
  },
  {
    id: 92,
    category: 'solarism',
    en: 'The sun is both patient and relentless. It teaches us the balance between persistence and acceptance. – Isabella Solaris',
    es: 'El sol es tanto paciente como implacable. Nos enseña el equilibrio entre persistencia y aceptación. – Isabella Solaris'
  },
{
  id: 93,
  category: 'solarism',
  en: 'Like the sun, true leaders illuminate others without diminishing their own light. – Gabriel Solaris',
  es: 'Como el sol, los verdaderos líderes iluminan a otros sin disminuir su propia luz. – Gabriel Solaris'
},
{ id: 94, category: "discipline", en: "Sow daily disciplines. Reap generational transformation.", es: "Siembra disciplinas diarias. Cosecha una transformación generacional." },
{ id: 95, category: "stoic", en: "Peace begins the moment you choose not to allow another person or event to control your emotions.", es: "La paz comienza en el momento en que eliges no permitir que otra persona o evento controle tus emociones." },
{ id: 96, category: "power", en: "Your focus is your superpower. What you give attention to expands.", es: "Tu enfoque es tu superpoder. Aquello a lo que prestas atención, se expande." },
{ id: 97, category: "negotiation", en: "Silence is never empty in negotiation; it’s full of answers.", es: "El silencio nunca está vacío en una negociación; está lleno de respuestas." },
{ id: 98, category: "discipline", en: "Do it with discipline or do it again with regret.", es: "Hazlo con disciplina o hazlo otra vez con arrepentimiento." },
{ id: 99, category: "solarism", en: "A day aligned with your values is worth a hundred spent in confusion.", es: "Un día alineado con tus valores vale más que cien vividos en confusión." },
{ id: 100, category: "solarism", en: "You are not late, you are just early for a timeline only you can create.", es: "No llegas tarde, solo llegas temprano a una línea de tiempo que solo tú puedes crear." }
];
