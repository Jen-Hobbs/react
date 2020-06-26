# Mistakes for first assignment;

Breaking down components:

 - Components are made to encapsulate logic parent doesnt need to know about
 - repetitive components

```js
//run the () function then when selected run props.onclick without the anonymous function you are running the function during render.

props.onClickButton(props.choice) //is now calling and returning a value 

onClick={()=>props.onClickButton(props.choice)} //reference a function instead of running right away
```



```js
newOptions.push(choice) //refer to reference

const newOptions = this.state.clickedOptions.concat(choice) //concat will be a new reference

[.. this.state.clickedOptions, choice] //es6 way
```



Look at object immutability on course info which contains reference function

## Making requests

use componentDidMount() for requests

