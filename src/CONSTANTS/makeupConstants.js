export const tryOnTypes = [
  {
    text: 'Lipstick',
    selected: false,
    key: 'lipstick',
    colors: [
      {
        color: '#DA2486'
      },
      {
        color: '#BB194B'
      },
      {
        color: '#D30506'
      },
      {
        color: '#DE9C87'
      }
    ],
    colorMapKey: 'matte'
  },
  {
    text: 'Eye Liner',
    selected: false,
    key: 'eyeLiner',
    colors: [
      {
        color: '#262626'
      },
      {
        color: '#6E3919'
      },
      {
        color: '#4E61DC'
      },
      {
        color: '#1C4002'
      }
    ],
    colorMapKey: 'matte'
  },
  {
    text: 'Eye Shadow',
    selected: false,
    key: 'eyeShadow',
    colors: [
      {
        color: '#FE7B67'
      },
      {
        color: '#ED9DCC'
      },
      {
        color: '#9F5000'
      },
      {
        color: '#9F5000'
      }
    ],
    colorMapKey: 'eyeShadow1'
  },
  {
    text: 'Blush',
    selected: false,
    key: 'blush',
    colors: [
      {
        color: '#E27E68'
      },
      {
        color: '#FE8FB8'
      },
      {
        color: '#D3A499'
      },
      {
        color: '#F5C98F'
      }
    ],
    colorMapKey: 'blush1'
  }
];

export const makeupConfig = {
  lipstick: {
    config: {
      id: 165,
      categoryName: 'lipstick',
      baseAsset:
        'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss.png',
      pattern: [
        {
          name: 'matte',
          matteColor: '#7F0652',
          matteColorIntensity: 89,
          effectAsset:
            'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss_effect.png'
        }
      ],
      imageUrl: null
    }
  },
  blush: {
    config: {
      id: 165,
      categoryName: 'blush',
      baseAsset:
        'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss.png',
      pattern: [
        {
          name: 'blush1',
          blush1Color: '#7F0652',
          blush1ColorIntensity: 89,
          effectAsset:
            'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss_effect.png'
        }
      ],
      imageUrl: null
    }
  },
  eyeLiner: {
    config: {
      id: 165,
      categoryName: 'eyeLiner',
      baseAsset:
        'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss.png',
      pattern: [
        {
          name: 'matte',
          matteColor: '#7F0652',
          matteColorIntensity: 89,
          effectAsset:
            'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss_effect.png'
        }
      ],
      imageUrl: null
    }
  },
  eyeShadow: {
    config: {
      id: 165,
      categoryName: 'eyeShadow',
      baseAsset:
        'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss.png',
      pattern: [
        {
          name: 'eyeShadow1',
          eyeShadow1Color: '#7F0652',
          eyeShadow1ColorIntensity: 89,
          effectAsset:
            'https://cdn-1.glamar.io/glamar_assets/web/lipstick/gloss/gloss_effect.png'
        }
      ],
      imageUrl: null
    }
  }
};
