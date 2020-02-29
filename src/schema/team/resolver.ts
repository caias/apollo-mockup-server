import teamData from '../../mockup/teamData.json';

export const teamResolver = {
  Query: {
    members: () => teamData,
  },
  Mutation: {
    addMember: (root, args) => addMemberFn(args),
    deleteMember: (root, args) => deleteMemberFn(args),
    editMemberName: (root, args) => editMemberNameFn(args)
  }
}

const addMemberFn = (args) => {
  const { name, email } = args;
  const data = {
    name,
    email,
  };
  teamData.push(data);
  return data;
}

const deleteMemberFn = (args) => {
  const { name } = args;
  const { getMatchIndex, isMatched } = compareName(name);

  isMatched && teamData.splice(getMatchIndex, 1);

  return isMatched;
}

const editMemberNameFn = (args) => {
  const { name, editName } = args;
  const { getMatchIndex, isMatched } = compareName(name);
  const editTarget = teamData[getMatchIndex];

  if (isMatched) {
    editTarget.name = editName;
  }
  
  return editTarget.name;
}

const compareName = (name) => {
  const getMatchIndex = teamData.findIndex(value => value.name === name);
  const isMatched = getMatchIndex > -1;

  return {
    getMatchIndex,
    isMatched,
  };
}