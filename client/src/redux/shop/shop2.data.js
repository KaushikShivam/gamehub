import uuid from 'uuid/v4';

const SHOP_DATA = {
  upcoming: {
    id: 1,
    title: 'Upcoming',
    routeName: 'Upcoming',
    items: [
      {
        id: uuid(),
        name: 'Cyberpunk 2077',
        imageUrl: 'https://i.ibb.co/FhXFWvM/cyberpunk.jpg',
        price: 90,
        developer: 'CD Projekt',
        publisher: 'CD Projekt Red'
      },
      {
        id: uuid(),
        name: 'Last Of Us 2',
        imageUrl: 'https://i.ibb.co/ByMxhNy/last-of-us.jpg',
        price: 80,
        developer: 'Naughty Dog',
        publisher: 'Sony Interactive'
      },
      {
        id: uuid(),
        name: 'Resident Evil 3',
        imageUrl: 'https://i.ibb.co/6sPhFzp/resident.jpg',
        price: 75,
        developer: 'Capcom',
        publisher: 'Capcom'
      },
      {
        id: uuid(),
        name: 'Watchdogs Legion',
        imageUrl: 'https://i.ibb.co/VLXM2Wd/watchdogs.png',
        price: 70,
        developer: 'Ubisoft Toronto',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Outriders',
        imageUrl: 'https://i.ibb.co/qn3YMsh/960x0.jpg',
        price: 60,
        developer: 'People Can Fly',
        publisher: 'Square Enix'
      },
      {
        id: uuid(),
        name: 'Gods And Monsters',
        imageUrl: 'https://i.ibb.co/cXRcrRP/godsmonsters.png',
        price: 55,
        developer: 'Ubisoft Quebec',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Skulls & Bones',
        imageUrl: 'https://i.ibb.co/XCg6TBH/skull-and-bones.jpg',
        price: 70,
        developer: 'Ubisoft Singapore',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Ghostwire',
        imageUrl: 'https://i.ibb.co/q5zJ5Qb/ghostwire.jpg',
        price: 50,
        developer: 'Tango Gameworks',
        publisher: 'Bethesda Softworks'
      },
      {
        id: uuid(),
        name: 'Final Fantasy 7',
        imageUrl: 'https://i.ibb.co/sWWJpQR/final-fantasy.jpg',
        price: 40,
        developer: 'Square Enix',
        publisher: 'Square Enix'
      },
      {
        id: uuid(),
        name: 'Marvel Iron Man',
        imageUrl: 'https://i.ibb.co/hKB8b2Y/iron-man.png',
        price: 90,
        developer: 'Camouflaj',
        publisher: 'Sony Interactive'
      }
    ]
  },
  new: {
    id: 2,
    title: 'new',
    routeName: 'new',
    items: [
      {
        id: uuid(),
        name: 'Death Stranding',
        imageUrl: 'https://i.ibb.co/kST3R9V/death.jpg',
        price: 90,
        developer: 'Kojima',
        publisher: 'Kojima Productions'
      },
      {
        id: uuid(),
        name: 'Batman Arkham Knight',
        imageUrl: 'https://i.ibb.co/jvJcRfB/batman.jpg',
        price: 80,
        developer: 'Rocksteady',
        publisher: 'Warner Bros'
      },
      {
        id: uuid(),
        name: 'Days Gone',
        imageUrl: 'https://i.ibb.co/dfkY3DZ/daysgone.jpg',
        price: 85,
        developer: 'SIE Bend Studio',
        publisher: 'Sony Interactive'
      },
      {
        id: uuid(),
        name: 'Modern Warfare',
        imageUrl: 'https://i.ibb.co/VHfKbhM/modern.jpg',
        price: 60,
        developer: 'Activision',
        publisher: 'Activision'
      },
      {
        id: uuid(),
        name: 'Fifa 20',
        imageUrl: 'https://i.ibb.co/3rRzbWv/1-fifa-20-eden-hazard.jpg',
        price: 50,
        developer: 'Electronic Arts',
        publisher: 'Electronic Arts'
      },
      {
        id: uuid(),
        name: 'Star Wars Jedi',
        imageUrl: 'https://i.ibb.co/4PpMzNV/star-wars-jedi-fallen-order.jpg',
        price: 90,
        developer: 'Electronic Arts',
        publisher: 'Electronic Arts'
      },
      {
        id: uuid(),
        name: 'Ghost Recon Breakpoint',
        imageUrl: 'https://i.ibb.co/16pV4Ds/5d71e9be3b0000e255d044cb.jpg',
        price: 50,
        developer: 'Ubisoft Paris',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Tomb Raider Definitve',
        imageUrl: 'https://i.ibb.co/RHccC25/tombraider.jpg',
        price: 60,
        developer: 'Square Enix',
        publisher: 'Square Enix'
      },
      {
        id: uuid(),
        name: 'Apex Legends',
        imageUrl: 'https://i.ibb.co/sPjypCc/apex.jpg',
        price: 40,
        developer: 'Electronic Arts',
        publisher: 'Electronic Arts'
      }
    ]
  },
  simulation: {
    id: 3,
    title: 'Simulation',
    routeName: 'simulation',
    items: [
      {
        id: uuid(),
        name: 'Read Dead Redemption 2',
        imageUrl: 'https://i.ibb.co/7r7RJ5D/reddead.jpg',
        price: 100,
        developer: 'Rockstar Games',
        publisher: 'Rockstar Games'
      },
      {
        id: uuid(),
        name: 'Grand Theft Auto',
        imageUrl: 'https://i.ibb.co/VCJqVc9/GTA-5-Lamar-2.jpg',
        price: 90,
        developer: 'Rockstar Games',
        publisher: 'Rockstar Games'
      },
      {
        id: uuid(),
        name: 'Assassin Creed Origins',
        imageUrl: 'https://i.ibb.co/jrHmPqm/assassins-creed-origins10.jpg',
        price: 80,
        developer: 'Ubisoft',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'The Witcher 3',
        imageUrl: 'https://i.ibb.co/bgK6SHM/witcherww.jpg',
        price: 90,
        developer: 'CD Projekt',
        publisher: 'CD Projekt'
      },
      {
        id: uuid(),
        name: 'Just Cause 4',
        imageUrl: 'https://i.ibb.co/KsFxV7Z/just-cause-4-ps4-800x600-4.jpg',
        price: 70,
        developer: 'Avalanche Studios',
        publisher: 'Square Enix'
      },
      {
        id: uuid(),
        name: 'Watch Dogs 2',
        imageUrl:
          'https://i.ibb.co/LYHWF4d/https-blogs-images-forbes-com-insertcoin-files-2016-11-watch-dogs8.jpg',
        price: 60,
        developer: 'Ubisoft',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Far Cry 5',
        imageUrl: 'https://i.ibb.co/kc6CmCZ/farcry.jpg',
        price: 80,
        developer: 'Ubisoft',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Saints Row 4',
        imageUrl: 'https://i.ibb.co/VLdr0mS/saintsrow.jpg',
        price: 55,
        developer: 'Deep Silver',
        publisher: 'Deep Silver'
      },
      {
        id: uuid(),
        name: "No Man's Sky",
        imageUrl: 'https://i.ibb.co/g4ShQzx/nomansky.jpg',
        price: 60,
        developer: 'Hello Games',
        publisher: 'Hello Games'
      },
      {
        id: uuid(),
        name: 'Dying Light',
        imageUrl:
          'https://i.ibb.co/qMxZjhn/Dying-light-2-rimandato-696x392.jpg',
        price: 75,
        developer: 'Techland',
        publisher: 'Warner Bros'
      }
    ]
  },
  action: {
    id: 4,
    title: 'Action',
    routeName: 'action',
    items: [
      {
        id: uuid(),
        name: "Marvel's Spiderman",
        imageUrl: 'https://i.ibb.co/xmZ1YhV/spider-man-header-suits.jpg',
        price: 100,
        developer: 'Marvel',
        publisher: 'Sony Interactive'
      },
      {
        id: uuid(),
        name: 'Middle Earth: SOM',
        imageUrl: 'https://i.ibb.co/vqSBZGn/showdow.jpg',
        price: 80,
        developer: 'Monolith Productions',
        publisher: 'Warner Bros'
      },
      {
        id: uuid(),
        name: 'Bloodborne',
        imageUrl: 'https://i.ibb.co/MyzY0yv/bloodborne.jpg',
        price: 60,
        developer: 'Sony',
        publisher: 'Sony'
      },
      {
        id: uuid(),
        name: 'Bloodborne',
        imageUrl: 'https://i.ibb.co/MyzY0yv/bloodborne.jpg',
        price: 90,
        developer: 'Sony',
        publisher: 'Sony'
      },
      {
        id: uuid(),
        name: 'God of War 4',
        imageUrl:
          'https://i.ibb.co/DKfR1K0/god-of-war-listing-thumb-01-ps4-eu-19jun17.png',
        price: 60,
        developer: 'Sony Interactive',
        publisher: 'Sony Interactive'
      },
      {
        id: uuid(),
        name: 'Far Cry Primal',
        imageUrl:
          'https://i.ibb.co/0n75f05/fc5-ubicom-search-thumbnail-mobile-221096.jpg',
        price: 75,
        developer: 'Ubisoft',
        publisher: 'Ubisoft'
      },
      {
        id: uuid(),
        name: 'Nier Automata',
        imageUrl: 'https://i.ibb.co/mN6nR5j/1-nier-automata-lucie-malecot.jpg',
        price: 50,
        developer: 'PlatinumGames',
        publisher: 'Square Enix'
      },
      {
        id: uuid(),
        name: 'Tekken 7',
        imageUrl:
          'https://i.ibb.co/Jzb7zvz/c85d18e0940e4fe08bc5a6ecf04181c9-Large.png',
        price: 40,
        developer: 'Namco',
        publisher: 'Namco'
      },
      {
        id: uuid(),
        name: 'Sniper Elite 4',
        imageUrl: 'https://i.ibb.co/9gyqrSh/sniper.jpg',
        price: 45,
        developer: 'Rebellion',
        publisher: 'Rebellion Developments'
      },
      {
        id: uuid(),
        name: 'Yakuza 4',
        imageUrl: 'https://i.ibb.co/NVjf8XX/Yakuza41.jpg',
        price: 65,
        developer: 'Sega',
        publisher: 'Sega'
      }
    ]
  },
  horror: {
    id: 5,
    title: 'Horror',
    routeName: 'horror',
    items: [
      {
        id: uuid(),
        name: 'Biohazard',
        imageUrl: 'https://i.ibb.co/txN073g/re7-mia.png',
        price: 80,
        developer: 'Capcom',
        publisher: 'Capcom'
      },
      {
        id: uuid(),
        name: 'Resident Evil 2',
        imageUrl: 'https://i.ibb.co/yX75by2/re2-announce-screen-04.png',
        price: 90,
        developer: 'Capcom',
        publisher: 'Capcom'
      },
      {
        id: uuid(),
        name: 'Remothered: Broken Porcelain',
        imageUrl: 'https://i.ibb.co/dL4nG8j/brokenporcelain.jpg',
        price: 75,
        developer: 'Chris Darril',
        publisher: 'Stormind Games'
      },
      {
        id: uuid(),
        name: 'Blair Witch',
        imageUrl:
          'https://i.ibb.co/nsN4QHK/Blair-Witch-Gameplay-Walkthrough.jpg',
        price: 90,
        developer: 'Lionsgate Games',
        publisher: 'Lionsgate Games'
      },
      {
        id: uuid(),
        name: 'Layers Of Fear 2',
        imageUrl: 'https://i.ibb.co/xYxRLRN/layers-of-fear-2-17a4g.jpg',
        price: 60,
        developer: 'Gun Media',
        publisher: 'Gun Media'
      },
      {
        id: uuid(),
        name: 'Visage',
        imageUrl:
          'https://i.ibb.co/KsW5V6p/visage-pt-klon-1st-person-horror-900x506.jpg',
        price: 55,
        developer: 'SadSquare Studio',
        publisher: 'SadSquare Studio'
      },
      {
        id: uuid(),
        name: 'The Evil Within 2',
        imageUrl: 'https://i.ibb.co/K6fjXsS/stefanoevilwithin2.jpg',
        price: 40,
        developer: 'Tango Gameworks',
        publisher: 'Bethesda'
      },
      {
        id: uuid(),
        name: 'Silent hill PT',
        imageUrl:
          'https://i.ibb.co/QXJKvBG/https-blogs-images-forbes-com-erikkain-files-2019-09-PT-Game.jpg',
        price: 200,
        developer: 'Konami',
        publisher: 'Konami'
      }
    ]
  },
  racing: {
    id: 5,
    title: 'Racing',
    routeName: 'racing',
    items: [
      {
        id: uuid(),
        name: 'Forza Horizon 4',
        imageUrl:
          'https://i.ibb.co/0Mft609/https-blogs-images-forbes-com-davidthier-files-2018-10-apps-40220-14249457320767201-9d3637cc-1f1d-46f2-9a98-99fd003390c8-1200x674.jpg',
        price: 80,
        developer: 'Turn 10 studios',
        publisher: 'Turn 10 studios'
      },
      {
        id: uuid(),
        name: 'Assetto Corsa',
        imageUrl:
          'https://i.ibb.co/hHmK6vw/assetto-corsa-ps4-smartcdkeys-cheap-cd-key-4-800x450.jpg',
        price: 80,
        developer: '505 Games',
        publisher: '505 Games'
      },
      {
        id: uuid(),
        name: 'Real Racing 3',
        imageUrl: 'https://i.ibb.co/7S9qXDj/1-X0-W6095.jpg',
        price: 80,
        developer: 'Electronic Arts',
        publisher: 'Electronic Arts'
      },
      {
        id: uuid(),
        name: 'Asphalt 9: Legends',
        imageUrl: 'https://i.ibb.co/NsLFdcs/UNADJUSTEDNONRAW-thumb-198b.jpg',
        price: 80,
        developer: 'EA Sports',
        publisher: 'Electronic Arts'
      },
      {
        id: uuid(),
        name: 'Need For Speed',
        imageUrl:
          'https://i.ibb.co/SXfymhh/apps-2950-69435230515002378-af86836f-c697-4e65-bba8-ba1d504754e2.jpg',
        price: 80,
        developer: 'Ghost Games',
        publisher: 'Ghost Games'
      },
      {
        id: uuid(),
        name: 'DiRT 4',
        imageUrl: 'https://i.ibb.co/jfHBfnY/dirt-4-free-download.jpg',
        price: 80,
        developer: 'Feral Interactive',
        publisher: 'Feral Interactive'
      },
      {
        id: uuid(),
        name: 'F1 2018',
        imageUrl:
          'https://i.ibb.co/ynfjwKZ/67e11e1926e82ac917fd8ccc0dc9a2f9.jpg',
        price: 80,
        developer: 'Codemasters',
        publisher: 'Eden Games'
      },
      {
        id: uuid(),
        name: 'CSR Racing 2',
        imageUrl: 'https://i.ibb.co/hYXkFz2/csr2-2-min.jpg',
        price: 80,
        developer: 'NaturalMotion',
        publisher: 'NaturalMotion'
      }
    ]
  }
};

export default SHOP_DATA;
