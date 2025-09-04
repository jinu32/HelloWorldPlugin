import React from "react";
import { createPluginStore, PluginProvider } from "react-pluggable";
import HelloWorldPlugin from "./plugins/HelloWorldPlugin";
import Root from "./components/Root";

const pluginStore = createPluginStore();
pluginStore.install(new HelloWorldPlugin());

const App = () => {
  return (
    <PluginProvider pluginStore={pluginStore}>
      <Root />
    </PluginProvider>
  );
};

export default App;
