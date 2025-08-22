# Memory Card Game 🎮

A fun and interactive memory card matching game built with HTML, CSS, and JavaScript. Test your memory by finding matching pairs of Ben 10 themed cards!

## 🎯 Game Overview

The Memory Card Game is a classic concentration game where players flip cards to find matching pairs. The game features:
- 16 cards (8 pairs) arranged in a 4x4 grid
- Ben 10 themed card images
- Timer to track your speed
- Move counter to track efficiency
- Pause/Resume functionality
- Reset option to start over

## 🚀 Features

### Core Gameplay
- **Card Flipping**: Click on cards to reveal hidden images
- **Pair Matching**: Find two cards with the same image to make a match
- **Win Condition**: Match all 8 pairs to complete the game

### Game Controls
- **Start Game**: Begin the timer and enable card interactions
- **Pause/Resume**: Pause the timer and game at any time
- **Reset Game**: Clear all progress and start fresh

### Tracking & Stats
- **Move Counter**: Tracks the number of attempts made
- **Timer**: Shows elapsed time in MM:SS format
- **Victory Message**: Congratulates players upon completion

## 🎨 Design Features

### Visual Theme
- Ben 10 inspired color scheme (green and dark green)
- Smooth card flip animations (0.6s transition)
- Responsive layout with three main panels

### User Interface
- **Left Panel**: Game title, instructions, and start button
- **Center Panel**: 4x4 card grid with flip animations
- **Right Panel**: Game statistics and reset button

## 🛠️ Technical Implementation

### File Structure
```
memory-card-game/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Game logic and interactions
└── media/              # Card images
    ├── back.jpg        # Card back design
    ├── photo-1.jpg     # Alien X
    ├── photo-2.jpg     # Heat Blast
    ├── photo-3.jpg     # Doggy
    ├── photo-4.jpg     # Four Arms
    ├── photo-5.jpg     # Ben 10
    ├── photo-6.jpg     # Omnitrix
    ├── photo-7.jpg     # Big Chill
    └── photo-8.jpg     # Electro
```

### Key Technologies
- **HTML5**: Semantic structure with data attributes
- **CSS3**: Flexbox layout, 3D transforms, animations
- **Vanilla JavaScript**: Event handling, DOM manipulation, timers

### Card Matching Pairs
1. **Ben 10** (cards 1 & 13)
2. **Heat Blast** (cards 2 & 9)
3. **Big Chill** (cards 3 & 12)
4. **Alien X** (cards 4 & 10)
5. **Omnitrix** (cards 5 & 11)
6. **Doggy** (cards 6 & 15)
7. **Four Arms** (cards 7 & 16)
8. **Electro** (cards 8 & 14)

## 🎮 How to Play

1. **Start the Game**: Click the "Start Game" button to begin
2. **Flip Cards**: Click on any card to reveal its image
3. **Find Matches**: Try to remember card locations and find matching pairs
4. **Complete the Game**: Match all 8 pairs to win
5. **Track Progress**: Monitor your moves and time in the right panel

### Game Rules
- Only two cards can be flipped at a time
- If cards match, they remain face up
- If cards don't match, they flip back after a brief delay
- The game tracks your moves and elapsed time
- You can pause and resume at any time

## 🔧 Installation & Setup

1. **Download/Clone**: Get all project files
2. **Image Assets**: Ensure all images are in the `media/` folder
3. **Open**: Launch `index.html` in any modern web browser
4. **Play**: No additional setup required!

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with CSS3 and ES6 support

## 🎨 Customization Options

### Easy Modifications
- **Card Images**: Replace images in the `media/` folder
- **Theme Colors**: Modify CSS color variables
- **Grid Size**: Adjust card container dimensions
- **Animation Speed**: Change transition durations

### Advanced Customization
- **Difficulty Levels**: Add more cards for harder gameplay
- **Sound Effects**: Integrate audio feedback
- **High Scores**: Implement local storage for best times
- **Themes**: Create multiple visual themes

## 🐛 Known Features

### Current Limitations
- Fixed 4x4 grid layout
- No difficulty levels
- No sound effects
- No high score persistence

### Future Enhancements
- Multiple difficulty levels (3x4, 5x6, etc.)
- Sound effects and background music
- Local storage for high scores
- Different card themes
- Mobile touch optimization

## 📱 Mobile Responsiveness

The current version is optimized for desktop browsers. For mobile devices:
- Cards may appear smaller on small screens
- Touch interactions work but may need optimization
- Consider responsive design improvements for mobile

## 🤝 Contributing

Feel free to contribute improvements:
1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

### Contribution Ideas
- Mobile responsiveness improvements
- Additional themes and card sets
- Sound effects integration
- Performance optimizations
- Accessibility improvements

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Acknowledgments

- Ben 10 franchise for character inspiration
- CSS-Tricks for animation techniques
- MDN Web Docs for JavaScript references

---

**Happy Gaming!** 🎮 Test your memory and see how quickly you can match all the pairs!