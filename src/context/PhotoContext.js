import React, { createContext } from "react";
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  return (
    <PhotoContext.Provider value={null}>{props.children}</PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
