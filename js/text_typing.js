let typeText = document.querySelector(".typeText")
let textToBeTyped = "안녕하세요"
let textToBeTypedArr = ["HAPPY \nBIRTHDAY \nTAIN!🎉", "태인님의 \n33번째 생일을 \n축하합니다! :)", "#19910616"]
let index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
    // adding text
    if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
        playAnim()
        }, 3000)
        return
    } else {
        // increment index by 1
        index++
    }
    } else {
    // removing text
    if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
    } else {
        // decrement index by 1
        index--
    }
    }
    // call itself
    playAnim()
}, isAdding ? 120 : 60)
}
// start animation
playAnim()