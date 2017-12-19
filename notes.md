# Redux

## What's the problem with distant components in React?
Sharing distance components is cumbersome and error-prone. 
Sometimes parent components must track data that they dont care about, for the sake of thier children.

## What is Redux? Why/when do we use it?
A library that helps us manage global state and helps us deal with 'distance' components
 Stores data(only data that needs to be shared and when its less 'painful' to put it in the store rather than normal way) in the store so that any component can access it without having to go through other levels or components

 Tyler answer: redux provides a store of data to our application, where we can share data among distant components. We use redux only when its less painful than using React state.

## What are the steps to add Redux to a React app?
Steps - Part 1 - Read
1. CreateStore
2. Hook app to store with <Provider> in index.js
3. Hook components that need data to store with connect() and mapStateToProps

Steps - Part 2 - Write
1. Create a reducer(s) with actions and action creators
2. Dispatch actions with dispatch (reccomend to use maDispatchToProps)

## What is a store?
A store is a collection of data that is used by any components that want its data

## What is a reducer? What does the reducer do for us in Redux?

## What is immutability? Why do we use it?
Data is considered immutable when functions that use the data don't mutate it but insteadreturn a modified copy. Because the data is a reference (to an object or array), we'll trivially be able to tell that the data has changed, without needing to dig through the object to see what exactly changed. This is useful in React to know if a component should re-render, or doesn't need to bother.


## Vocab

* action: plain object. All actions must have a type, but the payload is optional
* action creator: a function that creates actions for us. for developer convienience. Help us keep code DRY
* dispatch: we send actions to the store using dispatch