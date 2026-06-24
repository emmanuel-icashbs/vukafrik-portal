export const getTextWithFixedLength = (
  text: string,
  length: number = 75,
): string => {
  const textLength = text.length;
  if (textLength === length) {
    return text;
  }
  if (textLength < length) {
    const spaceLeft = length - textLength;
    const spaces = " ".repeat(spaceLeft);
    text += spaces;
    return text;
  }
  return text.substring(0, length - 3) + "...";
};
