# PokePack

PokePack is React application where a user can simulate the pack opening of the base set Pokémon cards from 1999. The cards are revealed one by one, ranging from common --> rare holo cards. These can later be _sleeved_ (saved) in the collection page where the price of the cards is displayed.

## Overview

The overall goal of the project was to build an interactive frontend application using React, the use of an external API, routing, animation and local storage usage.

The app fetches Pokémon card data from the _Pokémon TCG API_ and uses this data to generate random booster packs that simulate the original card distribution of base set 1.

## Features

- Fetches base set cards from the Pokémon TCG API
- Generates randomized booster packs
- Reveals cards one by one
- Shows card backs before the card is revealed
- Places the Rare or Rare holographic card as the final reveal
- Card backs have a hover glow based on the rarity of the card
- When cards are revealed an animation plays
- Shows card details in a modal
- Sleeve/saving feature for favorite cards
- Sleeved cards are saved in local storage
- Displays a collection page with estimated card values
- Remove feature for cards the user does not want anymore

## Tech Stack

- React
- Vite
- React Router
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Pokémon TCG API

## API

This project uses Pokémon TCG API to fetch base set card data.
The API does not require a key in order to fetch data and the project fetches it by:

bash

```
const BASE_URL = 'https://api.pokemontcg.io/v2';

const response = await fetch(`${BASE_URL}/cards?q=set.id:${setId}&pageSize=250`);
```

The pack set can be dynamically changed by inserting the desired base set query inside of _setId_.

For this project the following data is fetched:

- name
- rarity
- images
- set information
- card number
- market price data (When available)

## External Libraries

The project uses the following external libraries:

- **React Router** for page navigation
- **Framer Motion** for animations
- **Lucide React** for icons
- **Tailwind CSS** for styling

## Installation

Clone the repository:

```bash
git clone https://github.com/Tilly-py/PokePack.git
```

Navigate to the project folder:

```bash
cd PokePack
```

Dependencies install:

```
npm install
```

## Running The Project

Start the dev server with:

```bash
npm run dev
```

Open the local dev URL shown in the terminal or type:
**o + ENTER**

## Project Structure

```bash
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── api
│   │   └── pokemonTcgApi.js
│   ├── assets
│   │   ├── BaseSet.png
│   │   ├── BaseSetOne.png
│   │   ├── pokeball.svg
│   │   └── pokemon-card-back.png
│   ├── components
│   │   ├── BoosterPackButton
│   │   │   └── BoosterPackButton.jsx
│   │   ├── CardBackReveal
│   │   │   └── CardBackReveal.jsx
│   │   ├── CardModal
│   │   │   └── CardModal.jsx
│   │   ├── LoadingScreen
│   │   │   └── LoadingScreen.jsx
│   │   ├── Navbar
│   │   │   └── Navbar.jsx
│   │   ├── OpenedPackTray
│   │   │   └── OpenedPackTray.jsx
│   │   ├── RevealedCardDisplay
│   │   │   └── RevealedCardDisplay.jsx
│   │   └── TiltCard
│   │       └── TiltCard.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── CollectionPage.jsx
│   │   ├── HomePage.jsx
│   │   └── OpenPackPage.jsx
│   └── utils
│       ├── cardPrice.js
│       ├── packGenerator.js
│       └── sleeveStorage.js
└── vite.config.js
```

## Key Implementation Details

### Booster Pack Generation

The booster pack generator separates the cards by their rarity and creates using the following structure:

- 6 Common cards
- 3 Uncommon cards
- 1 Rare or Rare Holo card

The Rare or Rare holo cards are placed last to create suspense.

**NOTE**
In the real base set 1 there are 11 cards in total, where **one** energy card is guaranteed, this is removed due to the fact that it would be extremely boring to get an energy card in a simulator.

### Card Reveal Flow

The card backs are shown first in order to create an interactive experience compared to showing the whole pack immediately.

### Sleeved Collection

Users can choose to sleeve their cards, meaning that they are saved in local storage and remain available after the refreshing of the page.

### Estimated Card Value

The Collection page displays the estimated value of individual / and collection of cards.

### Animation

Framer Motion is used for the tap and reveal animations. AnimatePresence is used to animate the transition between card backs and revealed cards.

### Future Implementations

- Sorting and filtering in collection page
- Sound effects for pack opening and rare pulls
- Pokémon growls when cards are revealed
- Introducing more booster packs

## Disclaimer

This project is an unofficial fan-made project created for educational purposes.

PokePack is not affiliated with, endorsed by, sponsored by, or associated with Nintendo, The Pokémon Company, Creatures Inc., GAME FREAK, or the Pokémon TCG API.

Pokémon and related names, images, logos, and trademarks are property of their respective owners.
