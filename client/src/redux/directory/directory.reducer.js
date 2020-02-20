const INITIAL_STATE = {
  sections: [
    {
      title: 'upcoming',
      imageUrl: 'https://i.ibb.co/qDwgM6x/pre-order.png',
      description:
        'Pre-order the hottest games to get exclusive DLC and bonus content',
      size: 'large',
      id: 1,
      linkUrl: 'shop/upcoming'
    },
    {
      title: 'new',
      imageUrl: 'https://i.ibb.co/cXD6BDh/new.png',
      description: 'Hot new games that are available for you to buy right now!',
      size: 'large',
      id: 2,
      linkUrl: 'shop/new'
    },
    {
      title: 'simulation',
      imageUrl: 'https://i.ibb.co/vzcJPMV/open.png',
      description: 'Role-playing | Open World | First Person',
      id: 3,
      linkUrl: 'shop/simulation'
    },
    {
      title: 'action',
      imageUrl: 'https://i.ibb.co/D7wFyJJ/action.png',
      description: 'Adventure | Shooting | Fighting | Adult',
      id: 4,
      linkUrl: 'shop/action'
    },
    {
      title: 'horror',
      imageUrl: 'https://i.ibb.co/ZB1xRW3/horror.png',
      description: 'Survival | Strategy | Shooter',
      id: 5,
      linkUrl: 'shop/horror'
    },
    {
      title: 'racing',
      imageUrl: 'https://i.ibb.co/MVPW0x9/racing.jpg',
      description: 'Racing | Cop Chase | Speed',
      id: 6,
      linkUrl: 'shop/racing'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
