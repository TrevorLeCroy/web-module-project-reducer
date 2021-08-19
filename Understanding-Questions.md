# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* handleClick is called 
* dispatch is called
* addOne is called, returning a new object
* the reducer is called
* reducer takes the path given by the action
* state is modified
* TotalDisplay shows the total plus 1.
