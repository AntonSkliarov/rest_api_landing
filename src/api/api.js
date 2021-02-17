export const getImages = async () => {
  const response = await fetch("https://pixabay.com/api/?key=19263689-03b29d7c418392128dadd7665&q=purple+car&image_type=photo");

    if (!response.ok) {
      return 'Response Error';
    }

  const result = await response.json();

  return result;
}