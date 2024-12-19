function toggleCertainWordsInput() {
    var generationType = document.getElementById('generationType').value;
    var certainWordsContainer = document.getElementById('certainWordsContainer');

    if (generationType === 'paragraph') {
        certainWordsContainer.style.display = 'block';
    } else {
        certainWordsContainer.style.display = 'none';
        hideCertainWordsCountInput();
    }
}

function toggleCertainWordsCountInput() {
    var wordType = document.getElementById('wordType').value;
    var certainWordsCountContainer = document.getElementById('certainWordsCountContainer');

    if (wordType === 'certain') {
        certainWordsCountContainer.style.display = 'block';
    } else {
        certainWordsCountContainer.style.display = 'none';
    }
}

function hideCertainWordsCountInput() {
    var certainWordsCountContainer = document.getElementById('certainWordsCountContainer');
    certainWordsCountContainer.style.display = 'none';
}

function generateLorem() {
    var countInput = document.getElementById('count');
    var count = countInput.value;
    if (count === '') {
        document.getElementById('errorMessage').style.display = 'block';
        countInput.classList.add('error'); // Add 'error' class to input field
        return;
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        countInput.classList.remove('error'); // Remove 'error' class from input field
    }

    var generationType = document.getElementById('generationType').value;
    var loremText = '';

    if (generationType === 'word') {
        loremText = generateLoremText(parseInt(count), true);
    } else if (generationType === 'sentence') {
        loremText = generateLoremText(parseInt(count), false);
    } else if (generationType === 'paragraph') {
        var wordType = document.getElementById('wordType').value;
        var certainWordsCount = parseInt(document.getElementById('certainWordsCount').value);
        if (certainWordsCount < 5) {
            document.getElementById('certainWordsCount').classList.add('error');
            document.getElementById('certainWordsCountError').style.display = 'block';
            return;
        } else {
            document.getElementById('certainWordsCount').classList.remove('error');
            document.getElementById('certainWordsCountError').style.display = 'none';
        }
        loremText = generateLoremText(parseInt(count), false, true, wordType, certainWordsCount);
    }

    document.getElementById('loremText').innerText = loremText;
}

function generateLoremText(count, byWord, byParagraph, wordType, certainWordsCount) {
    // Lorem Ipsum text generation logic
    // You can use libraries like lorem-ipsum to do this
    // For simplicity, let's generate random words/sentences here
    var lorem = '';
    var words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."];

    if (byWord) {
        for (var i = 0; i < count; i++) {
            lorem += getRandomElement(words) + ' ';
        }
    } else if (byParagraph) {
        for (var i = 0; i < count; i++) {
            if (wordType === 'uncertain') {
                lorem += generateParagraph(words) + '\n\n';
            } else if (wordType === 'certain') {
                lorem += generateCertainWordsParagraph(words, certainWordsCount) + '\n\n';
            }
        }
    } else {
        for (var i = 0; i < count; i++) {
            lorem += generateSentence(words) + ' ';
        }
    }
    
    return lorem.trim();
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateSentence(words) {
    var sentenceLength = Math.floor(Math.random() * 8) + 4; // Random sentence length between 4 and 12 words
    var sentence = '';

    for (var i = 0; i < sentenceLength; i++) {
        sentence += getRandomElement(words) + ' ';
    }

    return sentence.trim() + '.';
}

function generateParagraph(words) {
    var paragraphLength = Math.floor(Math.random() * 5) + 3; // Random paragraph length between 3 and 7 sentences
    var paragraph = '';

    for (var i = 0; i < paragraphLength; i++) {
        paragraph += generateSentence(words) + ' ';
    }

    return paragraph.trim();
}

function generateCertainWordsParagraph(words, certainWordsCount) {
    var paragraph = '';

    for (var i = 0; i < certainWordsCount; i++) {
        paragraph += getRandomElement(words) + ' ';
    }

    return paragraph.trim();
}

function validateWordCount() {
    var certainWordsCount = document.getElementById('certainWordsCount').value;
    if (certainWordsCount < 5) {
        document.getElementById('certainWordsCount').classList.add('error');
        document.getElementById('certainWordsCountError').style.display = 'block';
    } else {
        document.getElementById('certainWordsCount').classList.remove('error');
        document.getElementById('certainWordsCountError').style.display = 'none';
    }
}

function generateDefaultLorem() {
    var defaultLoremText = generateLoremText(49, true); // Generate 49 words Lorem Ipsum text
    document.getElementById('loremText').innerText = defaultLoremText;
}

// Call the function to generate default Lorem Ipsum text when the page loads
window.onload = function() {
    generateDefaultLorem();
}

function copyLorem() {
    var message = document.getElementById('loremText');
    var range = document.createRange();
    range.selectNode(message);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select the text
    document.execCommand('copy'); // Copy the text
    window.getSelection().removeAllRanges(); // Clear the selection
    
    var copyButton = document.querySelector('.copy');
    copyButton.textContent = 'Copied'; // Change button text
    setTimeout(function() {
        copyButton.textContent = 'Copy'; // Change button text back after a delay
    }, 500); // Change back after 0.5 seconds
}


function generateLorem() {
    var countInput = document.getElementById('count');
    var count = countInput.value;
    
    // Check if count is empty or 0
    if (count === '' || parseInt(count) === 0) {
        document.getElementById('errorMessage').style.display = 'block';
        countInput.classList.add('error'); // Add 'error' class to input field
        return;
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        countInput.classList.remove('error'); // Remove 'error' class from input field
    }

    var generationType = document.getElementById('generationType').value;
    var loremText = '';

    if (generationType === 'word') {
        loremText = generateLoremText(parseInt(count), true);
    } else if (generationType === 'sentence') {
        loremText = generateLoremText(parseInt(count), false);
    } else if (generationType === 'paragraph') {
        var wordType = document.getElementById('wordType').value;
        var certainWordsCount = parseInt(document.getElementById('certainWordsCount').value);
        if (certainWordsCount < 5) {
            document.getElementById('certainWordsCount').classList.add('error');
            document.getElementById('certainWordsCountError').style.display = 'block';
            return;
        } else {
            document.getElementById('certainWordsCount').classList.remove('error');
            document.getElementById('certainWordsCountError').style.display = 'none';
        }
        loremText = generateLoremText(parseInt(count), false, true, wordType, certainWordsCount);
    }

    document.getElementById('loremText').innerText = loremText;
}

// Add event listener to count input field
var countInput = document.getElementById('count');
countInput.addEventListener('input', function() {
    if (countInput.value !== '' && parseInt(countInput.value) !== 0) {
        document.getElementById('errorMessage').style.display = 'none';
        countInput.classList.remove('error'); // Remove 'error' class from input field
    }
});