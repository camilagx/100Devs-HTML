# Layout 1

Practicing the use of floats with layouts.

![layout1](https://user-images.githubusercontent.com/99628526/206070265-d8054a41-c502-48d7-be04-4d6ebdd90f97.jpg)

#### Problem & Solutions:

1. **Floated content made parent container height 0** - 12/6/2022

    **Solution:**
    Float on li's removed it from the document flow. Used pseudo element ':after' on ul to use clear property

    **Resource:** [CSS Positioning Tutorials](https://www.youtube.com/watch?v=8fQWx-d5qc8&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&index=10&ab_channel=TheNetNinja)


2. **Line 24: Heading element's position was relative to the document body  instead of section class 'banner.'** - 12/6/2022

    **Solution:**
    I made my heading element relative to the image instead of the parent container. Thus, my heading was relative to the HTML element.

#### What I learned:

1. One way to center a block element, regardless of the size of content, is making the width 100% and using text-align property.

2. When you have padding with 100% width on an element, it will create a horizonal scroll bar. I removed the padding to remove the scrollbar.

Resource: [CSS Positioning Tutorials](https://www.youtube.com/watch?v=8fQWx-d5qc8&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&index=10&ab_channel=TheNetNinja)

