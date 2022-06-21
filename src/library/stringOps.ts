export function titleCase(str: string) {
    var splitStr = str.toLowerCase().split(" ")
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(" ")
}

export const convertToMinSex = (s: number) => {
    var ms = s % 1000
    s = (s - ms) / 1000
    var secs = s % 60
    s = (s - secs) / 60
    var mins = s % 60

    let result = mins + ":" + secs

    result.length < 4 && (result = result + "0")

    return result
}
