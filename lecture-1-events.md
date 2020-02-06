# 2.4.1 - JS Events

---
/INTERACTING WITH THE USER.
## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

#### User Interface Events

- `load`
- `unload`
- `error`
- `resize`
- `scroll`

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus`
- `blur`
- `focusin` (_new; not supported by Firefox_)
- `focusout` (_new; same as blur; not supported by Firefox_)

---

##### Mouse Events

- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout` - event when leaves the selected element. 
- `mousemove` - any time mouse moves. 

---

##### Keyboard Events

- `input`
- `keydown` //if you hold down, it will keep triggering. 
- `keypress` // when it's released. 
- `keyup`

---

### Form Events

- `submit` //use the form tag. Input for email and put submit button. If it's type submit, ti will trigger submit event. 
- `change`// In the email form.
- `input`/

---

### HTML5 Events

- `DOMContentLoaded`
- `hashchange`
- `beforeunload`

---

### CSS Events

- `transitionend`
- `animationstart`
- `animationend`

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example

const button = document.getElementById('btn');
function handleOuch = function() {
    console.log('ouch!');
}
button.addEventListener('click', handleOuch);

//remove it
button.removeEventListener('click', handleOuch);
```

---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

//need to have data about the event. 

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`
- `target`
- `stopPropagation()`

---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click `submit` in a Form

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target
//I want to analyze what was entered. 
- The  `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.


//When clicking, it will clikc on everything (all tags) before the image. Example here, it will click on the div, then UL then Li. But if I have an event click on the li as well, it will trigger both events when clikcing on tge image. 
```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase //capturing and not doing anything
- The Event Target Phase //once raches here, it will trigger itself. 
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    //the node that has the vent will trigger first.
    
    //always goes all the way down first, then go up. So in this case, as specific as possible and go down to the button, and then on the way back up, it will trigger the handler for the paragraph. 
let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});

button.addEventListener("mousedown", event => {
    console.log("Handler for button.");


    //it will stop whereever you put event.propagation. 
    //event.button2 means RIGHT CLICKING. 
    if (event.button == 2) event.stopPropagation();
});
```
---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---
<!-- READ MORE -->
[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---
