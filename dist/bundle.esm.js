var resourcesMutations = {
  UPDATE_RESOURCES: (state, {resourceType, resourcesById}) => {
    Object.entries(resourcesById).forEach(([id, resource]) => {
      if (!state[resourceType]) {
        state[resourceType] = {};
      }
      state[resourceType][id] = resource;
    });
  }
};

const updateResources = (mutator, resourceType, resourcesById) => {
  mutator("UPDATE_RESOURCES", {resourceType, resourcesById});
};

const updateResource = (
  mutator,
  {id, type, attributes, links, relationships}
) => {
  console.log("Not Implemented Yet");
};

const removeResources = (mutator, resources) => {
  console.log("Not Implemented Yet");
};

const removeResource = (mutator, {id, type}) => {
  console.log("Not Implemented Yet");
};

const clearResources = (mutator, resourceTypes) => {
  console.log("Not Implemented Yet");
};

var actions = /*#__PURE__*/Object.freeze({
  updateResources: updateResources,
  updateResource: updateResource,
  removeResources: removeResources,
  removeResource: removeResource,
  clearResources: clearResources
});

var index = {actions, resourcesMutations};

export default index;
