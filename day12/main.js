const testInput = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

const input = `abccccccccaaaaaaaccaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccaaaaaa
abccccccccaaaaaaaccaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccaaaaaa
abccccccccccaaaaaaccaaaaaaaaaaaaaaaaccccccccccccccccacccccccccccccccccccaaaaa
abcccccaaaacaaaaaaccaaaaaaaaaaaaaaaaacccccccccccccccaaaccccaccccccccccccccaaa
abccccaaaaacaaccccccaaaaaacaaacaacaaaaaaacccccccccccaaaacccaacccccccccccccaaa
abaaccaaaaaaccccaaacaaaacacaaacaaccaaaaaacccccccccccaklaccccccccccccccccccaac
abaaccaaaaaaccaaaaaacccccccaaacccaaaaaaaccccccccccckkkllllccccccccccccccccccc
abaaccaaaaaaccaaaaaacccccccaaaaacaaaaaaacccccccccckkkklllllcccccccaaaccaccccc
abacccccaacccccaaaaacccccccaaaaaccaaaaaaacccccccckkkkpppllllccccccaaaaaaccccc
abacccccccccccaaaaacccccccccaaaacccaaaaaaccccccckkkkpppppplllccccddddaaaccccc
abccccccccccccaaaaaccccccccccaaaccaaaccccccccccckkkppppppppllllldddddddaccccc
abccacccccccccccccccccccccccccccccaaccccccccccckkkopppupppplllmmmmdddddaacccc
abccaaacaaaccccccccccccccccccccaaaaaaaaccccccckkkkopuuuuupppllmmmmmmddddacccc
abccaaaaaaaccccccccccccccccccccaaaaaaaacccccjjkkkooouuuuuuppqqqqqmmmmddddcccc
abccaaaaaacccccccccccccccaaccccccaaaacccccjjjjjjoooouuxuuuppqqqqqqmmmmdddcccc
abcaaaaaaaacccccccccccccaaacccccaaaaaccccjjjjoooooouuuxxuuvvvvvqqqqmmmdddcccc
abaaaaaaaaaacccccccaaaaaaacaacccaacaaacccjjjooooouuuuxxxxvvvvvvvqqqmmmdddcccc
abaaaaaaaaaacccaaacaaaaaaaaaacccacccaaccjjjooootttuuuxxxyyvyyvvvqqqmmmeeecccc
abcccaaacaaacccaaaaaaacaaaaaccccccccccccjjjooottttxxxxxxyyyyyyvvqqqmmmeeccccc
abcccaaacccccccaaaaaacaaaaaccccaaccaacccjjjnnntttxxxxxxxyyyyyvvvqqqnneeeccccc
SbccccaacccccccaaaaaaaaacaaacccaaaaaacccjjjnnntttxxxEzzzzyyyyvvqqqnnneeeccccc
abcccccccccccccaaaaaaaaacaaccccaaaaaccccjjjnnnttttxxxxyyyyyvvvrrrnnneeecccccc
abcccaacccccccaaaaaaaaaccccccccaaaaaacccciiinnnttttxxxyyyyywvvrrrnnneeecccccc
abcccaaaaaaccaaaaaaaacccccccccaaaaaaaaccciiiinnnttttxyyywyyywvrrrnnneeecccccc
abcccaaaaaaccaaaaaaaacccccccccaaaaaaaacccciiinnnntttxwywwyyywwwrrnnneeecccccc
abcaaaaaaaccaaaaaaaaaccccccccccccaacccccccciiinnnttwwwwwwwwwwwwrrnnneeecccccc
abcaaaaaaaccaaaaaacccccccccccccccaaccccccaaiiiinnttwwwwwwwwwwwrrrnnnffecccccc
abcccaaaaaaccaaaaaccccccccccccccccccccaaaaaciiinnssswwwssssrwwrrrnnnfffcccccc
abaacaaccaaccaaaccccccccaacccccccccccccaaaaaiiinnssssssssssrrrrrronnfffcccccc
abaccaaccaacccccccccaaacaacccccccccccccaaaaaiiimmmssssssmoosrrrrooonffaaacccc
abaaaccccaaaaaaccccccaaaaaccccccccccccaaaaaccihmmmmsssmmmoooooooooofffaaacccc
abaaaccccaaaaaacccccccaaaaaacccccccccccccaacchhhmmmmmmmmmoooooooooffffaaccccc
abaacccaaaaaaaccccccaaaaaaaaccccaaccccccccccchhhhmmmmmmmgggggooofffffaaaccccc
abaacccaaaaaaaccccccaaaaaaaccccaaaaccccccccccchhhhmmmmhggggggggfffffaaaaccccc
abccccccaaaaaaacccccaacaaaaacccaaaaccccccccccchhhhhhhhggggggggggfffaacaaccccc
abccaacccaaaaaaccccccccaaaaaccaaaaacccccccccccchhhhhhhggaaaaaaccccccccccccccc
abccaaaccaaccccccccccccccaaaaaaaaaccccccccccccccchhhhaaaccaaaacccccccccccccaa
abaaaaaaaccccccccccccccccaaaaaaaaccccccccccccccccccccaaaccccaaccccccccccccaaa
abaaaaaaaccccccccaaaccccacaaaaaacccccccccccccccccccccaaaccccccccccccccccccaaa
abaaaaaacccccccaaaaacaaaaaaaaaaacccccccccccccccccccccaaccccccccccccccccaaaaaa
abaaaaaacccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccaaaaaa`;

const createNode = (elevationLevel, x, y) => ({
  isStart: elevationLevel === "S",
  isEnd: elevationLevel === "E",
  height:
    elevationLevel === "S"
      ? "a".charCodeAt(0)
      : elevationLevel === "E"
      ? "z".charCodeAt(0)
      : elevationLevel.charCodeAt(0),
  range: 0,
  x,
  y,
  visited: elevationLevel === "S",
  visiteNode(origin) {
    this.range = origin.range + 1;
    this.visited = true;
  },
});

const startingPoints = input.split("\n").reduce(
  (acc, cur, y) => [
    ...acc,
    ...cur.split("").reduce((acc, cur, x) => {
      const accCopy = [...acc];
      if (cur === "S" || cur === "a") accCopy.push({ x, y });
      return accCopy;
    }, []),
  ],
  []
);

const getAdjacentNodes = (matrix, node) => {
  const maxY = matrix.length - 1;
  const maxX = matrix[0].length - 1;

  const nodeUP = node.y - 1 < 0 ? null : matrix[node.y - 1][node.x];
  const nodeDown = node.y + 1 > maxY ? null : matrix[node.y + 1][node.x];
  const nodeLeft = node.x - 1 < 0 ? null : matrix[node.y][node.x - 1];
  const nodeRight = node.x + 1 > maxX ? null : matrix[node.y][node.x + 1];

  return [nodeUP, nodeDown, nodeLeft, nodeRight];
};

const processNodes = (origin, adjacentNodes, queue) => {
  let endCoo = null;
  adjacentNodes.forEach((node) => {
    // if node is: not undefined / not already visited / height at most + 1
    if (node && !node.visited && node.height <= origin.height + 1) {
      node.visiteNode(origin);
      queue.push(node);
      if (node.isEnd) {
        endCoo = { y: node.y, x: node.x };
      }
    }
  });
  return endCoo;
};

const findShortestPath = (start, input) => {
  const map = input
    .split("\n")
    .map((line, y) =>
      line
        .split("")
        .map((elevationLevel, x) => createNode(elevationLevel, x, y))
    );

  const queue = [map[start.y][start.x]];
  let end = null;

  while (queue.length) {
    const node = queue.shift();
    const adjacentNodes = getAdjacentNodes(map, node);
    end = processNodes(node, adjacentNodes, queue);
    if (end) break;
  }
  if (end) return map[end.y][end.x].range;
};

const pathRanges = startingPoints.map((start) =>
  findShortestPath(start, input)
);

const shortestPathFromLowestElevation = pathRanges
  .filter((range) => range != undefined)
  .sort((a, b) => a - b);

console.log(shortestPathFromLowestElevation[0]);
