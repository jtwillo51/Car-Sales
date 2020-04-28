export const addFeature = (item) => {
    console.log("ADD_FEATURE", item);
    return { type: "ADD_FEATURE", payload: item };
  };
  
  export const removeFeature = (item) => {
    console.log("REMOVE_FEATURE", item);
    return { type: "REMOVE_FEATURE", payload: item };
  };