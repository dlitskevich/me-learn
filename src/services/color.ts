type rgb= {
    red:number,
    green:number,
    blue:number
}
export const getColor = (ratio:number, from = { red: 245, green: 245, blue: 245 }, to = { red: 0, green: 110, blue: 0 }) => {
  const color = getRgb(ratio, from, to);
  return `rgb(${color.red},${color.green},${color.blue})`;
};

const getRgb = (ratio:number, from:rgb, to:rgb) => {
  const vector = getVector(from, to);
  return sum(from, multiply(ratio, vector));
};

const getVector = (from :rgb, to : rgb) => sum(to, multiply(-1, from));

const sum = (c1 :rgb, c2 : rgb) => ({ red: c2.red + c1.red, green: c2.green + c1.green, blue: c2.blue + c1.blue });

const multiply = (r:number, vector:rgb) => ({ red: r * vector.red, green: r * vector.green, blue: r * vector.blue });
