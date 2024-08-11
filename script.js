document.getElementById('testBtn').addEventListener('click', testRegex, false);

function testRegex() {
  const testString = document.getElementById('testString').value;
  const regexPattern = document.getElementById('regexPattern').value;
  const resultsElement = document.getElementById('results');

  try {
    const regex = new RegExp(regexPattern, 'g'); // 'g' flag for global search
    const matches = testString.match(regex);

    if (matches) {
      resultsElement.innerHTML = matches.length ? 
        `Matches found: <br>${matches.join('<br>')}` : 
        'No matches found.';
    } else {
      resultsElement.innerHTML = 'Invalid regular expression.';
    }
  } catch (e) {
    resultsElement.innerHTML = 'Invalid regular expression.';
  }
}
