interface IAction {
    type: string;
}

const quizReducer = (state = [], action: IAction) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
        ]
      default:
        return state
    }
  }
  
  export default quizReducer