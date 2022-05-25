export function foldTable(headersIn: string[], rowsIn: string[][], foldCount: number) {
  const numRows = Math.ceil(rowsIn.length / foldCount)
  const recWidth = rowsIn[0]?.length ?? 0
  let rows: string[][] = []
  let headers: string[] = []

  for (let j = 0; j < foldCount; j++) {
    for (let k = 0; k < recWidth; k++) {
      headers.push(headersIn[k])
    }
  }

  for (let i = 0; i < numRows; i++) {
    rows[i] = []
  }
  for (let j = 0; j < foldCount * numRows; j++) {
    let rr = j - Math.floor(j / numRows) * numRows
    for (let k = 0; k < recWidth; k++) {
      rows[rr].push(rowsIn[j] && rowsIn[j][k] ? rowsIn[j][k] : ' ')
    }
  }

  return { headers, rows}
}