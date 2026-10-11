export const lessons = [
  {
    id: 1, title: "My Nationality", theme: "Countries and identity", icon: "🌍", color: "purple",
    goal: "Ask where someone comes from and describe a person's nationality.",
    patterns: [
      { question: "Where are you from?", answer: "I'm from Iran.", note: "Use a country after “from”." },
      { question: "Are you Iranian?", answer: "Yes, I am. / No, I'm not.", note: "Answer with the matching form of “be”." },
      { question: "Where is Mina from?", answer: "She's from France.", note: "Use “is” for he, she, or it." },
    ],
    vocabulary: [
      ["country", "a nation or land", "Iran is a country."], ["nationality", "the country identity of a person", "My nationality is Iranian."],
      ["Iran — Iranian", "country — nationality", "They are Iranian."], ["France — French", "country — nationality", "He is French."],
      ["China — Chinese", "country — nationality", "She is Chinese."], ["Brazil — Brazilian", "country — nationality", "We are Brazilian."],
    ],
    sounds: "Practice spelling words carefully. Notice the “sh” sound in “English” and the “ch” sound in “Chinese.”",
    practice: { question: "Nima is from Brazil. He is …", options: ["Brazil", "Brazilian", "Brazilish"], answer: "Brazilian", explanation: "Brazil is the country; Brazilian describes a person." },
  },
  {
    id: 2, title: "My Week", theme: "Daily activities and time", icon: "📅", color: "mint",
    goal: "Talk about routines, days of the week, and when you do activities.",
    patterns: [
      { question: "What do you do in the morning?", answer: "I go to school.", note: "Use “I + verb” to describe a routine." },
      { question: "When do you study English?", answer: "On Monday mornings.", note: "Use “on” with a day or a day + part of day." },
      { question: "What do you do on Fridays?", answer: "I visit my relatives.", note: "Use “in the morning/afternoon/evening” for parts of a day." },
    ],
    vocabulary: [
      ["Monday–Friday", "weekdays", "I go to school on weekdays."], ["Saturday and Sunday", "the weekend", "We relax at the weekend."],
      ["morning", "the early part of the day", "I read in the morning."], ["afternoon", "the part after midday", "I play sports in the afternoon."],
      ["evening", "the later part of the day", "We have dinner in the evening."], ["usually", "most of the time", "I usually do my homework after school."],
    ],
    sounds: "Say the beginning blend in “study” without adding an extra vowel before the /st/ sound. Practise: study, stop, student.",
    practice: { question: "Which phrase is correct?", options: ["On Monday mornings", "At Monday mornings", "In Monday mornings"], answer: "On Monday mornings", explanation: "Use “on” with a named day, including a day + part of day." },
  },
  {
    id: 3, title: "My Abilities", theme: "Skills and things we can do", icon: "🎨", color: "coral",
    goal: "Ask about skills and abilities, and say what you or another person can do.",
    patterns: [
      { question: "Can you ride a bicycle?", answer: "Yes, I can. / No, I can't.", note: "Use “can” to ask about ability." },
      { question: "Are you good at drawing?", answer: "Yes, I am. / No, I'm not.", note: "Use “good at” + an activity." },
      { question: "Who can play tennis?", answer: "Reza can.", note: "Repeat “can” to identify a person who has the ability." },
    ],
    vocabulary: [
      ["draw", "make a picture", "I can draw a cat."], ["swim", "move through water", "Can you swim?"], ["ride a bicycle", "travel on a bike", "She can ride a bicycle."],
      ["cook", "prepare food", "My brother can cook."], ["play tennis", "take part in a racket sport", "They can play tennis."], ["good at", "skilled in something", "I'm good at singing."],
    ],
    sounds: "Notice common letter groups such as “oo” in “school” and “ll” in “well.” Read slowly, then say the whole word naturally.",
    practice: { question: "Choose the natural answer: “Can Sara swim?”", options: ["Yes, she can.", "Yes, she is.", "Yes, she does."], answer: "Yes, she can.", explanation: "Answer a “Can …?” question with “can” or “can't.”" },
  },
  {
    id: 4, title: "My Health", theme: "Health problems and advice", icon: "🩺", color: "sky",
    goal: "Describe common health problems and give simple, kind advice.",
    patterns: [
      { question: "What's wrong?", answer: "I have a headache.", note: "Use “I have a …” to describe a health problem." },
      { question: "Are you OK?", answer: "No, I have the flu.", note: "Ask politely when someone seems unwell." },
      { question: "I have a toothache.", answer: "Why don't you see a dentist?", note: "“Why don't you …?” is one way to suggest an action." },
    ],
    vocabulary: [
      ["headache", "pain in your head", "I have a headache."], ["toothache", "pain in a tooth", "He has a toothache."],
      ["stomachache", "pain in your stomach", "She has a stomachache."], ["flu", "an illness that can cause fever and aches", "I have the flu."],
      ["cold", "a common illness", "He has a cold."], ["dentist", "a professional who cares for teeth", "You can ask a dentist about tooth pain."],
    ],
    sounds: "Listen for the “ch” sound in “headache” and practise the vowel pattern “ea” in words such as “head.”",
    practice: { question: "Your friend says, “I have a toothache.” What is a helpful suggestion?", options: ["See a dentist.", "Run a race.", "Skip breakfast."], answer: "See a dentist.", explanation: "A dentist can help with problems involving teeth." },
  },
  {
    id: 5, title: "My City", theme: "Places and describing a city", icon: "🏙️", color: "purple",
    goal: "Describe a city, say where it is, and ask about places and facilities.",
    patterns: [
      { question: "Where is Isfahan?", answer: "It's in the center of Iran.", note: "Use “in” to give a general location." },
      { question: "What's the city like?", answer: "It's a big, beautiful city.", note: "Use adjectives to describe a place." },
      { question: "Are there any museums?", answer: "Yes, there are. / No, there aren't.", note: "Use “Are there any …?” for plural places." },
    ],
    vocabulary: [
      ["museum", "a place to see objects of history or art", "Our city has a museum."], ["park", a public green space", "There is a park near my home."],
      ["library", a place to read or borrow books", "The library is quiet."], ["metro", an underground city train system", "The metro is useful in a big city."],
      ["center", the middle area of a place", "The shop is in the city center."], ["famous", known by many people", "The city is famous for its old buildings."],
    ],
    sounds: "Practise the “th” sound in “think” and “three.” Notice that “ph” can sound like /f/, as in “phone.”",
    practice: { question: "Which question asks about plural places?", options: ["Is there a museum?", "Are there any museums?", "Where is the museum?"], answer: "Are there any museums?", explanation: "“Are there any …?” asks about more than one thing or place." },
  },
  {
    id: 6, title: "My Village", theme: "Village life, nature, and weather", icon: "🌦️", color: "mint",
    goal: "Describe a village, talk about its location, and discuss seasons and weather.",
    patterns: [
      { question: "What is the village like?", answer: "It's a small mountain village.", note: "Put descriptive words before the place noun." },
      { question: "What is it famous for?", answer: "It's famous for its gardens.", note: "Use “famous for” to name a special feature." },
      { question: "What's the weather like in winter?", answer: "It's cold and snowy.", note: "Use weather adjectives to describe conditions." },
    ],
    vocabulary: [
      ["village", "a small community in the countryside", "My grandparents live in a village."], ["mountain", "a very high natural area of land", "The village is near a mountain."],
      ["field", "an open area of land", "There are green fields near the village."], ["spring", "the season after winter", "The weather is mild in spring."],
      ["sunny", "with a lot of sunshine", "It is sunny today."], ["cloudy", "covered with clouds", "It is cloudy in autumn."],
    ],
    sounds: "Practise “wh” in “what” and “where,” and the “th” sound in “weather.” Keep each sound clear when speaking.",
    practice: { question: "Complete the sentence: “What's the weather … today?”", options: ["like", "from", "good at"], answer: "like", explanation: "The common question is “What's the weather like?”" },
  },
  {
    id: 7, title: "My Hobbies", theme: "Hobbies and free-time activities", icon: "🎧", color: "coral",
    goal: "Ask about hobbies, talk about free time, and suggest an activity.",
    patterns: [
      { question: "Do you have any hobbies?", answer: "Yes. I enjoy listening to stories.", note: "A hobby is something you enjoy doing." },
      { question: "What's your hobby?", answer: "Playing tennis.", note: "An activity ending in “-ing” can name a hobby." },
      { question: "What do you do in your free time?", answer: "I usually listen to music.", note: "Use “usually” to talk about a regular habit." },
    ],
    vocabulary: [
      ["hobby", "an activity you enjoy regularly", "Reading is my hobby."], ["free time", "time when you do not have work or school", "I draw in my free time."],
      ["listen to music", "pay attention to songs or sounds", "I listen to music after school."], ["read", "look at and understand written words", "I like to read stories."],
      ["go shopping", "visit shops to buy things", "We go shopping on Fridays."], ["play sports", "take part in physical games", "They play sports after school."],
    ],
    sounds: "Practise the “ing” ending in “playing” and “listening.” Notice the vowel patterns in “hobby,” “house,” and “out.”",
    practice: { question: "Which phrase names a hobby naturally?", options: ["Playing tennis", "Play tennis yesterday", "At tennis"], answer: "Playing tennis", explanation: "An activity with an -ing form can be used to name a hobby." },
  },
];
