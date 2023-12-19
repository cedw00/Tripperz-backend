var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const Country = require('../models/countries');
const { checkBody } = require('../modules/checkBody');



const popularCities = [
  { country: 'United States', city: 'New York City' },
  { country: 'United States', city: 'Los Angeles' },
  { country: 'Mexico', city: 'Mexico City' },
  { country: 'Canada', city: 'Toronto' },
  { country: 'Canada', city: 'Vancouver' },
  { country: 'United States', city: 'Chicago' },
  { country: 'United States', city: 'Miami' },
  { country: 'United States', city: 'San Francisco' },
  { country: 'Canada', city: 'Montreal' },
  { country: 'United States', city: 'Washington D.C.' },
  { country: 'United States', city: 'Atlanta' },
  { country: 'United States', city: 'Houston' },
  { country: 'Argentina', city: 'Buenos Aires' },
  { country: 'Brazil', city: 'Rio de Janeiro' },
  { country: 'Brazil', city: 'São Paulo' },
  { country: 'Colombia', city: 'Bogotá' },
  { country: 'Peru', city: 'Lima' },
  { country: 'Chile', city: 'Santiago' },
  { country: 'Venezuela', city: 'Caracas' },
  { country: 'Cuba', city: 'Havana' },
  { country: 'Mexico', city: 'Mexico City' },
  { country: 'Guatemala', city: 'Guatemala City' },
  { country: 'El Salvador', city: 'San Salvador' },
  { country: 'Panama', city: 'Panama City' },
  { country: 'Costa Rica', city: 'San Jose' },
  { country: 'Nicaragua', city: 'Managua' },
  { country: 'Honduras', city: 'Tegucigalpa' },
  { country: 'Puerto Rico', city: 'San Juan' },
  { country: 'Dominican Republic', city: 'Santo Domingo' },
  { country: 'Haiti', city: 'Port-au-Prince' },
  { country: 'Bolivia', city: 'La Paz' },
  { country: 'Ecuador', city: 'Quito' },
  { country: 'Uruguay', city: 'Montevideo' },
  { country: 'Paraguay', city: 'Asunción' },
  { country: 'Bahamas', city: 'Nassau' },
  { country: 'Guyana', city: 'Georgetown' },
  { country: 'Suriname', city: 'Paramaribo' },
  { country: 'Belize', city: 'Belmopan' },
  { country: 'Canada', city: 'Ottawa' },
  { country: 'Brazil', city: 'Brasília' },
  { country: 'Bolivia', city: 'La Paz' },
  { country: 'Paraguay', city: 'Asunción' },
  { country: 'Ecuador', city: 'Quito' },
  { country: 'Costa Rica', city: 'San Jose' },
  { country: 'Panama', city: 'Panama City' },
  { country: 'Nicaragua', city: 'Managua' },
  { country: 'Honduras', city: 'Tegucigalpa' },
  { country: 'El Salvador', city: 'San Salvador' },
  { country: 'Guatemala', city: 'Guatemala City' },
  { country: 'Cuba', city: 'Havana' },
  { country: 'France', city: 'Paris' },
  { country: 'Royaume-Uni', city: 'Londres' },
  { country: 'Italie', city: 'Rome' },
  { country: 'Espagne', city: 'Barcelone' },
  { country: 'Allemagne', city: 'Berlin' },
  { country: 'Pays-Bas', city: 'Amsterdam' },
  { country: 'République tchèque', city: 'Prague' },
  { country: 'Autriche', city: 'Vienne' },
  { country: 'Hongrie', city: 'Budapest' },
  { country: 'Espagne', city: 'Madrid' },
  { country: 'Portugal', city: 'Lisbonne' },
  { country: 'Grèce', city: 'Athènes' },
  { country: 'Italie', city: 'Florence' },
  { country: 'Royaume-Uni', city: 'Édimbourg' },
  { country: 'Suède', city: 'Stockholm' },
  { country: 'Allemagne', city: 'Munich' },
  { country: 'Belgique', city: 'Bruxelles' },
  { country: 'Croatie', city: 'Dubrovnik' },
  { country: 'Danemark', city: 'Copenhague' },
  { country: 'Suisse', city: 'Zurich' },
  { country: 'Norvège', city: 'Oslo' },
  { country: 'Finlande', city: 'Helsinki' },
  { country: 'Pologne', city: 'Cracovie' },
  { country: 'Islande', city: 'Reykjavik' },
  { country: 'France', city: 'Nice' },
  { country: 'France', city: 'Marseille' },
  { country: 'France', city: 'Lyon' },
  { country: 'Espagne', city: 'Valence' },
  { country: 'Portugal', city: 'Porto' },
  { country: 'Norvège', city: 'Bergen' },
  { country: 'Irlande', city: 'Dublin' },
  { country: 'Royaume-Uni', city: 'Glasgow' },
  { country: 'Pologne', city: 'Varsovie' },
  { country: 'Slovaquie', city: 'Bratislava' },
  { country: 'Bosnie-Herzégovine', city: 'Sarajevo' },
  { country: 'Lituanie', city: 'Vilnius' },
  { country: 'Lettonie', city: 'Riga' },
  { country: 'Estonie', city: 'Tallinn' },
  { country: 'Slovénie', city: 'Ljubljana' },
  { country: 'Serbie', city: 'Belgrade' },
  { country: 'Bulgarie', city: 'Sofia' },
  { country: 'Roumanie', city: 'Bucarest' },
  { country: 'République tchèque', city: 'Prague' },
  { country: 'Ukraine', city: 'Kiev' },
  { country: 'Turquie', city: 'Istanbul (partiellement en Europe)' },
  { country: 'Russie', city: 'Saint-Pétersbourg' },
  { country: 'Pologne', city: 'Cracovie' },
  { country: 'Royaume-Uni', city: 'Edimbourg' },
  { country: 'Espagne', city: 'Séville' },
  { country: 'Suisse', city: 'Genève' },
  { country: 'Croatie', city: 'Dubrovnik' },
  { country: 'Croatie', city: 'Split' },
  { country: 'Bosnie-Herzégovine', city: 'Sarajevo' },
  { country: 'Croatie', city: 'Zagreb' },
  { country: 'Serbie', city: 'Belgrade' },
  { country: 'Bulgarie', city: 'Sofia' },
  { country: 'Roumanie', city: 'Bucarest' },
  { country: 'Slovaquie', city: 'Bratislava' },
  { country: 'République tchèque', city: 'Prague' },
  { country: 'Hongrie', city: 'Budapest' },
  { country: 'République tchèque', city: 'Brno' },
  { country: 'Autriche', city: 'Graz' },
  { country: 'Autriche', city: 'Salzbourg' },
  { country: 'Autriche', city: 'Innsbruck' },
  { country: 'Espagne', city: 'Bilbao' },
  { country: 'Espagne', city: 'Valence' },
  { country: 'Espagne', city: 'Saragosse' },
  { country: 'Espagne', city: 'Séville' },
  { country: 'Espagne', city: 'Malaga' },
  { country: 'Espagne', city: 'Murcie' },
  { country: 'Espagne', city: 'Palma de Majorque' },
  { country: 'Espagne', city: 'Alicante' },
  { country: 'Portugal', city: 'Porto' },
  { country: 'Portugal', city: 'Braga' },
  { country: 'Portugal', city: 'Coimbra' },
  { country: 'Portugal', city: 'Faro' },
  { country: 'Danemark', city: 'Odense' },
  { country: 'Danemark', city: 'Aarhus' },
  { country: 'Suède', city: 'Malmö' },
  { country: 'Suède', city: 'Gothenburg' },
  { country: 'Suède', city: 'Uppsala' },
  { country: 'Finlande', city: 'Turku' },
  { country: 'Finlande', city: 'Tampere' },
  { country: 'Finlande', city: 'Oulu' },
  { country: 'Finlande', city: 'Lahti' },
  { country: 'Lettonie', city: 'Riga' },
  { country: 'Lettonie', city: 'Daugavpils' },
  { country: 'Estonie', city: 'Tartu' },
  { country: 'Estonie', city: 'Pärnu' },
  { country: 'Lituanie', city: 'Vilnius' },
  { country: 'Lituanie', city: 'Kaunas' },
  { country: 'Lituanie', city: 'Klaipeda' },
  { country: 'Pologne', city: 'Lublin' },
  { country: 'Pologne', city: 'Katowice' },
  { country: 'Pologne', city: 'Gdansk' },
  { country: 'Pologne', city: 'Poznan' },
  { country: 'Pologne', city: 'Wroclaw' },
  { country: 'Roumanie', city: 'Cluj-Napoca' },
  { country: 'Roumanie', city: 'Timisoara' },
  { country: 'Roumanie', city: 'Constanta' },
  { country: 'Égypte', city: 'Le Caire' },
  { country: 'Afrique du Sud', city: 'Johannesburg' },
  { country: 'Afrique du Sud', city: 'Le Cap' },
  { country: 'Kenya', city: 'Nairobi' },
  { country: 'Maroc', city: 'Casablanca' },
  { country: 'Maroc', city: 'Marrakech' },
  { country: 'Nigeria', city: 'Lagos' },
  { country: 'Ghana', city: 'Accra' },
  { country: 'Éthiopie', city: 'Addis-Abeba' },
  { country: 'Tanzanie', city: 'Dar es Salaam' },
  { country: 'Tunisie', city: 'Tunis' },
  { country: 'Algérie', city: 'Alger' },
  { country: 'Nigeria', city: 'Abuja' },
  { country: 'Afrique du Sud', city: 'Pretoria' },
  { country: 'Maroc', city: 'Rabat' },
  { country: 'Afrique du Sud', city: 'Durban' },
  { country: 'Égypte', city: 'Alexandrie' },
  { country: 'Ouganda', city: 'Kampala' },
  { country: 'Rwanda', city: 'Kigali' },
  { country: 'Cameroun', city: 'Douala' },
  { country: 'Côte d\'Ivoire', city: 'Abidjan' },
  { country: 'Zambie', city: 'Lusaka' },
  { country: 'Zimbabwe', city: 'Harare' },
  { country: 'Mozambique', city: 'Maputo' },
  { country: 'Namibie', city: 'Windhoek' },
  { country: 'Ghana', city: 'Accra' },
  { country: 'Libye', city: 'Tripoli' },
  { country: 'Mali', city: 'Bamako' },
  { country: 'Burkina Faso', city: 'Ouagadougou' },
  { country: 'Guinée', city: 'Conakry' },
  { country: 'Sierra Leone', city: 'Freetown' },
  { country: 'Libéria', city: 'Monrovia' },
  { country: 'Tchad', city: 'N\'Djamena' },
  { country: 'République du Congo', city: 'Brazzaville' },
  { country: 'République démocratique du Congo', city: 'Kinshasa' },
  { country: 'Gabon', city: 'Libreville' },
  { country: 'Niger', city: 'Niamey' },
  { country: 'Mauritanie', city: 'Nouakchott' },
  { country: 'Soudan', city: 'Khartoum' },
  { country: 'Somalie', city: 'Mogadiscio' },
  { country: 'Gambie', city: 'Banjul' },
  { country: 'Botswana', city: 'Gaborone' },
  { country: 'Eswatini (Swaziland)', city: 'Mbabane' },
  { country: 'Madagascar', city: 'Antananarivo' },
  { country: 'Malawi', city: 'Lilongwe' },
  { country: 'Seychelles', city: 'Victoria' },
  { country: 'Maurice', city: 'Port Louis' },
  { country: 'Érythrée', city: 'Asmara' },
  { country: 'Tanzanie', city: 'Dodoma' },
  { country: 'Comores', city: 'Moroni' },
  { country: 'Algérie', city: 'Oran' },
  { country: 'Algérie', city: 'Constantine' },
  { country: 'Algérie', city: 'Tlemcen' },
  { country: 'Algérie', city: 'Sétif' },
  { country: 'Algérie', city: 'Batna' },
  { country: 'Algérie', city: 'Annaba' },
  { country: 'Algérie', city: 'Tébessa' },
  { country: 'Algérie', city: 'El Oued' },
  { country: 'Algérie', city: 'Bejaia' },
  { country: 'Algérie', city: 'Blida' },
  { country: 'Algérie', city: 'Skikda' },
  { country: 'Algérie', city: 'Biskra' },
  { country: 'Algérie', city: 'Tizi Ouzou' },
  { country: 'Maroc', city: 'Marrakech' },
  { country: 'Maroc', city: 'Fès' },
  { country: 'Maroc', city: 'Tanger' },
  { country: 'Maroc', city: 'Agadir' },
  { country: 'Maroc', city: 'Oujda' },
  { country: 'Maroc', city: 'Kenitra' },
  { country: 'Maroc', city: 'Tetouan' },
  { country: 'Tunisie', city: 'Sfax' },
  { country: 'Tunisie', city: 'Gabès' },
  { country: 'Tunisie', city: 'Kairouan' },
  { country: 'Tunisie', city: 'Bizerte' },
  { country: 'Tunisie', city: 'Gafsa' },
  { country: 'Égypte', city: 'Louxor (Luxor)' },
  { country: 'Égypte', city: 'Assouan (Aswan)' },
  { country: 'Égypte', city: 'Ismaïlia' },
  { country: 'Égypte', city: 'Tanta' },
  { country: 'Égypte', city: 'Mansoura' },
  { country: 'Japon', city: 'Tokyo' },
  { country: 'Chine', city: 'Pékin (Beijing)' },
  { country: 'Chine', city: 'Shanghai' },
  { country: 'Thaïlande', city: 'Bangkok' },
  { country: 'Inde', city: 'New Delhi' },
  { country: 'Corée du Sud', city: 'Séoul' },
  { country: 'Inde', city: 'Mumbai (Bombay)' },
  { country: 'Singapour', city: 'Singapour' },
  { country: 'Indonésie', city: 'Jakarta' },
  { country: 'Malaisie', city: 'Kuala Lumpur' },
  { country: 'Japon', city: 'Osaka' },
  { country: 'Philippines', city: 'Manille' },
  { country: 'Vietnam', city: 'Hanoï' },
  { country: 'Vietnam', city: 'Ho Chi Minh Ville' },
  { country: 'Taïwan', city: 'Taipei' },
  { country: 'Bangladesh', city: 'Dhaka' },
  { country: 'Pakistan', city: 'Lahore' },
  { country: 'Inde', city: 'Chennai (Madras)' },
  { country: 'Inde', city: 'Kolkata (Calcutta)' },
  { country: 'Pakistan', city: 'Islamabad' },
  { country: 'Inde', city: 'Hyderabad' },
  { country: 'Myanmar (Birmanie)', city: 'Yangon' },
  { country: 'Inde', city: 'Bangalore' },
  { country: 'Iran', city: 'Téhéran' },
  { country: 'Sri Lanka', city: 'Colombo' },
  { country: 'Émirats arabes unis', city: 'Abu Dhabi' },
  { country: 'Émirats arabes unis', city: 'Dubaï' },
  { country: 'Qatar', city: 'Doha' },
  { country: 'Arabie saoudite', city: 'Riyadh' },
  { country: 'Arabie saoudite', city: 'Jeddah' },
  { country: 'Turquie', city: 'Ankara' },
  { country: 'Turquie', city: 'Istanbul' },
  { country: 'Jordanie', city: 'Amman' },
  { country: 'Irak', city: 'Bagdad' },
  { country: 'Cambodge', city: 'Phnom Penh' },
  { country: 'Oman', city: 'Muscat' },
  { country: 'Syrie', city: 'Damas' },
  { country: 'Yémen', city: 'Sanaa' },
  { country: 'Népal', city: 'Katmandou' },
  { country: 'Ouzbékistan', city: 'Tachkent' },
  { country: 'Kazakhstan', city: 'Astana' },
  { country: 'Kirghizistan', city: 'Bichkek' },
  { country: 'Géorgie', city: 'Tbilissi' },
  { country: 'Arménie', city: 'Yerevan' },
  { country: 'Pakistan', city: 'Islamabad' },
  { country: 'Pakistan', city: 'Karachi' },
  { country: 'Pakistan', city: 'Lahore' },
  { country: 'Myanmar (Birmanie)', city: 'Yangon' },
  { country: 'Bangladesh', city: 'Chittagong' },
  { country: 'Bangladesh', city: 'Khulna' },
  { country: 'Myanmar (Birmanie)', city: 'Mandalay' },
  { country: 'Inde', city: 'Patna' },
  { country: 'Indonésie', city: 'Surabaya' },
  { country: 'Indonésie', city: 'Medan' },
  { country: 'Indonésie', city: 'Bandung' },
  { country: 'Indonésie', city: 'Semarang' },
  { country: 'Indonésie', city: 'Palembang' },
  { country: 'Pakistan', city: 'Faisalabad' },
  { country: 'Pakistan', city: 'Rawalpindi' },
  { country: 'Pakistan', city: 'Peshawar' },
  { country: 'Népal', city: 'Kathmandu' },
  { country: 'Népal', city: 'Pokhara' },
  { country: 'Myanmar (Birmanie)', city: 'Yangon' },
  { country: 'Myanmar (Birmanie)', city: 'Mandalay' },
  { country: 'Myanmar (Birmanie)', city: 'Naypyidaw' },
  { country: 'Myanmar (Birmanie)', city: 'Taunggyi' },
  { country: 'Vietnam', city: 'Da Nang' },
  { country: 'Vietnam', city: 'Quy Nhon' },
  { country: 'Vietnam', city: 'Can Tho' },
  { country: 'Vietnam', city: 'Haiphong' },
  { country: 'Vietnam', city: 'Bac Ninh' },
  { country: 'Vietnam', city: 'Hue' },
  { country: 'Vietnam', city: 'Vinh' },
  { country: 'Vietnam', city: 'Lạng Sơn' },
  { country: 'Vietnam', city: 'My Tho' },
  { country: 'Vietnam', city: 'Hoi An' },
  { country: 'Laos', city: 'Vientiane' },
  { country: 'Laos', city: 'Luang Prabang' },
  { country: 'Laos', city: 'Savannakhet' },
  { country: 'Laos', city: 'Pakse' },
  { country: 'Laos', city: 'Champasak' },
  { country: 'Kazakhstan', city: 'Kyzylorda' },
  { country: 'Kazakhstan', city: 'Oskemen (Ust-Kamenogorsk)' },
  { country: 'Kazakhstan', city: 'Pavlodar' },
  { country: 'Kazakhstan', city: 'Aktobe' },
  { country: 'Kazakhstan', city: 'Taraz' },
  { country: 'Kazakhstan', city: 'Karaganda' },
  { country: 'Kazakhstan', city: 'Shymkent' },
  { country: 'Kazakhstan', city: 'Atyrau' },
  { country: 'Kazakhstan', city: 'Aktau' },
  { country: 'Kazakhstan', city: 'Oral (Uralsk)' },
  { country: 'Kazakhstan', city: 'Ekibastuz' },
  { country: 'Kazakhstan', city: 'Kokshetau' },
  { country: 'Kazakhstan', city: 'Semey (Semipalatinsk)' },
  { country: 'Kazakhstan', city: 'Petropavl' },
  { country: 'Kazakhstan', city: 'Rudny' },
  { country: 'Kazakhstan', city: 'Temirtau' },
  { country: 'Kazakhstan', city: 'Zhezkazgan' },
  { country: 'Kazakhstan', city: 'Balkhash' },
  { country: 'Kazakhstan', city: 'Kapchagay' },
  { country: 'Émirats arabes unis', city: 'Ras Al Khaimah' },
  { country: 'Émirats arabes unis', city: 'Al Ain' },
  { country: 'Émirats arabes unis', city: 'Ajman' },
  { country: 'Émirats arabes unis', city: 'Fujairah' },
  { country: 'Émirats arabes unis', city: 'Umm Al Quwain' },
  { country: 'Arabie saoudite', city: 'Al Hofuf' },
  { country: 'Arabie saoudite', city: 'Dammam' },
  { country: 'Arabie saoudite', city: 'Jubail' },
  { country: 'Arabie saoudite', city: 'Al Khobar' },
  { country: 'Arabie saoudite', city: 'Yanbu' },
  { country: 'Arabie saoudite', city: 'Medina' },
  { country: 'Arabie saoudite', city: 'Tabuk' },
  { country: 'Arabie saoudite', city: 'Hail' },
  { country: 'Arabie saoudite', city: 'Al Qatif' },
  { country: 'Arabie saoudite', city: 'Jeddah' },
  { country: 'Bahreïn', city: 'Manama' },
  { country: 'Bahreïn', city: 'Riffa' },
  { country: 'Bahreïn', city: 'Muharraq' },
  { country: 'Bahreïn', city: 'Hamad Town' },
  { country: 'Bahreïn', city: 'Sitra' },
  { country: 'Bahreïn', city: 'Isa Town' },
  { country: 'Yémen', city: 'Aden' },
  { country: 'Yémen', city: 'Taëz' },
  { country: 'Yémen', city: 'Mukalla' },
  { country: 'Yémen', city: 'Ibb' },
  { country: 'Yémen', city: 'Al Hudaydah' },
  { country: 'Yémen', city: 'Sanaa' },
  { country: 'Jordanie', city: 'Amman' },
  { country: 'Jordanie', city: 'Zarqa' },
  { country: 'Jordanie', city: 'Irbid' },
  { country: 'Jordanie', city: 'Russeifa' },
  { country: 'Jordanie', city: 'Wadi Al Seer' },
  { country: 'Jordanie', city: 'Tafila' },
  { country: 'Jordanie', city: 'Ma\'an' },
  { country: 'Jordanie', city: 'Ajloun' },
  { country: 'Jordanie', city: 'Salt' },
  { country: 'Jordanie', city: 'Kerak' },
  { country: 'Jordanie', city: 'Aqaba' },
  { country: 'Australie', city: 'Sydney' },
  { country: 'Australie', city: 'Melbourne' },
  { country: 'Australie', city: 'Brisbane' },
  { country: 'Australie', city: 'Perth' },
  { country: 'Australie', city: 'Adélaïde' },
  { country: 'Australie', city: 'Gold Coast' },
  { country: 'Australie', city: 'Canberra' },
  { country: 'Nouvelle-Zélande', city: 'Auckland' },
  { country: 'Nouvelle-Zélande', city: 'Wellington' },
  { country: 'Nouvelle-Zélande', city: 'Christchurch' },
  { country: 'Nouvelle-Zélande', city: 'Hamilton' },
  { country: 'Nouvelle-Zélande', city: 'Tauranga' },
  { country: 'Nouvelle-Zélande', city: 'Dunedin' },
  { country: 'Nouvelle-Zélande', city: 'Lower Hutt' },
  { country: 'Nouvelle-Zélande', city: 'Palmerston North' },
  { country: 'Nouvelle-Zélande', city: 'Napier' },
  { country: 'Nouvelle-Zélande', city: 'Porirua' },
  { country: 'Nouvelle-Zélande', city: 'Rotorua' },
  { country: 'Nouvelle-Zélande', city: 'Whangarei' },
  { country: 'Australie', city: 'Adelaide River' },
  { country: 'Australie', city: 'Cairns' },
  { country: 'Australie', city: 'Darwin' },
  { country: 'Australie', city: 'Hobart' },
  { country: 'Australie', city: 'Launceston' },
  { country: 'Australie', city: 'Newcastle' },
  { country: 'Australie', city: 'Wollongong' },
  { country: 'Australie', city: 'Albury' },
  { country: 'Australie', city: 'Wagga Wagga' },
  { country: 'Australie', city: 'Geelong' },
  { country: 'Australie', city: 'Townsville' },
  { country: 'Australie', city: 'Ballarat' },
  { country: 'Australie', city: 'Bendigo' },
  { country: 'Australie', city: 'Mackay' },
  { country: 'Australie', city: 'Mandurah' },
  { country: 'Australie', city: 'Bunbury' },
  { country: 'Australie', city: 'Rockingham' },
  { country: 'Australie', city: 'Bundaberg' },
  { country: 'Australie', city: 'Coffs Harbour' },
  { country: 'Australie', city: 'Wagga Wagga' },
  { country: 'Australie', city: 'Shepparton' },
  { country: 'Australie', city: 'Hervey Bay' },
  { country: 'Australie', city: 'Mildura' },
  { country: 'Australie', city: 'Tamworth' },
  { country: 'Australie', city: 'Port Macquarie' },
  { country: 'Australie', city: 'Orange' },
  { country: 'Australie', city: 'Dubbo' },
  { country: 'Australie', city: 'Geraldton' },
  { country: 'Australie', city: 'Nowra' },
  { country: 'Australie', city: 'Bathurst' },
  { country: 'Australie', city: 'Lismore' },
];

const citiesActivities = [
  {
    country: "France",
    cities: [
      {
        name: "Paris",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
        ],
      },
      {
        name: "Calenzana",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Trekking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Chamonix",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Hiking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Hossegor",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "Gruissan",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "Lyon",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
            ],
          },
        ],
      },
      {
        name: "Bordeaux",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Cannes",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
        ],
      },
    ],
  },
];

const topDestinations =
[
  { country: 'Spain', city: 'Barcelona' },
  { country: 'United Kingdom', city: 'London' },
  { country: 'Singapore', city: 'Singapore' },
  { country: 'Italy', city: 'Milan' },
  { country: 'South Korea', city: 'Seoul' },
  { country: 'Hong Kong', city: 'Hong Kong' },
  { country: 'Austria', city: 'Vienna' },
  { country: 'Portugal', city: 'Lisbon' }
];

router.post('/', async (req, res) => {
  try {
    for (let i = 0; i < citiesActivities.length; i++) {
      const countryData = await Country.findOne({ country: citiesActivities[i].country });
      if (countryData) {
        for (const city of citiesActivities[i].cities) {
          const current = city;
          const actualCity = countryData.cities.find(currentCity => currentCity.name === city.name);
          if (actualCity !== undefined && actualCity !== null) {
            const allTypes = [];
            for (const type of city.activTypes) {
              const allActivities = [];
              for (const activity of type.activities) {
                let activImg = "";
                const activityResponse = await fetch(`https://api.pexels.com/v1/search?query=${activity.name}&per_page=1`, {
                  headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
                });
                const activityImg = await activityResponse.json();
                if (activityImg.photos && activityImg.photos[0] && activityImg.photos[0].length !== 0) {
                  activImg = activityImg.photos[0].src.original;
                } else {
                  activImg = ''
                }
                const obj = { name: activity.name, apiName: activity.api_name[0], image: activImg };
                allActivities.push(obj);
              }
              const obj = { name: type.name, activities: allActivities }
              allTypes.push(obj);
            }
            const tmp = [];
            const obj = { name: actualCity.name, cityImg: actualCity.cityImg, activitiesTypes: allTypes }
            tmp.push(obj);
            await Country.updateOne({ country: citiesActivities[i].country }, { cities: tmp });
          } else {
            const cities = countryData.cities;
            const cityResponse = await fetch(`https://api.pexels.com/v1/search?query=${current.name}&per_page=1`, {
              headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
            });
            const cityImg = await cityResponse.json();
            const allTypes = [];
            for (const type of current.activTypes) {
              const allActivities = [];
              for (const activity of type.activities) {
                let activImg = "";
                const activityResponse = await fetch(`https://api.pexels.com/v1/search?query=${activity.name}&per_page=1`, {
                  headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
                });
                const activityImg = await activityResponse.json();
                if (activityImg.photos && activityImg.photos[0] && activityImg.photos[0].length !== 0) {
                  activImg = activityImg.photos[0].src.original;
                } else {
                  activImg = ''
                }
                const obj = { name: activity.name, apiName: activity.api_name[0], image: activImg };
                allActivities.push(obj);
              }
              const obj = { name: type.name, activities: allActivities }
              allTypes.push(obj);
            }
            let city = {};
            if (cityImg.photos && cityImg.photos[0] && cityImg.photos[0].length !== 0) {
              city = { name: current.name, cityImg: cityImg.photos[0].src.original, activitiesTypes: allTypes }
            } else {
              city = {
                name: current.name,
                cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                activitiesTypes: allTypes
              }
            }
            cities.push(city);
            await Country.updateOne({ country: citiesActivities[i].country }, { cities: cities });
          }
        }
      } else {
        const countryResponse = await fetch(`https://api.pexels.com/v1/search?query=${citiesActivities[i].country}&per_page=1`, {
          headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
        });
        const countryImg = await countryResponse.json();
        let image = "";
        if (countryImg.photos && countryImg.photos[0] && countryImg.photos[0].length !== 0) {
          image = countryImg.photos[0].src.original;
        } else {
          image = 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        }
        const cities = [];
        for (const actualCity of citiesActivities[i].cities) {
          const current = actualCity;
          const cityResponse = await fetch(`https://api.pexels.com/v1/search?query=${current.name}&per_page=1`, {
              headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
            });
          const cityImg = await cityResponse.json();
          const allTypes = [];
          for (const type of current.activTypes) {
            const allActivities = [];
            for (const activity of type.activities) {
              let activImg = "";
              const activityResponse = await fetch(`https://api.pexels.com/v1/search?query=${activity.name}&per_page=1`, {
                headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
              });
              const activityImg = await activityResponse.json();
              if (activityImg.photos && activityImg.photos[0] && activityImg.photos[0].length !== 0) {
                activImg = activityImg.photos[0].src.original;
              } else {
                activImg = ''
              }
              const obj = { name: activity.name, apiName: activity.api_name[0], image: activImg };
              allActivities.push(obj);
            }
            const obj = { name: type.name, activities: allActivities }
            allTypes.push(obj);
          }
          let city = {};
          if (cityImg.photos && cityImg.photos[0] && cityImg.photos[0].length !== 0) {
            city = { name: current.name, cityImg: cityImg.photos[0].src.original, activitiesTypes: allTypes
            }
          } else {
            city = {
              name: current.name,
              cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              activitiesTypes: allTypes
            }
          }
          cities.push(city);
        }
        const newCountry = new Country({
          country: citiesActivities[i].country,
          image: image,
          cities: cities,
        });

      await newCountry.save();
      await newCountry.save();
        await newCountry.save();
      }
    }
  } catch {
    res.status(500).json({ result: false, error: 'Internal Server Error' });
    return
  }
    res.json({ result: true });
});

router.get("/", async (req, res) => {
  const countries = await Country.find();
  if (countries.length > 0) {
    res.json({ result: true, countries });
  } else {
    res.json({ result: false, error: 'Cannot find any country' })
  }
})

router.get("/cities/:country", async (req, res) => {
  const country = await Country.findOne({ country: req.params.country });
  if (country) {
    res.json({ result: true, cities: country.cities })
  } else {
    res.json({ result: false, error: "Country doesn't exist in database" });
  }
})

router.get("/city/:country/:city", async (req, res) => {
  const country = await Country.findOne({ country: req.params.country });
  if (country) {
    const city = country.cities.find(city => city.name === req.params.city);
    if (city) {
      res.json({ result: true, city: city })
    } else {
      res.json({ result: false, error: "City not found in this country" })
    }
  } else {
    res.json({ result: false, error: "Country doesn't exist in database" });
  }
})

module.exports = router;
