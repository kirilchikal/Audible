// One-off local dev utility: seeds a fresh Firestore project with the
// same book data the app already ships in src/Data/bookList.js, plus
// the single "Cart"/"Favourite" documents (id "0") the app expects.
//
// Usage: node --env-file=.env scripts/seedFirestore.mjs

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error(
    "Missing EXPO_PUBLIC_FIREBASE_* env vars. Run with: node --env-file=.env scripts/seedFirestore.mjs"
  );
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Mirrors src/Data/bookList.js — kept as a plain literal here so this
// script has no dependency on Metro/Babel to run under plain Node.
const bookList = [
  { id: 0, title: "One Italian summer", author: "Rebeca Serle", description: "The New York Times bestselling author of In Five Years returns with a powerful novel about the transformational love between mothers and daughters set on the breathtaking Amalfi Coast. When Katy’s mother dies, she is left reeling. Carol wasn’t just Katy’s mom, but her best friend and first phone call. She had all the answers and now, when Katy needs her the most, she is gone. To make matters worse, their planned mother-daughter trip of a lifetime looms: to Positano, the magical town where Carol spent the summer right before she met Katy’s father.", rating: 4.5, price: 16.08, category: "Romance", image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626799802i/58438583.jpg", audio: false },
  { id: 1, title: "House of Sky and Breath", author: "Sarah J. Maas", description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.", rating: 5, price: 9.99, category: "Fantasy", image_url: "https://m.media-amazon.com/images/I/51WApJ4MiLL.jpg", audio: false },
  { id: 2, title: "From Strength to Strength", author: "Arthur C. Brooks", description: "“In this book, Arthur C. Brooks helps people find greater happiness as they age and change.” —The Dalai Lama", rating: 5, price: 9.99, category: "Fantasy", image_url: "https://images-na.ssl-images-amazon.com/images/I/51jhu1GqpaL._SX328_BO1,204,203,200_.jpg", audio: false },
  { id: 3, title: "The Paris Apartment", author: "Lucy FolleX", description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.", rating: 4.5, price: 9.99, category: "Fantasy", image_url: "https://images-na.ssl-images-amazon.com/images/I/51P4t0Cqy+L._SX327_BO1,204,203,200_.jpg", audio: false },
  { id: 4, title: "The Paris Apartment", author: "Lucy FolleX", description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.", rating: 4.5, price: 9.99, category: "Fantasy", image_url: "https://images-na.ssl-images-amazon.com/images/I/51P4t0Cqy+L._SX327_BO1,204,203,200_.jpg", audio: true },
  { id: 5, title: "The Thursday Murder Club", author: "Richard Osman", description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.", rating: 3.5, price: 10.99, category: "Thriller", image_url: "https://images-na.ssl-images-amazon.com/images/I/51ZX4i7a7SL._SX331_BO1,204,203,200_.jpg", audio: true },
  { id: 6, title: "The Thursday Murder Club", author: "Richard Osman", description: "Bryce Quinlan and Hunt Athalar are trying to get back to normal-they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax. Slow down. Figure out what the future holds. The Asteri have kept their word so far, leaving Bryce and Hunt alone. But with the rebels chipping away at the Asteri’s power, the threat the rulers pose is growing. As Bryce, Hunt, and their friends get pulled into the rebel’s plans, the choice becomes clear: stay silent while others are oppressed, or fight for what’s right. And they’ve never been very good at staying silent.", rating: 4.5, price: 12.99, category: "Thriller", image_url: "https://images-na.ssl-images-amazon.com/images/I/51ZX4i7a7SL._SX331_BO1,204,203,200_.jpg", audio: false },
  { id: 7, title: "The Atlas Six", author: "Olivie Blake", description: "The Alexandrian Society, caretakers of lost knowledge from the greatest civilizations of antiquity, are the foremost secret society of magical academicians in the world. Those who earn a place among the Alexandrians will secure a life of wealth, power, and prestige beyond their wildest dreams, and each decade, only the six most uniquely talented magicians are selected to be considered for initiation.", rating: 4.5, price: 9.59, category: "Fantasy", image_url: "https://m.media-amazon.com/images/I/51LzpTvAR8L.jpg", audio: true },
  { id: 8, title: "The Investigator", author: "John Sandford", description: "By age twenty-four, Letty Davenport has seen more action and uncovered more secrets than many law enforcement professionals. Now a recent Stanford grad with a master’s in economics, she’s restless and bored in a desk job for U.S. Senator Colles. Letty’s ready to quit, but her skills have impressed Colles, and he offers her a carrot: feet-on-the-ground investigative work, in conjunction with the Department of Homeland Security.", rating: 5, price: 18.97, category: "Thriller", image_url: "https://images-na.ssl-images-amazon.com/images/I/51twV8pyGfL._SX329_BO1,204,203,200_.jpg", audio: true },
  { id: 9, title: "Blood and Ruins", author: "Richard Overy", description: "Richard Overy sets out in Blood and Ruins to recast the way in which we view the Second World War and its origins and aftermath. As one of Britain’s most decorated and respected World War II historians, he argues that this was the “last imperial war,” with almost a century-long lead-up of global imperial expansion, which reached its peak in the territorial ambitions of Italy, Germany and Japan in the 1930s and early 1940s, before descending into the largest and costliest war in human history and the end, after 1945, of all territorial empires.", rating: 5, price: 26.49, category: "History", image_url: "https://images-na.ssl-images-amazon.com/images/I/51QHX0IT2wL._SX329_BO1,204,203,200_.jpg", audio: true },
  { id: 10, title: "Blood and Ruins", author: "Richard Overy", description: "Richard Overy sets out in Blood and Ruins to recast the way in which we view the Second World War and its origins and aftermath. As one of Britain’s most decorated and respected World War II historians, he argues that this was the “last imperial war,” with almost a century-long lead-up of global imperial expansion, which reached its peak in the territorial ambitions of Italy, Germany and Japan in the 1930s and early 1940s, before descending into the largest and costliest war in human history and the end, after 1945, of all territorial empires.", rating: 5, price: 26.49, category: "History", image_url: "https://images-na.ssl-images-amazon.com/images/I/51QHX0IT2wL._SX329_BO1,204,203,200_.jpg", audio: false },
];

async function seed() {
  console.log(`Seeding ${bookList.length} books into "Books"...`);
  for (const book of bookList) {
    const { id, ...fields } = book;
    await setDoc(doc(db, "Books", String(id)), fields);
  }

  console.log('Seeding empty "Cart"/"Favourite" docs (id "0")...');
  await setDoc(doc(db, "Cart", "0"), { items: [] });
  await setDoc(doc(db, "Favourite", "0"), { books: [] });

  console.log("Done.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
