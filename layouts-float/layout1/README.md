# Layout 1

Practicing the use of floats with layouts.

![layout1](https://user-images.githubusercontent.com/99628526/206070265-d8054a41-c502-48d7-be04-4d6ebdd90f97.jpg)

#### Problem & Solutions:

1. **The parent container's height is 0 after using the float property on the content.** - 12/6/2022

    **Solution:**
    I used pseudo element ':after' on the unordered list container and changed display to 'block.' I also used the 'clear' property set to 'both' to push the content after the floated elements.

    **Resource:** [CSS Positioning Tutorials](https://www.youtube.com/watch?v=8fQWx-d5qc8&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&index=10&ab_channel=TheNetNinja)


2. **Line 24: Heading element's position was relative to the document body  instead of its parent container'** - 12/6/2022

    **Solution:**
    I made my heading element relative to the image instead of the parent container. Thus, my heading was relative to the HTML element. 

#### What I learned:

1. One way to center a block element, regardless of the size of content, is making the width 100% and using text-align property.

2. When you have padding with 100% width on an element, it will create a horizonal scroll bar. I removed the padding to remove the scrollbar.

    **Resource:** [CSS Positioning Tutorials](https://www.youtube.com/watch?v=8fQWx-d5qc8&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&index=10&ab_channel=TheNetNinja)

