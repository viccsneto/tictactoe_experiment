# Socratic Review Report

## Participant Information
- **Name:** Joana da Matta Furtado Ferreira
- **Student ID:** 2110255
- **Consent:** Yes
- **Programming Experience:** University student, 3 years experience but very little JavaScript experience
- **AI Assistant Experience:** Has used ChatGPT
- **LLM Used:** Claude Haiku 4.5
- **Prior Tic-Tac-Toe Experience:** None

## Task 1: Emoji Implementation (🐱 and 🐶)

### Reflective Questions

**Q1: What was implemented?**
- Changed initialization from X to 🐱, getNextPlayer to toggle between cat and dog
- Changed display name to Cat and Dog
- Fixed something for emoji handling in board

**Q2: Module Interaction Explanation**
- createInitialState sets up board and gives first player cat symbol
- getNextPlayer alternates between cat and dog after each move
- Values displayed in UI through status messages

**Q3: Debugging Autonomy**
- Feels simple enough but would be more comfortable with AI assistant
- Would trace flow of switching between players and identify where it fails

**Q4: Logic Justification**
- Purely cosmetic change - emojis treated like letters in game logic

**Q5: Onboarding Capability**
- Could give high-level overview but not detailed implementation explanation

**Q6: Sustainability Without AI**
- Could maintain independently given time to learn JavaScript

**Q7: Satisfaction**
- Satisfied with result

### Socratic Debate

**Socratic Q1: Why was spread operator needed for emoji handling?**
- User: "I have no idea"
- Evaluation: Explained Unicode character handling - emojis are multi-unit characters, split() breaks them, spread operator [...] preserves grapheme clusters

**Socratic Q2: Scalability with 3+ players?**
- User: Current toggle approach breaks with more than 2 players, would need nested if-else
- Evaluation: Correct - demonstrated understanding of architectural limitations

## Task 2: Scoreboard Implementation

### Reflective Questions

**Q1: What was implemented?**
- Scoreboard on right side showing cat and dog wins
- Counters update on each win
- Scores persist across games (don't reset on New Game)

**Q2: Module Interaction Explanation**
- Win counts stored in state object (catWins, dogWins)
- Updated in handleClick when winner exists via updateWins()
- UI displays via render() updating DOM elements
- Persist across games via restartGame() saving/restoring counts

**Q3: Debugging Autonomy**
- Doesn't feel confident due to lack of JavaScript/HTML experience
- Would need help from other developers or online forums
- Would trace scoreboard update/display flow

**Q4: Logic Justification**
- User explicitly requested persistence across games

**Q5: Onboarding Capability**
- Could give high-level explanation but not detailed implementation

**Q6: Sustainability Without AI**
- Would require significant time to study technologies and rewrite to understand

**Q7: Satisfaction**
- Satisfied with result

### Socratic Debate

**Socratic Q1: What happens if win preservation code is removed?**
- User: Win counts would reset to 0 every new game, making scoreboard useless
- Evaluation: Perfect understanding of critical role those lines play

**Socratic Q2: Scalability issues with updateWins() for 3+ players?**
- User: Wouldn't scale, would need else-if statements
- Evaluation: Recognized scalability problem, suggested nested conditionals

## Comparative Reflection

**Task 1 vs Task 2:**
- Task 1 was simpler and more straightforward to implement
- More comfortable explaining and maintaining Task 1
- Reasonably confident could implement Task 1 without AI
- Task 2 would take considerable time without AI assistance
- Task 2 benefited greatly from AI help
- Task 2 was better implemented with AI assistance

## Overall Assessment

The participant demonstrated:
- Good self-awareness of skill limitations
- Logical thinking about code flow and debugging approaches
- Understanding of architectural trade-offs and scalability issues
- Appropriate recognition of when AI assistance is most valuable
- Honest assessment of confidence levels and learning needs

The review revealed that simpler, cosmetic changes (Task 1) were more accessible to the participant, while complex feature additions (Task 2) heavily benefited from AI assistance, highlighting the cognitive debt mitigation potential of AI tools for complex tasks.