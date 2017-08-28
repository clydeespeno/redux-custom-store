#### Purpose
The purpose of this repository is to demonstrate the problem described in this SO question

https://stackoverflow.com/questions/45874911/component-not-rerendering-when-passing-store-manually-to-components-react-redux

#### How to run
```bash
npm run webpack:watch
```

or
```bash
npm run webpack
```

then open index.html in this repository in any of your browser

#### What to expect
The page will render empty,
when you dispatch the following action

```
{
    type: 'todos_GET_SUCCESS',
    response: [
        {
            id: 1,
            title: "Foo",
            status: "active"
        },
        {
            id: 2,
            title: "Fix",
            status: "completed"
        },
        {
            id: 3,
            title: "Fly",
            status: "completed"
        }
    ]
}
```

the store page will be updated, however, the connected component will not rerender

The actions can be dispatched by using redux devtools or by

```
window.pagePreviewStore.dispatch(<action>)
```
