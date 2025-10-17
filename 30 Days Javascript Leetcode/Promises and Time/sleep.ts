// Question Link: https://leetcode.com/problems/sleep
// 2621. Sleep

async function sleep(millis) {
    return new Promise(res => setTimeout(res, millis))
}
