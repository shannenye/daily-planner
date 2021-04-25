import { TicketDetail, StageTypes } from './interfaces';

export const columnName: string[] = [
    'assignee',
    'due date',
    'stage',
    'priority'
];

export const ticketDataList: TicketDetail[] = [
    {
        id: 1,
        title: 'Hire New Frontend Engineer',
        assignee: {
            id: 3,
            firstName: 'Lead Frontend',
            lastName: 'Engineer',
            profilePic: {
                url: 'lead-fe-icon.png',
                alt: 'Lead Frontend Engineer Icon'
            }
        },
        dueDate: new Date('2021-04-30'),
        stage: StageTypes.INITIATION,
        priority: true
    },
    {
        id: 2,
        title: 'Resource Allocation',
        assignee: {
            id: 1,
            firstName: 'Project',
            lastName: 'Manager',
            profilePic: {
                url: 'project-manager-icon.png',
                alt: 'Project Manager Icon'
            }
        },
        dueDate: new Date('2021-05-29'),
        stage: StageTypes.PLANNING,
        priority: false
    },
    {
        id: 3,
        title: 'Update Company Website',
        assignee: {
            id: 2,
            firstName: 'Charles',
            lastName: 'Wok',
            profilePic: {
                url: 'charles-icon.png',
                alt: 'Charles Icon'
            }
        },
        dueDate: new Date('2021-05-29'),
        stage: StageTypes.INITIATION,
        priority: false
    },
    {
        id: 4,
        title: 'Complete Take-Home Project ',
        assignee: {
            id: 4,
            firstName: 'Shannen',
            lastName: 'Ye',
            profilePic: {
                url: 'shannen-icon.png',
                alt: 'Shannen Icon'
            }
        },
        dueDate: new Date('2021-06-13'),
        stage: StageTypes.EXECUTION,
        priority: true
    },
    {
        id: 5,
        title: 'Update Kitchen Snacks',
        assignee: {
            id: 2,
            firstName: 'Charles',
            lastName: 'Wok',
            profilePic: {
                url: 'charles-icon.png',
                alt: 'Charles Icon'
            }
        },
        dueDate: new Date('2021-05-28'),
        stage: StageTypes.PLANNING,
        priority: true
    },
    {
        id: 6,
        title: 'Push Staging To Production',
        assignee: {
            id: 1,
            firstName: 'Lead Frontend',
            lastName: 'Engineer',
            profilePic: {
                url: 'lead-fe-icon.png',
                alt: 'Lead Frontend Engineer Icon'
            }
        },
        dueDate: new Date('2021-05-11'),
        stage: StageTypes.INITIATION,
        priority: false
    },
    {
        id: 7,
        title: 'Finalize Project Scope',
        assignee: {
            id: 4,
            firstName: 'Shannen',
            lastName: 'Ye',
            profilePic: {
                url: 'shannen-icon.png',
                alt: 'Shannen Icon'
            }
        },
        dueDate: new Date('2021-05-01'),
        stage: StageTypes.EXECUTION,
        priority: false
    },
    {
        id: 8,
        title: 'Estimate Project Tickets',
        assignee: {
            id: 1,
            firstName: 'Project',
            lastName: 'Manager',
            profilePic: {
                url: 'project-manager-icon.png',
                alt: 'Project Manager Icon'
            }
        },
        dueDate: new Date('2021-05-19'),
        stage: StageTypes.PLANNING,
        priority: false
    },
    {
        id: 9,
        title: 'Refactor Project\'s Key Features',
        assignee: {
            id: 2,
            firstName: 'Charles',
            lastName: 'Wok',
            profilePic: {
                url: 'charles-icon.png',
                alt: 'Charles Icon'
            }
        },
        dueDate: new Date('2021-08-06'),
        stage: StageTypes.EXECUTION,
        priority: false
    },
    {
        id: 10,
        title: 'Research 3rd Party Library',
        assignee: {
            id: 4,
            firstName: 'Shannen',
            lastName: 'Ye',
            profilePic: {
                url: 'shannen-icon.png',
                alt: 'Shannen Icon'
            }
        },
        dueDate: new Date('2021-05-19'),
        stage: StageTypes.INITIATION,
        priority: false
    },
    {
        id: 11,
        title: 'Finalize New Features',
        assignee: {
            id: 1,
            firstName: 'Project',
            lastName: 'Manager',
            profilePic: {
                url: 'project-manager-icon.png',
                alt: 'Project Manager Icon'
            }
        },
        dueDate: new Date('2021-04-30'),
        stage: StageTypes.PLANNING,
        priority: true
    }
];

