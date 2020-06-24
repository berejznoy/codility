function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let lastStep = 0

    if(X === 1 && A[0] === 1) return 0
    for (let i = 1; i <= X; i++) {
        const index = A.indexOf(i)
        if (index === -1) return -1
        if (lastStep < index) lastStep = index
    }
    return lastStep
}