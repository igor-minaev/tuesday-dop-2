export const dataState: dataStateType = {
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
            heading: 'Конструкция "switch"',
            about: 'Конструкция switch заменяет собой несколько if'
        }
    ]
}
export type dataStateType = {
    pages: PagesType[]
}
export type PagesType = {
    heading: string
    about: string
}