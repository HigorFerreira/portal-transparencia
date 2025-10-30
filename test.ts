
const text = `
context.beginPath()
context.moveTo(912.4967a, 67.622499)
context.bezierCurveTo(903.5820600000001a, 67.622499, 896.24874a, 74.363819, 895.29807a, 83.023801)
context.lineTo(960.20194a, 83.023801)
context.bezierCurveTo(974.6618900000001a, 83.023801, 987.7432200000001a, 77.13314500000001, 997.1845400000001a, 67.622499)
context.fill()
`.trim()

const screenWidth = 1421.878

console.log(text.replace(/([\d\.-]+)(?=a)a/gm, (_, value) => {
    value = value/screenWidth
    return `${value}*width`
}))