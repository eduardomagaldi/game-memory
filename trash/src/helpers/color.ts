export default {
  getColor,
};

function getColor(numberOfCards: number): string {
  const colors: { [key: string]: string } = {
    "4": "easy",
    "8": "medium",
    "12": "hard",
  };

  return colors[numberOfCards.toString()];
}
