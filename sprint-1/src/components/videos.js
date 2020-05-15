import zero from '../assets/images/video-list-0.jpg';
import one from '../assets/images/video-list-1.jpg';
import two from '../assets/images/video-list-2.jpg';
import three from '../assets/images/video-list-3.jpg';
import four from '../assets/images/video-list-4.jpg';
import five from '../assets/images/video-list-5.jpg';
import six from '../assets/images/video-list-6.jpg';
import seven from '../assets/images/video-list-7.jpg';
import eight from '../assets/images/video-list-8.jpg';
import { v4 as uuidv4 } from 'uuid';

const videos =[
 {
  id: uuidv4(),
  title:"BMX Rampage: 2018 Highlights",
  channel:"Red Cow",
  image:zero
 },
 {
  id: uuidv4(),
  title:"Become A Travel Pro In One Easy Lesson",
  channel:"Todd Welch",
  image:one
 },
 {
  id: uuidv4(),
  title:"Les Houches The Hidden Gem Of The Chamonix",
  channel:"Cornelia Blair",
  image:two
 },
 {
  id: uuidv4(),
  title:"Travel Health Useful Medical Information For",
  channel:"Glen Harper",
  image:three
 },
 {
  id: uuidv4(),
  title:"Cheap Airline Tickets Great Ways To Save",
  channel:"Emily Harper",
  image:four
 },
 {
  id: uuidv4(),
  title:"Take A Romantic Break In A Boutique Hotel",
  channel:"Ethan Owen",
  image:five
 },
 {
  id: uuidv4(),
  title:"Choose The Perfect Accommodations",
  channel:"Lydia Perez",
  image:six
 },
 {
  id: uuidv4(),
  title:"Cruising Destination Ideas",
  channel:"Timothy Austin",
  image:seven
 },
 {
  id: uuidv4(),
  title:"Train Travel On Track For Safety",
  channel:"Scotty Cranmer",
  image:eight
 },
]

export default videos;