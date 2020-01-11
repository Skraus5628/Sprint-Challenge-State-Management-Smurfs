1. What problem does the context API help solve?
    
-> Context API helps ups share prop/state vlalues across components without having to "prop drill" excessively through every level keeping things much easier to follow!

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-> Store: contains the state of the app and changes everything in the app by calling upon it.

Reducers: are functions that take in two arguments, the current state from the store, and the action object. They are similar to callbacks, but not the exactly the same! Within the store there are 
Actions: which hold types and payloads, the type telling the reducer what to do and the payload telling the reducer what to update on state.

-> I'd say the store would be rightfully called a single source of truth as that's where the state is held and transferred, with all of our redux being { connect }ed to it!

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-> Application state: is global! a good time to use this vs component is when we have a piece of state that's updated often between components often

-> Component state: is local! a good time to implement this is when we have a piece of state that is component specific vs re-used and/or if the state is really only being manipulated in a specific component


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-> We use redux-thunk to make the flow asynchronous in order to make API calls from the action creators. 
Redux middleware cuts off the normal redux flow to make a call `before` actions make it to the reducer!

5. What is your favorite state management system you've learned and this sprint? Please explain why!

-> So far I enjoy both pretty equally, they each have their pros and cons, though I have to say `context` will have to win this round, I'm still pretty heavily relying on resources to set up and use redux efficiently, and context just overall has more practical use on most smaller applications with less fuss!