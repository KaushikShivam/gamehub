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
        name: 'Read Dead Redemption 2',
        imageUrl: 'https://i.ibb.co/7r7RJ5D/reddead.jpg',
        price: 100,
        developer: 'Rockstar Games',
        publisher: 'Rockstar Games'
      }
    ]
  }
};

const SHOP_DATA = {
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
