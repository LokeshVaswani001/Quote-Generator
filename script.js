const quoteInput = document.getElementById('quoteInput');
const tweetBtn = document.getElementById('tweetBtn');

quoteInput.addEventListener('input', () => {
  const quote = quoteInput.value.trim();
  if (quote) {
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  } else {
    tweetBtn.href = "#";
  }
});
