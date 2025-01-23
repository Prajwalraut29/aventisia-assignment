export interface Model {
    id: string;
    name: string;
    type: string;
    description: string;
    createdOn: string;
    lastTrainedOn: string;
    status: 'Active' | 'Inactive';
}