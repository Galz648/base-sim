### Sim Loop

Timer ticks, pushes to store
store reduces the state with the event, reducing a new state.
Timer
State
Store

### Store

Store - Persists game state
Dispatch - Send an event to a store -> pushes to event queue
Reducer - Pure function that applies event to state, returning a new state
