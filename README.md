## React Native Navigators

https://reactnavigation.org/docs/getting-started

## GitHub repo

https://github.com/nirgluzman/React-Native-Drawer-Tab-Navigators.git

### Native Stack Navigator vs. Stack Navigator

- `Native Stack` Navigator provides a way for your app to transition between screens where each new
  screen is placed on top of a stack.
- `Native Stack` uses the Android and IOS native navigation systems to navigate between pages ->
  offers NATIVE performance .
- `Native Stack` has an improved performance compared to `Stack`.
- `Stack` does not really "navigate", but instead will mimic navigation in JavaScript and generic
  Views (a bit like how "Single-Page Application" web apps mimic web navigation).

### Drawer Navigator

- `Drawer` Navigator renders a navigation drawer on the side of the screen which can be opened and
  closed via gestures.

### Tab Navigator

- Tab Navigators allow you to add tabbed navigation to the bottom of your app. The bar is fixed to
  the bottom of the screen.
- Each tab is linked to a Screen or nested Stack Navigator and displays an active state when
  selected.

### Steps to add a Navigator to `App.js`

- Wrapping your app with <NavigationContainer>
- import `createDrawerNavigator` and define `Drawer`.
- Set the Navigator <Drawer.Navigator>; this component should wrap/register all our screens using
  <Drawer.Screen>
- By default, the top most screen is rendered as the starting screen. We can always set the initial
  route using `initalRouteName` prop.
