import './assets/css/style.css';
import './image-carousel'
import Joshua from './assets/images/joshua-tree1.jpg'
import Michal from './assets/images/michal-tree2.jpg'
import Nolla from './assets/images/nolla-tree3.jpg'
import Theo from './assets/images/theo-tree4.jpg'
import { carousel } from './image-carousel';

const joshua = document.getElementById('joshua')
joshua.src = Joshua

const michal = document.getElementById('michal')
michal.src = Michal

const theo = document.getElementById('theo')
theo.src = Theo

const nolla = document.getElementById('nolla')
nolla.src = Nolla

carousel()
