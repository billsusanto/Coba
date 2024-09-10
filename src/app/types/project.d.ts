import { User } from './user'

type Project = {
    id: string;
    title: string;
    author: string;
    location: string;
    description: string;
    masterplan: string;
    interests: string[];
    openRoles: string[];
    startDate: Date;
    endDate: Date;
    collaborate_requests: string[];
    authorImage: string;
    authorTitle: string;
};