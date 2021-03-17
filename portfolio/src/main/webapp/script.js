// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I play some sports with my left hand, albeit being right handed.', 'I am currently learning guitar.', 'I am 19 years old.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function showServerTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}

async function generateRandomResponse() {
  const responseFromServer = await fetch('/random');
  const textFromResponse = await responseFromServer.text();

  const rnContainer = document.getElementById('random-generator');
  rnContainer.innerText = textFromResponse;
}

async function changeSentence(){
    const text = document.getElementById('translate');
    const textWords = document.getElementById('translate').innerHTML;
    const params = new URLSearchParams();
    params.append('text', textWords);
    fetch('/translate', {
        method: 'POST',
        body: params
    }).then(response => response.text())
        .then((res) => {
          text.innerText = res;
        })
}