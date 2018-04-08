import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';

const address = document.querySelector('#address');
const lat = document.querySelector('#lat');
const lng = document.querySelector('#lng');

autocomplete(address, lat, lng);
