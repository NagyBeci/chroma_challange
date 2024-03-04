NagyBeci: Create a readme.md text for github using the main concepts of our game. It's like a simple Simon Says but only to practice committing to github and using Vue.js.
Consider this html file for reference and provide examples and ideas from it. You can be descriptive and also add cool github badges if you'd like.

GitHub Copilot: # Chroma Challenge

![GitHub last commit](https://img.shields.io/github/last-commit/NagyBeci/chroma_challange)
![GitHub top language](https://img.shields.io/github/languages/top/NagyBeci/chroma_challange)
![GitHub repo size](https://img.shields.io/github/repo-size/NagyBeci/chroma_challange)

Chroma Challenge is a simple, yet engaging game built with Vue.js. It's a color-based version of the classic game "Simon Says". The game is designed to help beginners practice committing to GitHub and using Vue.js.

## How to Play

The game starts when the player clicks the "Start Game" button. A series of colored buttons will appear in the game container. The player must remember the sequence of colors and repeat it by clicking the buttons in the correct order. If the player gets the sequence correct, they move on to the next round where an additional color is added to the sequence. If they get it wrong, a message will display and the game will end.

## Code Overview

The game is built using Vue.js, a progressive JavaScript framework for building user interfaces. The game logic is encapsulated within a Vue instance, which is tied to the `#app` div in our HTML.

```html
<div id="app">
  <!-- game code here -->
</div>
```

The game buttons are created using Vue's `v-for` directive, which is used to render a list of items based on an array. The `:style` directive is used to dynamically change the background color of the buttons.

```html
<button v-for="color in colors" :key="color" :style="{ backgroundColor: color }" class="game-button" @click="clickColor(color)"></button>
```

The game also includes a mini-game feature, where smaller buttons fade out in a sequence. This is achieved using Vue's transition system and CSS animations.

```html
<div v-for="(color, index) in miniGameButtons" :key="index" :style="{ backgroundColor: color }" class="mini-game-button"></div>
```

## Getting Started

To get started with this project:

1. Clone the repository
2. Open `second_page.html` in your browser

Happy coding!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
