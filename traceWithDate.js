export default function trace(trace) {
  var nowMilliseconds = new Date()
  const seconds = nowMilliseconds.getSeconds()
  const milliSeconds = nowMilliseconds.getMilliseconds()
  const dateFormated = `${seconds}:${milliSeconds}`
  console.log(dateFormated + ' : ' + trace)
}
