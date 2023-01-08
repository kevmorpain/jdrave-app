import { App } from 'vue';

const requireComponent = require.context(
  // The relative path of the components folder
  './',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.vue$/
);

export default (app: App<Element>): void => {
  requireComponent.keys().forEach((fileName) => {
    // Get component config
    const componentConfig = requireComponent(fileName);
    // Get component name
    const componentName = fileName
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '') as string;

    app.component(componentName, componentConfig.default || componentConfig);
  });
};
