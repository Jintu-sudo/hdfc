import batman from '../assets/images/batman.jpg'
import darthvader from '../assets/images/darthvader.jpg'
import drstrange from '../assets/images/drstrange.webp'
import flash from '../assets/images/flash.avif'
import hulk from '../assets/images/hulk.jpg'
import kakashi from '../assets/images/kakashi.jpg'
import mandalorian from '../assets/images/mandalorian.jpg'
import mrfantastic from '../assets/images/mrfantastic.jpg'
import msmarvel from '../assets/images/msmarvel.jpg'
import naruto from '../assets/images/naruto.jpg'
import redhood from '../assets/images/redhood.jpg'
import spiderman from '../assets/images/spiderman.jpg'

// Every product lives here once. Pages filter this list by category.
export const products = [
  {
    id: 1,
    name: 'Batman: Arkham Knight Edition',
    price: 34.99,
    image: batman,
    category: 'dc',
    // Only Batman had a full product page in the original site
    description:
      'Highly detailed 7-inch Batman action figure inspired by the Arkham Knight design. Features multiple points of articulation, a soft-goods cape, and interchangeable grapple hand accessory. A must-have for any Dark Knight collection.',
    details: [
      { label: 'Height', value: '7 inches' },
      { label: 'Material', value: 'PVC / ABS' },
      { label: 'Points of Articulation', value: '22' },
      { label: 'Includes', value: 'Grapple hand, batarang accessory' },
    ],
  },
  { id: 2, name: 'Darth Vader: Dark Lord Edition', price: 42.99, image: darthvader, category: 'starwars' },
  { id: 3, name: 'Doctor Strange: Master of Mystic Arts', price: 34.99, image: drstrange, category: 'marvel' },
  { id: 4, name: 'The Flash: Speed Force Figure', price: 31.99, image: flash, category: 'dc' },
  { id: 5, name: 'Hulk: Gamma Smash Edition', price: 34.99, image: hulk, category: 'marvel' },
  { id: 6, name: 'Kakashi Hatake: Copy Ninja Figure', price: 32.99, image: kakashi, category: 'anime' },
  { id: 7, name: 'The Mandalorian: Beskar Armor Edition', price: 24.99, image: mandalorian, category: 'starwars' },
  { id: 8, name: 'Mr. Fantastic: Stretch Force Figure', price: 34.99, image: mrfantastic, category: 'marvel' },
  { id: 9, name: 'Ms. Marvel: Embiggen Edition', price: 34.99, image: msmarvel, category: 'marvel' },
  { id: 10, name: 'Naruto Uzumaki: Sage Mode Figure', price: 24.99, image: naruto, category: 'anime' },
  { id: 11, name: 'Red Hood: Outlaw Edition', price: 44.99, image: redhood, category: 'dc' },
  { id: 12, name: 'Spider-Man Deluxe Figure', price: 54.99, image: spiderman, category: 'marvel' },
]

// Used for the navbar links and page titles
export const categories = [
  { id: 'anime', label: 'Anime' },
  { id: 'marvel', label: 'Marvel' },
  { id: 'dc', label: 'DC' },
  { id: 'starwars', label: 'Star Wars' },
]
