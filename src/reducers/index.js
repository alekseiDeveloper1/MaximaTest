const initialState = {
    cards: [
        {
            id: 1,
            name: 'Программирование на Python для начинающих программистов',
            teacher: 'Павлова Екатерина Дмитриевна',
            about: 'Высшее учреждение',
            around: 'Группа',
            status: 'Завершенный',
        },
        {
            id: 2,
            name: 'Программирование на Python для начинающих программистов',
            teacher: 'Павлова Екатерина Дмитриевна',
            about: 'Высшее учреждение',
            around: 'Группа',
            status: 'Завершенный',
        },
        {
            id: 3,
            name: 'Программирование на Python для начинающих программистов',
            teacher: 'Павлова Екатерина Дмитриевна',
            about: 'Высшее учреждение',
            around: 'Группа',
            status: 'Завершенный',
        },
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return {...state, cards: [...state.cards, action.data]}
        case 'REMOVE_COURSE':
            return {...state, cards: state.cards.filter(product => product.id !== action.id)}
        default:
            return state
    }
}
