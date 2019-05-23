var isOutOfBounds = function (map, x, y) {
  var width = map[0].length;
  var height = map.length;
  return x < 0 || x >= width || y < 0 || y >= height;
};

var getCell = function (map, x, y) {
  if (isOutOfBounds(map, x, y)) { return null; }
  return { x: x, y: y, value: map[y][x] };
};

var isMine = function (map, x, y) {
  var cell = getCell(map, x, y);
  return cell && cell.value === '*';
};

var countMinesNearby = function (map, x, y) {
  var neighbors = [
    { x: x - 1, y: y - 1 }, // top left
    { x: x, y: y - 1 },     // top
    { x: x + 1, y: y - 1 }, // top right
    { x: x - 1, y: y },     // left
    { x: x + 1, y: y },     // right
    { x: x - 1, y: y + 1 }, // bottom left
    { x: x, y: y + 1 },     // bottom
    { x: x + 1, y: y + 1 }  // bottom right
  ];

  return neighbors.reduce(function (acc, cell) {
    return acc + (isMine(map, cell.x, cell.y) ? 1 : 0);
  }, 0);
};

var generateMap = function (mines) {
  return mines.map(function (row, y) {
    return row.map(function (item, x) {
      return isMine(mines, x, y) ? '*' : countMinesNearby(mines, x, y);
    });
  });
};

module.exports = {
  generateMap: generateMap
};
