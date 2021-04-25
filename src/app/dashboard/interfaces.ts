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
    id: number;
    title: string;
    assignee: Assignee;
    dueDate: Date;
    stage: StageTypes,
    priority: boolean;
}

export interface SortBy {
    columnName: string;
    orderBy: boolean; // if true sort by ascending, false sort descending
}

export interface DashboardState {
    tickets: TicketDetail[] | [];
    sortBy: SortBy;
    search: string;
    errorState: string;
};

export interface SortDashboardTicketsSuccessPayload {
    tickets: TicketDetail[],
    sortBy: SortBy
}

export interface PreviousAndCurrentIdx {
    previousIndex: number;
    currentIndex: number;
}