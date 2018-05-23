//converting number into day value and store it in the localstorage.

function exe(res1) {
    
    if (res1 === 0) {
        window.localStorage.setItem("day", "Sunday")
    } else if (res1 === 1) {
        window.localStorage.setItem("day", "Monday")
    } else if (res1 === 2) {
        window.localStorage.setItem("day", "Tuesday")
    } else if (res1 === 3) {
        window.localStorage.setItem("day", "Wednesday")
    } else if (res1 === 4) {
        window.localStorage.setItem("day", "Thursday")
    } else if (res1 === 5) {
        window.localStorage.setItem("day", "Friday")
    } else if (res1 === 6) {
        window.localStorage.setItem("day", "Saturday")
    }
}
export default exe;