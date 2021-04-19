import { Image } from 'src/app/shared/interfaces';

export enum StageTypes {
    INITIATION = 'initiation',
    PLANNING = 'planning',
    EXECUTION = 'execution'
}

export interface Assignee {
    id: number;
    firstName: string;
    lastName: string;
    profilePic: Image;
}

export interface TicketDetail {
    title: string;
    assignee: Assignee;
    dueDate: Date;
    stage: StageTypes,
    priority: boolean;
}

export interface DashboardState {
    tickets: TicketDetail[] | [];
};
