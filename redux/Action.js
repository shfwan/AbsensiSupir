import { Category, Kalender } from "./Type"

export const setCategory = (filter) => ({
    type: Category,
    data: filter
})

export const setKalender = (input) => ({
    type: Kalender,
    data: input
})