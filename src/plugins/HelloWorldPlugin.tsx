import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class HelloWorldPlugin implements IPlugin {
  pluginStore!: PluginStore;

  getPluginName(): string {
    return "HelloWorld@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.addFunction("showAlert", () => {
      alert("Hello World");
    });
  }

  deactivate(): void {
    this.pluginStore.removeFunction("showAlert");
  }
}

export default HelloWorldPlugin;
