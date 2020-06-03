import { getFilteredValue } from './index'

// list: [
//     {
//       id: 1,
//       title: 'Женская стрижка на длинные волосы',
//       description: 'длина волос от 30 см',
//       gender: [
//         'женский'
//       ],
//       price: 800,
//       type: 'стрижка',
//       img: 'https://picsum.photos/id/548/300/230'
//     },
//     {
//       id: 2,
//       title: 'Женская стрижка на волосы средней длины',
//       description: 'длина волос от 15 до 30 см',
//       gender: [
//         'женский'
//       ],
//       price: 700,
//       type: 'стрижка',
//       img: 'https://picsum.photos/id/550/300/230'
//     },
//     {
//       id: 3,
//       title: 'Мытье волос',
//       gender: [
//         'женский',
//         'мужской'
//       ],
//       price: 100,
//       type: 'уход',
//       img: 'https://picsum.photos/id/628/300/230'
//     },
//     {
//       id: 4,
//       title: 'Женская стрижка на короткие волосы',
//       description: 'длина волос до 15 см',
//       gender: [
//         'женский'
//       ],
//       price: 600,
//       type: 'стрижка',
//       img: 'https://picsum.photos/id/64/300/230'
//     },
//     {
//       id: 5,
//       title: 'Женская стрижка горячими ножницами',
//       gender: [
//         'женский'
//       ],
//       price: 500,
//       type: 'стрижка',
//       img: 'https://picsum.photos/id/633/300/230'
//     },
//     {
//       id: 6,
//       title: 'Мужская модельная стрижка',
//       description: 'description',
//       gender: [
//         'мужской'
//       ],
//       price: 800,
//       type: 'стрижка',
//       img: 'https://picsum.photos/id/1011/300/230'
//     },
//     {
//       id: 7,
//       title: 'Укладка волос',
//       gender: [
//         'женский',
//         'мужской'
//       ],
//       price: 100,
//       type: 'стайлинг',
//       img: 'https://picsum.photos/id/1005/300/230'
//     }
//   ],

it('filter empty', () => {
  const state = {
    filter: {
      filterValue: '',
      filterByGender: null,
      filterByType: null,
      filterByPrice: null
    },
    list: []
  }
  const result = []

  expect(getFilteredValue(state)).toEqual(result)
})

it('filter filterValue', () => {
  const state = {
    filter: {
      filterValue: 'женс',
      filterByGender: null,
      filterByType: null,
      filterByPrice: null
    },
    list: [
      {
        id: 1,
        title: 'Женская стрижка на длинные волосы',
        description: 'длина волос от 30 см',
        gender: ['женский'],
        price: 800,
        type: 'стрижка',
        img: 'https://picsum.photos/id/548/300/230'
      },
      {
        id: 3,
        title: 'Мытье волос',
        gender: ['женский', 'мужской'],
        price: 100,
        type: 'уход',
        img: 'https://picsum.photos/id/628/300/230'
      }
    ]
  }
  const result = [
    {
      id: 1,
      title: 'Женская стрижка на длинные волосы',
      description: 'длина волос от 30 см',
      gender: ['женский'],
      price: 800,
      type: 'стрижка',
      img: 'https://picsum.photos/id/548/300/230'
    }
  ]

  expect(getFilteredValue(state)).toEqual(result)
})

it('filter filterByGender', () => {
  const state = {
    filter: {
      filterValue: '',
      filterByGender: 'мужской',
      filterByType: null,
      filterByPrice: null
    },
    list: [
      {
        id: 1,
        title: 'Женская стрижка на длинные волосы',
        description: 'длина волос от 30 см',
        gender: ['женский'],
        price: 800,
        type: 'стрижка',
        img: 'https://picsum.photos/id/548/300/230'
      },
      {
        id: 3,
        title: 'Мытье волос',
        gender: ['женский', 'мужской'],
        price: 100,
        type: 'уход',
        img: 'https://picsum.photos/id/628/300/230'
      }
    ]
  }
  const result = [
    {
      id: 3,
      title: 'Мытье волос',
      gender: ['женский', 'мужской'],
      price: 100,
      type: 'уход',
      img: 'https://picsum.photos/id/628/300/230'
    }
  ]

  expect(getFilteredValue(state)).toEqual(result)
})

it('filter filterByType', () => {
  const state = {
    filter: {
      filterValue: '',
      filterByGender: null,
      filterByType: 'уход',
      filterByPrice: null
    },
    list: [
      {
        id: 1,
        title: 'Женская стрижка на длинные волосы',
        description: 'длина волос от 30 см',
        gender: ['женский'],
        price: 800,
        type: 'стрижка',
        img: 'https://picsum.photos/id/548/300/230'
      },
      {
        id: 3,
        title: 'Мытье волос',
        gender: ['женский', 'мужской'],
        price: 100,
        type: 'уход',
        img: 'https://picsum.photos/id/628/300/230'
      }
    ]
  }
  const result = [
    {
      id: 3,
      title: 'Мытье волос',
      gender: ['женский', 'мужской'],
      price: 100,
      type: 'уход',
      img: 'https://picsum.photos/id/628/300/230'
    }
  ]

  expect(getFilteredValue(state)).toEqual(result)
})

it('filter filterByPrice', () => {
  const state = {
    filter: {
      filterValue: '',
      filterByGender: null,
      filterByType: null,
      filterByPrice: 500
    },
    list: [
      {
        id: 1,
        title: 'Женская стрижка на длинные волосы',
        description: 'длина волос от 30 см',
        gender: ['женский'],
        price: 800,
        type: 'стрижка',
        img: 'https://picsum.photos/id/548/300/230'
      },
      {
        id: 3,
        title: 'Мытье волос',
        gender: ['женский', 'мужской'],
        price: 100,
        type: 'уход',
        img: 'https://picsum.photos/id/628/300/230'
      }
    ]
  }
  const result = [
    {
      id: 3,
      title: 'Мытье волос',
      gender: ['женский', 'мужской'],
      price: 100,
      type: 'уход',
      img: 'https://picsum.photos/id/628/300/230'
    }
  ]

  expect(getFilteredValue(state)).toEqual(result)
})

it('filter filterByGender & filterByType', () => {
  const state = {
    filter: {
      filterValue: '',
      filterByGender: 'мужской',
      filterByType: 'уход',
      filterByPrice: null
    },
    list: [
      {
        id: 1,
        title: 'Женская стрижка на длинные волосы',
        description: 'длина волос от 30 см',
        gender: ['женский'],
        price: 800,
        type: 'уход',
        img: 'https://picsum.photos/id/548/300/230'
      },
      {
        id: 3,
        title: 'Мытье волос',
        gender: ['женский', 'мужской'],
        price: 100,
        type: 'уход',
        img: 'https://picsum.photos/id/628/300/230'
      }
    ]
  }
  const result = [
    {
      id: 3,
      title: 'Мытье волос',
      gender: ['женский', 'мужской'],
      price: 100,
      type: 'уход',
      img: 'https://picsum.photos/id/628/300/230'
    }
  ]

  expect(getFilteredValue(state)).toEqual(result)
})

it('filter filterByType & filterByPrice', () => {
  const state = {
    filter: {
      filterValue: '',
      filterByGender: null,
      filterByType: 'уход',
      filterByPrice: 500
    },
    list: [
      {
        id: 1,
        title: 'Женская стрижка на длинные волосы',
        description: 'длина волос от 30 см',
        gender: ['женский'],
        price: 800,
        type: 'стрижка',
        img: 'https://picsum.photos/id/548/300/230'
      },
      {
        id: 6,
        title: 'Мужская модельная стрижка',
        description: 'description',
        gender: ['мужской'],
        price: 300,
        type: 'уход',
        img: 'https://picsum.photos/id/1011/300/230'
      }
    ]
  }
  const result = [
    {
      id: 6,
      title: 'Мужская модельная стрижка',
      description: 'description',
      gender: ['мужской'],
      price: 300,
      type: 'уход',
      img: 'https://picsum.photos/id/1011/300/230'
    }
  ]

  expect(getFilteredValue(state)).toEqual(result)
})
