document.getElementById('testBtn').addEventListener('click', testRegex, false);

function testRegex() {
  const testString = document.getElementById('testString').value;
  const regexPattern = document.getElementById('regexPattern').value;
  const resultsElement = document.getElementById('results');
  const isCaseInsensitive = document.getElementById('caseInsensitive').checked; // Check if case-insensitive flag is set

  try {
    // Create the regex with the appropriate flags
    const flags = isCaseInsensitive ? 'gi' : 'g'; 
    const regex = new RegExp(regexPattern, flags);
    const matches = testString.match(regex);

    if (matches) {
      resultsElement.innerHTML = matches.length ? 
        `Matches found: <br>${matches.join('<br>')}` : 
        'No matches found.';
    } else {
      resultsElement.innerHTML = 'No matches found.';
    }
  } catch (e) {
    resultsElement.innerHTML = 'Invalid regular expression.';
  }
}
