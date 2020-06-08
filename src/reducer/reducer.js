export const list = (state = [], action) => {
    switch (action.type) {
      case "SEARCH_REPOSITORIES":
        return [...state = [], { name: action.payload }];
      default:
        return state;
    }
}