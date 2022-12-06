# Layout 1

Practicing creating layouts using floats.

![layout1-1](layouts-float\layout1\media\layout1-1.png)
![layout1-2](layouts-float\layout1\media\layout1-2.png)

#### Problem & Solutions:

1. Floated content made parent container height 0 - 12/6/2022

Solution:
Float on li's removed it from the document flow. Used pseudo element ':after' on ul to use clear property

Resource: CSS Positioning Tutorials
https://www.youtube.com/watch?v=8fQWx-d5qc8&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&index=10&ab_channel=TheNetNinja

2. Line 24: Heading element's position was relative to the document body  instead of section class 'banner.'

Solution:
I made my heading element relative to the image instead of the parent container. Thus, my heading was relative to the HTML element.

#### What I learned:

1. One way to center a block element, regardless of the size of content, is making the width 100% and using text-align property.