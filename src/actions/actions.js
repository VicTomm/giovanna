import database from '../firebase/firebase';

// ADD_PROJECTS
export const addProject = (project) => ({type: 'ADD_PROJECTS', project});

export const startAddProject = (projectData = {}) => {
    return (dispatch, getState) => {
        const {
            name = '',
            imagePath = '',
            type = ''
        } = projectData;
        const project = {
            name,
            imagePath,
            type
        };

        return database
            .ref(`projects`)
            .push(project)
            .then((ref) => {
                dispatch(addProject({
                    id: ref.key,
                    ...project
                }));
            });
    };
};

// REMOVE_PROJECTS
export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECTS',
    id
  });
  
  export const startRemoveProject = ({ id } = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`projects/${id}`).remove().then(() => {
        dispatch(removeProject({ id }));
      });
    };
  };
  
  // EDIT_PROJECTS
  export const editProject = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
  
  export const startEditProject = (id, updates) => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      return database.ref(`projects/${id}`).update(updates).then(() => {
        dispatch(editProject(id, updates));
      });
    };
  };

// SET_PROJECTS
export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
  });
  
  export const startSetProjects = () => {
    return (dispatch, getState) => {
      return database.ref(`projects`).once('value').then((snapshot) => {
        const projects = [];
  
        snapshot.forEach((childSnapshot) => {
          projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setProjects(projects));
      });
    };
  };