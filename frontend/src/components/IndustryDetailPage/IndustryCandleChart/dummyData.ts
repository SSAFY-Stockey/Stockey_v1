// let dummyData: {
//   x: number
//   open: number
//   high: number
//   low: number
//   close: number
// }[]

export const makedummyData = (days: number) => {
  let dummyData = []

  for (let i = 0; i < days; i++) {
    const randomData = {
      x: i,
      open: Math.random() * 100,
      high: Math.random() * 100,
      low: Math.random() * 100,
      close: Math.random() * 100,
      y: 0,
    }
    randomData.y = randomData.close
    dummyData.push(randomData)
  }

  return dummyData
}
