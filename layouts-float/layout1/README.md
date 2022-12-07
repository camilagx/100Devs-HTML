# Layout 1

Practicing creating layouts using floats.

![layout1-1](https://user-images.githubusercontent.com/99628526/206043046-0d6047fc-89e4-4172-9ab9-ed532c79dbb4.png)
![layout1-2](https://user-images.githubusercontent.com/99628526/206043057-7b6d1182-bf40-4945-b9bc-5fa9b2a4e9a4.png)


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

