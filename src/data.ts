import { Model } from './types';
import { faker } from '@faker-js/faker';

// Generate dummy data function
export const generateDummyData = (): Model[] => {
  const data: Model[] = [];
  
  for (let i = 0; i < 97; i++) {
    // Populate the data array with objects matching the Model interface
    data.push({
      id: `#${faker.string.numeric(6)}`, // Generate a random 6-digit string
      name: faker.commerce.productName(), // Random product name
      type: 'Extraction', // Static type
      description: faker.lorem.sentence(), // Random sentence as description
      createdOn: faker.date.past().toISOString().split('T')[0], // Random past date in ISO format
      lastTrainedOn: faker.date.recent().toISOString().split('T')[0], // Random recent date in ISO format
      status: 'Active' // Fixed value for status
    });
  }
  
  return data; // Return the array of generated data
};
