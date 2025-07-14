# rock paper scissors

a minimal browser-based rock paper scissors game built using html, css, and javascript.  
it's straightforward - click one of the three options, the computer picks randomly, and you get an instant result.

## live demo

https://asitos.github.io/rockPaperScissors/

## features

- clean, minimal ui  
- classic rps logic  
- custom amount of rounds
- score tracking, but no round winning history
- entirely frontend - no external libraries or frameworks  

## how it works

- you click a move (rock / paper / scissors)  
- the computer makes a random move using Math.random.
- javascript compares both and outputs the result  

all core logic is inside `rockPaperScissors.js`.

## tech stack

- html  
- css  
- javascript  

## running locally

if you want to run it locally:

```bash
git clone https://github.com/asitos/rockPaperScissors
cd rockPaperScissors
open index.html
