// Get visible projects

export default(projects, {name}) => {
    return expenses.filter((project) => {
        const textMatch = project
            .name
            .toLowerCase()
            .includes(name.toLowerCase());

        return textMatch;
    })
};
