import teamData from '../../mockup/teamData.json';

export const teamResolver = {
  Query: {
    members: () => teamData,
  }
}