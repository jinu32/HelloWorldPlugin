import * as React from "react";
import { usePluginStore } from "react-pluggable";

const Root = (props: any) => {
  const pluginStore: any = usePluginStore();

  return (
    <>
      <h1>Working</h1>
      <button
        onClick={() => {
          pluginStore.executeFunction("showAlert");
        }}
      >
        Send Alert
      </button>
    </>
  );
};

export default Root;
