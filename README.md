# TodoMVC (REACT)

> A "To Do" App, powered by React.

## Resources

* [Website](https://hardcore-edison-f028d0.netlify.com/)
* [A graphical layout of app](https://drive.google.com/file/d/1Q2XpSoTxfhIKFrJqk5cpOrouLkuD4oxP/view?usp=sharing)
* [My Portfolio Page](https://gcaliene.github.io/Portfolio/)

### Articles

* [A Medium article about the future of CSS.](https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)
* [Using BEM with JS components.](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b)
* [Using Post- & Preprocessors with Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)

### Directory Structure
```
public/
  index.html
  _redirects
  favicon-GP.ico
  manifest.json
src/
  - components/
    └──App.js
  - containers/
    └──add_todo.js
    └──app_container.js
    └──counter.js
    └──todo_list_item.js
    └──todo_list.js
  - styles/
    └──assets/
       └──GP-sign2.png
    └──App.css
    └──base.css
    └──TodoList.css
  index.js
  registerServiceWorker.js
.gitignore
package.json
README.md
yarn.lock
```

## Getting Started

```
git clone <repo>
cd <repo>
npm install
npm start
```


## Implementation
This app was created using Create-React-App, a React tool created by Facebook. This speeds up the configuration by not worrying about setup and configuration. If there is a need to further customize your react app, you would have to eject the app and access to webpack is available. 

I strove to create a React app that can be easy to follow and with as few lines as possible. I managed to do this with only 1 component and 5 containers using state. Since part of the job is to teach fellow front-enders, I believe they will be able to follow along my code without much instruction.

As this is a Single Page Application using React with no storage option, the state will not persist on page reload. In other words, any todos created will be gone from the state and no longer visible, when u refresh the page. There are a variety of storage options, such as a POST/GET request to an API, or local or session storage just to name a couple.

Netlify was used for deloyment as its use of CDNs provides a faster load time than other hosts (github, heroku, bitbucket).

### Spec Violations
While I agree with having many feature-branches, I only used the master branch as this project was simple enough to not necessitate mulitple branches. However, I have made detailed commits all throughout the project, some with descriptions. If I were to convert this app to use Redux or add persistant storage, then I would definitely make a branch. 

The use of Css Preprocessors are not encouraged with React as "features like mixins and nesting are replaced by component composition." This is why I stuck to using 3 css files which will get autoprefixed and minimized on production. There are other reasons why I didn't use Sass, which is why I've included 2 articles on the subject as well as Facebook recommendation in the Articles section.

I didn't use a utils folder because I didn't find a need for it. I reserve it for authentication, custom middleware, or storage options, none of which is required or necessary when creating a React app.

My delete button has a class of .btn-right rather than .destroy. .btn-right is much more descriptive for my app. 

## Credit

Created by [Gerson Calienes](https://gcaliene.github.io/Portfolio/)
