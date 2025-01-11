import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase-config.js';

// Data for all 50 questions
const questions = [
  {
    question: "What is the significance of Makar Sankranti?",
    options: {
      A: "Transition of the Sun into Capricorn",
      B: "The beginning of the harvest season",
      C: "Sun moves to Leo",
      D: "Sun enters Sagittarius"
    },
    answer: "A"
  },
  {
    question: "Which Hindu deity is worshipped during Makar Sankranti?",
    options: {
      A: "Shiva",
      B: "Vishnu",
      C: "Sun God",
      D: "Krishna"
    },
    answer: "C"
  },
  {
    question: "On which date is Makar Sankranti usually celebrated?",
    options: {
      A: "January 1",
      B: "January 14/15",
      C: "February 5",
      D: "March 25"
    },
    answer: "B"
  },
  {
    question: "What marks the beginning of Makar Sankranti?",
    options: {
      A: "Festival of Lights",
      B: "Harvest season",
      C: "Winter solstice",
      D: "Spring season"
    },
    answer: "B"
  },
  {
    question: "Which direction does the Sun move towards after Makar Sankranti?",
    options: {
      A: "South",
      B: "North – Uttarayana",
      C: "East",
      D: "West"
    },
    answer: "B"
  },
  {
    question: "What is the traditional sweet made during Sankranti?",
    options: {
      A: "Gulab Jamun",
      B: "Laddoos",
      C: "Til ladoos",
      D: "Kheer"
    },
    answer: "C"
  },
  {
    question: "What is the primary ingredient in til ladoos?",
    options: {
      A: "Rice",
      B: "Sesame seeds and jaggery",
      C: "Sugar",
      D: "Coconut"
    },
    answer: "B"
  },
  {
    question: "What is the significance of flying kites during Sankranti?",
    options: {
      A: "Celebrating the Sun's movement and bonding",
      B: "Honoring the wind god",
      C: "Praying for rain",
      D: "Honoring ancestors"
    },
    answer: "A"
  },
  {
    question: "What is the name of Sankranti in Tamil Nadu?",
    options: {
      A: "Pongal",
      B: "Makar Vilakku",
      C: "Lohri",
      D: "Bihu"
    },
    answer: "A"
  },
  {
    question: "What do people boil during Pongal?",
    options: {
      A: "Rice and milk",
      B: "Lentils",
      C: "Tea",
      D: "Fruits"
    },
    answer: "A"
  },
  {
    question: "What is Sankranti called in Gujarat?",
    options: {
      A: "Uttarayan",
      B: "Makar Sankramana",
      C: "Lohri",
      D: "Pedda Panduga"
    },
    answer: "A"
  },
  {
    question: "What is Sankranti called in Punjab?",
    options: {
      A: "Uttarayan",
      B: "Lohri",
      C: "Pongal",
      D: "Magh Bihu"
    },
    answer: "B"
  },
  {
    question: "What is Sankranti called in Andhra Pradesh and Telangana?",
    options: {
      A: "Pedda Panduga",
      B: "Makara Sankramana",
      C: "Pongal",
      D: "Lohri"
    },
    answer: "A"
  },
  {
    question: "What is Sankranti called in Karnataka?",
    options: {
      A: "Makar Sankramana",
      B: "Uttarayan",
      C: "Lohri",
      D: "Pedda Panduga"
    },
    answer: "A"
  },
  {
    question: "What is the name of the festival in Assam?",
    options: {
      A: "Magh Bihu or Bhogali Bihu",
      B: "Pongal",
      C: "Lohri",
      D: "Makara Vilakku"
    },
    answer: "A"
  },
  {
    question: "What is the traditional game played in Punjab during Lohri?",
    options: {
      A: "Bonfire circle dance",
      B: "Kabaddi",
      C: "Cricket",
      D: "Polo"
    },
    answer: "A"
  },
  {
    question: "What do people eat in Bengal during Sankranti?",
    options: {
      A: "Pithas",
      B: "Laddoos",
      C: "Chole Bhature",
      D: "Samosas"
    },
    answer: "A"
  },
  {
    question: "What is the special dish prepared in Maharashtra for Sankranti?",
    options: {
      A: "Pav Bhaji",
      B: "Tilgul",
      C: "Dosa",
      D: "Vada Pav"
    },
    answer: "B"
  },
  {
    question: "What color is considered auspicious during Sankranti?",
    options: {
      A: "Red",
      B: "White",
      C: "Black",
      D: "Yellow"
    },
    answer: "C"
  },
  {
    question: "What do people exchange to symbolize harmony?",
    options: {
      A: "Rice and sugar",
      B: "Sesame and jaggery",
      C: "Water and milk",
      D: "Chocolates and sweets"
    },
    answer: "B"
  },
  {
    question: "What is a common activity besides kite flying during Sankranti?",
    options: {
      A: "Taking holy dips in rivers",
      B: "Dancing",
      C: "Baking cakes",
      D: "Planting trees"
    },
    answer: "A"
  },
  {
    question: "Which river is considered sacred for Sankranti dips?",
    options: {
      A: "Ganga",
      B: "Yamuna",
      C: "Godavari",
      D: "Saraswati"
    },
    answer: "A"
  },
  {
    question: "What do people decorate their homes with for Sankranti?",
    options: {
      A: "Flowers",
      B: "Rangoli",
      C: "Lanterns",
      D: "Paintings"
    },
    answer: "B"
  },
  {
    question: "What does the festival symbolize in rural areas?",
    options: {
      A: "Honoring ancestors",
      B: "Gratitude for a good harvest",
      C: "Praying for rain",
      D: "Preparing for the new year"
    },
    answer: "B"
  },
  {
    question: "What do women traditionally wear on Sankranti?",
    options: {
      A: "Sarees",
      B: "Jeans and t-shirts",
      C: "Kurta and leggings",
      D: "Western dresses"
    },
    answer: "A"
  },
  {
    question: "What do farmers do to celebrate Sankranti?",
    options: {
      A: "Worship cattle and harvest",
      B: "Host feasts",
      C: "Plant new crops",
      D: "Decorate farms"
    },
    answer: "A"
  },
  {
    question: "Which animal is often decorated in rural celebrations?",
    options: {
      A: "Cows",
      B: "Elephants",
      C: "Horses",
      D: "Dogs"
    },
    answer: "A"
  },
  {
    question: "What is the traditional dance performed during this festival?",
    options: {
      A: "Ballet",
      B: "Folk dances like Bhangra or Garba",
      C: "Waltz",
      D: "Kathak"
    },
    answer: "B"
  },
  {
    question: "What do people use to cut other kites during flying?",
    options: {
      A: "Scissors",
      B: "Manja – sharp kite string",
      C: "Knives",
      D: "Fingers"
    },
    answer: "B"
  },
  {
    question: "What are kites traditionally made of?",
    options: {
      A: "Wood and cloth",
      B: "Paper and bamboo sticks",
      C: "Plastic",
      D: "Metal and fabric"
    },
    answer: "B"
  },
  {
    question: "What is a common shout when someone’s kite is cut?",
    options: {
      A: "Jai Hind!",
      B: "Kai Po Che!",
      C: "Har Har Mahadev!",
      D: "Balle Balle!"
    },
    answer: "B"
  },
  {
    question: "Which state is famous for its International Kite Festival during Sankranti?",
    options: {
      A: "Rajasthan",
      B: "Gujarat",
      C: "Maharashtra",
      D: "Uttar Pradesh"
    },
    answer: "B"
  },
  {
    question: "What is a popular kite design seen during Sankranti?",
    options: {
      A: "Circular",
      B: "Star-shaped",
      C: "Diamond-shaped kites",
      D: "Heart-shaped"
    },
    answer: "C"
  },
  {
    question: "What do people cook in Karnataka during Sankranti?",
    options: {
      A: "Dosa",
      B: "Ellu-Bella",
      C: "Chole Bhature",
      D: "Vada"
    },
    answer: "B"
  },
  {
    question: "What do people light during Lohri in Punjab?",
    options: {
      A: "Oil lamps",
      B: "Firecrackers",
      C: "Bonfires",
      D: "Candles"
    },
    answer: "C"
  },
  {
    question: "What is the importance of jaggery during Sankranti?",
    options: {
      A: "Represents sweetness and warmth",
      B: "Symbolizes prosperity",
      C: "Represents knowledge",
      D: "Honors ancestors"
    },
    answer: "A"
  },
  {
    question: "What is Pongal in Tamil Nadu?",
    options: {
      A: "A sweet rice dish",
      B: "A type of dance",
      C: "A traditional sweet",
      D: "A greeting"
    },
    answer: "A"
  },
  {
    question: "What is eaten as a special dish during Magh Bihu?",
    options: {
      A: "Rice cakes and fish",
      B: "Laddoos",
      C: "Chole Bhature",
      D: "Sweet Pongal"
    },
    answer: "A"
  },
  {
    question: "What does Sankranti mark in astronomical terms?",
    options: {
      A: "Equinox",
      B: "Winter solstice transition",
      C: "Solar eclipse",
      D: "Summer solstice"
    },
    answer: "B"
  },
  {
    question: "What is the connection between Sankranti and Lord Krishna?",
    options: {
      A: "Krishna advised the Pandavas to wait for this day to fight Karna",
      B: "Krishna was born on this day",
      C: "Krishna performed a miracle on this day",
      D: "Krishna gave the Bhagavad Gita"
    },
    answer: "A"
  },
  {
    question: "Which Indian zodiac sign is associated with Sankranti?",
    options: {
      A: "Aquarius",
      B: "Leo",
      C: "Capricorn",
      D: "Pisces"
    },
    answer: "C"
  },
  {
    question: "What is the significance of Uttarayana in Hindu mythology?",
    options: {
      A: "Auspicious time for good deeds",
      B: "A time for fasting",
      C: "A time for harvest",
      D: "A time for rest"
    },
    answer: "A"
  },
  {
    question: "What does 'Makar' mean in Hindi?",
    options: {
      A: "Tiger",
      B: "Fish",
      C: "Crocodile or Capricorn",
      D: "Elephant"
    },
    answer: "C"
  },
  {
    question: "How many days is Pongal celebrated?",
    options: {
      A: "Two days",
      B: "Three days",
      C: "Four days",
      D: "Five days"
    },
    answer: "C"
  },
  {
    question: "What is the meaning of 'Ellu Bella'?",
    options: {
      A: "Rice and milk",
      B: "Sesame and jaggery mix",
      C: "Sugar and butter",
      D: "Rice and vegetables"
    },
    answer: "B"
  },
  {
    question: "What do children collect during Lohri?",
    options: {
      A: "Sweets, snacks, and money",
      B: "Flowers and fruits",
      C: "Fruits and vegetables",
      D: "Coins and rice"
    },
    answer: "A"
  },
  {
    question: "Which country besides India celebrates a similar festival?",
    options: {
      A: "Nepal – Maghe Sankranti",
      B: "Sri Lanka",
      C: "Bangladesh",
      D: "Pakistan"
    },
    answer: "A"
  },
  {
    question: "What does kite flying symbolize?",
    options: {
      A: "Celebration of harvest",
      B: "Freedom and joy",
      C: "Praying for good weather",
      D: "Honoring the Sun"
    },
    answer: "B"
  }
];

// Store all questions in Firebase
async function storeQuizQuestions() {
  const quizCollectionRef = 'quiz_questions'; // Firestore collection name

  for (let i = 0; i < questions.length; i++) {
    const questionData = questions[i];
    const questionId = (i + 1).toString(); // Sequential ID starting from 1

    try {
      // Store each question with the sequential document name
      await setDoc(doc(db, quizCollectionRef, questionId), questionData);
      console.log(`Question ${questionId} added successfully.`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

// Call the function to add questions
storeQuizQuestions();
