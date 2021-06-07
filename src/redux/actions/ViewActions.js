import * as types from '../types/ViewTypes';

// eslint-disable-next-line
export const updateIsDarkMode = payload => dispatch => {
    dispatch({
        type: types.IS_DARK_MODE,
        payload,
    });
};
export const updateView = payload => dispatch => {
    dispatch({
        type: types.UPDATE_VIEW,
        payload,
    });
};
export const updateL1 = payload => dispatch => {
    dispatch({
        type: types.UPDATE_L1,
        payload,
    });
};
// profile
export const updateProfileTab = payload => dispatch => {
    dispatch({
        type: types.UPDATE_PROFILE_TAB,
        payload,
    });
};
export const updateViewProfile = payload => dispatch => {
    dispatch({
        type: types.UPDATE_VIEW_PROFILE,
        payload,
    });
};
export const clearProfile = () => dispatch => {
    dispatch({
        type: types.CLEAR_PROFILE,
    });
};
// messages
export const updateActiveConversationIdx = payload => dispatch => {
    dispatch({
        type: types.UPDATE_ACTIVE_CONVERSATION_IDX,
        payload,
    });
};
export const updateActiveConversationId = payload => dispatch => {
    dispatch({
        type: types.UPDATE_ACTIVE_CONVERSATION_ID,
        payload,
    });
};
export const updateActiveConversation = payload => dispatch => {
    dispatch({
        type: types.UPDATE_ACTIVE_CONVERSATION,
        payload,
    });
};
export const updateActiveConversationObj = payload => dispatch => {
    dispatch({
        type: types.UPDATE_ACTIVE_CONVERSATION_OBJ,
        payload,
    });
};
export const updateProfileMap = payload => dispatch => {
    dispatch({
        type: types.UPDATE_PROFILE_MAP,
        payload,
    });
};
// feed
export const updatePosts = payload => dispatch => {
    dispatch({
        type: types.UPDATE_POSTS,
        payload,
    });
};
export const clearFeed = () => dispatch => {
    dispatch({
        type: types.CLEAR_FEED,
    });
};

export const createConversation = (conversationObject) => dispatch => {
    const {userId, messageText} = conversationObject;
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('textMessage', messageText);
    formData.append('participants', JSON.stringify([
      {participantId: 'participant1', actionsAllowed: ['all']}
    ]));
    fetch(process.env.REACT_APP_SERVER_API_PATH + '/conversations', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI0YWVkYzNjNDg2MjAwYjBhMDlkNTUiLCJlbWFpbEFkZHJlc3MiOiJ1c2VyQHRlc3QuY29tIiwicm9sZSI6ImludmVzdG9yIiwicHJvZmlsZSI6eyJmaXJzdE5hbWUiOiJVc2VyIiwibGFzdE5hbWUiOiJUZXN0IiwiZ2VuZGVyIjoibWFsZSIsImNvbnRhY3QiOltdfSwiaWF0IjoxNjIyNTQ4MjgwfQ.Ee3yxGDSTHrRLb3XzECq1cuuZrGtjrwFb-yY17a72O4'
        },
        body: formData
    })
        .then(result => result.json())
        .then((result) => {
            dispatch({
                type: 'test',
                payload: result
            });
        });
};

export const createMessage = () => {

}