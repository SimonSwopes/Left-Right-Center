# Left-Right-Center

## A cross platform mobile app that tracks scores, courses, games, and other key aspects of the classic golf game.

### Framework
Development uses the React-Native framework along with expo for rapid development and testing.
There are other dependencies too that allow for more features, such as, react navigation and some community designed elements.

### File Structure
**Contexts Folder**
<br>
Code that isn't used for visual Elements of the App.
<br>
Defined within it are mant contexts to allow communicaiton between screens and some Javascipt files that define the game logic itself.
<br>
<br>
**Screens Folder**
<br>
has the code that defines the visual elements of the app. There are several screens and anytime a new screen is added it should have it's own file.
<br>
Standardized stylesheet needs to be designed in the future.
<br>
<br>
**assets Folder**
<br>
standard js folder to contain all the imported libay assets required by the framework.
<br>
<br>
**App.js**
<br>
this is the root of our code and is where the navigator is defined and the rules for navigating between screens designed.
<br>
all other files are standard for a react project and just help with package managment and so on.
