1. What problem does the context API help solve?

    Context API helps to simplify complex state management.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    `Actions` are types of actions and data associated with those action types contained as info packets that are intended to passed into `reducers`. `Reducers` have similar behaviors to a reduce method attached to an array.  They take in actions and state from the store to update the state by the action payload. The `store` is an object of Javascript that contains the current state and represents every change that occurs within a React application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is on a global level within the application while component state is local. If various components need access to a certain state, application state is the go to.  If a specific component needs access, it's best to use component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `REdux-thunk` allows for operations within the React app to be asynchronus. It intercepts action creators.  The interception will decide if an action passes through or if a function will be dispatched instead as an argument.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Asynchronus redux is a favorite of mine because it was the easiest to understand for me in this sprint.
