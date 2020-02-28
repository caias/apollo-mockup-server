import eventData from '../../mockup/eventData.json';

export const eventResolver = {
  Query: {
    events: () => eventData
  }
}