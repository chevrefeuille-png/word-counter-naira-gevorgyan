const textInput = document.getElementById("text-input");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const words = (text.match(/\b\w+\b/g) || []).length;
  const sentences = (text.match(/[.!?]+/g) || []).length;
  const paragraphs = text.split(/\n+/).filter(p => p.trim() !== "").length;

  const avgWordLength = words > 0 ? (letters / words).toFixed(2) : 0;
  const readingTime = (words / 200).toFixed(2);

  document.getElementById("letters").textContent = letters;
  document.getElementById("words").textContent = words;
  document.getElementById("sentences").textContent = sentences;
  document.getElementById("paragraphs").textContent = paragraphs;
  document.getElementById("avg-word-length").textContent = avgWordLength;
  document.getElementById("reading-time").textContent = `${readingTime} min`;
});
