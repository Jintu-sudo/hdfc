# reactProduct

Login page + todo dashboard, converted from a single HTML file into a Vite + React (plain JavaScript) project.

## Run it

```bash
npm install
npm run dev          # app        -> http://localhost:5173
npm run storybook    # components -> http://localhost:6006
npm run lint         # ESLint
```

Log in with username `user` and password `hello`.

## Structure

```
src/
  main.jsx                      entry point (CssBaseline + AuthProvider)
  App.jsx                       shows LoginPage or Dashboard
  context/
    AuthContext.js              createContext
    AuthProvider.jsx            isLoggedIn state, login(), logout()
  components/
    LoginPage.jsx               react-hook-form + MUI
    Dashboard.jsx               todo list state (add / delete / edit)
    TaskRow.jsx                 one table row, owns its own edit state
    *.stories.jsx               Storybook stories
```

Hooks used: `useState` and `useContext` only.
