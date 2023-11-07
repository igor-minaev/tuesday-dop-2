export const dataState: DataStateType = {
    pages: [
        {
            heading: 'Цикл while',
            about: 'Цикл while имеет следующий синтаксис: '
        },
        {
            heading: 'Цикл for',
            about: 'Цикл for имеет следующий синтаксис: '
        },
        {
            heading: 'Цикл "switch"',
            about: 'Цикл "switch" имеет следующий синтаксис: '
        }
    ]
}

export type DataStateType = {
    pages: PageType[]
}

export type PageType = {
    heading: string
    about: string
}