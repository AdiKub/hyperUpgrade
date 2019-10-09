export const lastToFirst = (array) => {
    const lastColor = array.splice(-1, 1)
    const newColorsArray = lastColor.concat(...array)
    return newColorsArray
}