
## Random Palette Generator
This website allows you to generate and save a random color palette and adjust them to your liking.

##### Deploy link
[Try the website here!](https://michaelputnam67.github.io/color-random/)

#### Description
Use our site to generate a five color palette swab! The user can generate a new palette set, lock specific colors and then randomize unlocked colors. This new palette can be saved to be referenced later and can also be deleted.  

### Getting Started
To clone to your local machine please follow these steps:
1. Copy the SSH
2. In the terminal run the following commands:
```
git clone git@github.com:michaelputnam67/color-random.git
cd color-random
open index.html
```
3. Start creating new palettes!

#### Dependencies
The project is ready to go when you are. Open it in your browser with the link above and get ready to make some new custom color palettes.

#### Execution
##### Generating New Palettes
- On load you will see five random generated colors.
- If you wish to view an entirely new palette press the **"New Palette" button**.
- If you are satisfied with a specific color click anywhere on the color, its corresponding hexcode or the lock icon.
- When the color is locked the lock icon will toggle from an unlocked icon to a locked icon. These icons are pictured below.

![alt text](/color-random/assets/images/Locked-lock.png "Lock Icon")

![alt text](/color-random/assets/images/unlocked-lock.png "Un-Lock Icon")
- If you click the **"New Palette" button** now only the unlocked colors will changed while the locked colors will remain the same.

##### Saving the Current Palette
- If you really like your currently displayed palette press the **"Save Palette" button**.
- Saved palettes will be displayed on the right hand side in the same order they were saved.
- After the **"Save Palette" button** is pressed the button will be disabled until the **"New Palette" button** is pressed.
- The user is still free to lock or unlock colors as they wish.

#### Deleting Saved Palettes
- When a palette is saved and displayed in the **"Saved Palettes"** section a trash icon will be display to the right of the palette.
- When a users cursor is hovering over the trash can it will toggle to a different trash can indicating it can be clicked.
- ![alt text](/assets/images/Screen Shot 2022-02-26 at 12.23.13 PM.png "Lock Icon")

### Future Additions
In the future, we hope to do the following:
- Add a feature where the user has to confirm that they wish to delete palettes form the **"Saved Palettes"** after they click the trashcan icon located next to it.
- Add a feature that will allow users the ability to select previously saved palettes to then add it back to the main screen to then edit it again.
- Add a feature that will allow a user to double-click a color in the saved palettes. After double clicking the user will then have this color-hex added to their clipboard to paste in their code where necessary.
- Add a feature that will allow the user to manually enter a hex-code value to the main palette. After entering the hex-code and clicking on the lock icon or hitting the enter/return key the specified color will be displayed and locked to randomly generate colors in the other color blocks.

### Authors
- Michael Putnam (michaelputnam67)
- Artan Myrtolli (artanmyrtolli)
- Tyler Tedesco (sted1994)

### Technologies Used
- JavaScript
- HTML
- css

### Acknowledgements
- All members of the 2201 cohort
- Mentors and rocks who helped get us here
