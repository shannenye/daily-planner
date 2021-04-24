import { ComponentFixture, TestBed } from '@angular/core/testing';

import { 
    selectDashboardTicketsState,
    selectDashboardSortByState,
    selectDashboardSearchState,
    selectDashboardSearchTickets,
    selectdDashboardSearchSortedTicketsState
} from './dashboard.selectors';
import { DashboardComponent } from './dashboard.component';
import { DashboardState, SortBy, StageTypes } from './interfaces';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ DashboardComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('Dashboard Selectors', () => {
    const dashboardMockState: DashboardState = {
        tickets: [
            {
                title: 'Fake Title #1',
                assignee: {
                    id: 1,
                    firstName: 'FakeFirstName1',
                    lastName: 'FakeLastName1',
                    profilePic: {
                        url: 'default-icon.png',
                        alt: 'default icon silhouette'
                    }
                },
                dueDate: new Date('2021-04-30'),
                stage: StageTypes.INITIATION,
                priority: true
            },
            {
                title: 'Fake Title #2',
                assignee: {
                    id: 2,
                    firstName: 'FakeFirstName2',
                    lastName: 'FakeLastName2',
                    profilePic: {
                        url: 'default-icon.png',
                        alt: 'default icon silhouette'
                    }
                },
                dueDate: new Date('2021-05-29'),
                stage: StageTypes.EXECUTION,
                priority: false
            },
            {
                title: 'Fake Title #3',
                assignee: {
                    id: 3,
                    firstName: 'FakeFirstName3',
                    lastName: 'FakeLastName3',
                    profilePic: {
                        url: 'default-icon.png',
                        alt: 'default icon silhouette'
                    }
                },
                dueDate: new Date('2021-05-13'),
                stage: StageTypes.PLANNING,
                priority: false
            }
        ],
        sortBy: {
            columnName: '',
            orderBy: true
        },
        search: '',
        errorState: ''
    }

    it('selectDashboardTicketsState should return Dashboard tickets array from state', () => {
        const result = selectDashboardTicketsState.projector(dashboardMockState);
        expect(result.length).toEqual(3);
        expect(result[0].title).toEqual('Fake Title #1');
        expect(result[1].title).toEqual('Fake Title #2');
    });

    it('selectDashboardSortByState should return Dashboard sortBy object from state', () => {
        dashboardMockState.sortBy.columnName = 'assignee';
        dashboardMockState.sortBy.orderBy = true;

        const result = selectDashboardSortByState.projector(dashboardMockState);
        expect(result.columnName).toEqual('assignee');
        expect(result.orderBy).toEqual(true);
    });

    it('selectDashboardSearchState should return Dashboard search string from state', () => {
        dashboardMockState.search = 'hello world';

        const result = selectDashboardSearchState.projector(dashboardMockState);
        expect(result).toEqual('hello world');
    })

    it('selectDashboardSearchTickets hould return an empty array if no search criteria is met' , () => {
        const searchMockState = 'hello world';

        const result = selectDashboardSearchTickets.projector(
            dashboardMockState.tickets,
            searchMockState
        );

        expect(result).toEqual([]);
    });

    // it('Should return a list of tickets meeting search criteria' , () => {
    //     dashboardMockState.search = '';

    //     const result = selectDashboardSearchTickets.projector(
    //         dashboardMockState.tickets,
    //         dashboardMockState.search
    //     );

    //     expect(result).toEqual([]);
    // });

    describe('selectdDashboardSearchSortedTicketsState should return a list of correctly sorted tickets', () => {
        it('Should sort by assignee lastname then firstname and order alphabetically ascending (A -> Z)', () => {
            const sortByMockState: SortBy = {
                columnName: 'assignee',
                orderBy: false
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                },
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                },
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                }
            ];

            expect(result).toEqual(expected);
            expect(result[0].assignee.lastName).toBe('FakeLastName1');
            expect(result[1].assignee.lastName).toBe('FakeLastName2');
        });

        it('Should sort by assignee lastname then firstname and order alphabetically descending (Z -> A)', () => {
            const sortByMockState: SortBy = {
                columnName: 'assignee',
                orderBy: true
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                },
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                },
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                }
            ];

            expect(result).toEqual(expected);
            expect(result[0].assignee.lastName).toBe('FakeLastName3');
            expect(result[1].assignee.lastName).toBe('FakeLastName2');
        });

        it('Should sort by due date and order by closest to furthest due date (low to high)', () => {
            const sortByMockState: SortBy = {
                columnName: 'due date',
                orderBy: false
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                },
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                },
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                },  
            ];

            expect(result).toEqual(expected);
            expect(result[0].dueDate).toEqual(new Date('2021-04-30'));
            expect(result[1].dueDate).toEqual(new Date('2021-05-13'));
        });

        it('Should sort by due date and order by furthest to closest due date (high to low)', () => {
            const sortByMockState: SortBy = {
                columnName: 'due date',
                orderBy: true
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                }, 
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                }, 
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                }
            ];

            expect(result).toEqual(expected);
            expect(result[0].dueDate).toEqual(new Date('2021-05-29'));
            expect(result[1].dueDate).toEqual(new Date('2021-05-13'));
        });

        it('Should sort by project stage and order alphabetically ascending (A -> Z)', () => {
            const sortByMockState: SortBy = {
                columnName: 'stage',
                orderBy: false
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                }, 
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                },
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                }
            ];

            expect(result).toEqual(expected);
            expect(result[0].stage).toBe(StageTypes.EXECUTION);
            expect(result[1].stage).toBe(StageTypes.INITIATION);
        });

        it('Should sort by project stage and order alphabetically descending (Z -> A)', () => {
            const sortByMockState: SortBy = {
                columnName: 'stage',
                orderBy: true
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                }, 
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                },
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                }
                
            ];

            expect(result).toEqual(expected);
            expect(result[0].stage).toBe(StageTypes.PLANNING);
            expect(result[1].stage).toBe(StageTypes.INITIATION);
        });

        it('Should sort by priority and order by highest to lowest priority (true to false)', () => {
            const sortByMockState: SortBy = {
                columnName: 'priority',
                orderBy: false
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                },
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                },
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                }
            ];

            expect(result).toEqual(expected);
            expect(result[0].priority).toBe(true);
            expect(result[1].priority).toBe(false);
        });

        it('Should sort by priority and order by lowest to highest priority (false to true)', () => {
            const sortByMockState: SortBy = {
                columnName: 'priority',
                orderBy: true
            };

            const result = selectdDashboardSearchSortedTicketsState.projector(
                dashboardMockState.tickets,
                sortByMockState
            );

            const expected = [
                {
                    title: 'Fake Title #2',
                    assignee: {
                        id: 2,
                        firstName: 'FakeFirstName2',
                        lastName: 'FakeLastName2',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-29'),
                    stage: StageTypes.EXECUTION,
                    priority: false
                },
                {
                    title: 'Fake Title #3',
                    assignee: {
                        id: 3,
                        firstName: 'FakeFirstName3',
                        lastName: 'FakeLastName3',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-05-13'),
                    stage: StageTypes.PLANNING,
                    priority: false
                },
                {
                    title: 'Fake Title #1',
                    assignee: {
                        id: 1,
                        firstName: 'FakeFirstName1',
                        lastName: 'FakeLastName1',
                        profilePic: {
                            url: 'default-icon.png',
                            alt: 'default icon silhouette'
                        }
                    },
                    dueDate: new Date('2021-04-30'),
                    stage: StageTypes.INITIATION,
                    priority: true
                }
            ];

            expect(result).toEqual(expected);
            expect(result[0].priority).toBe(false);
            expect(result[1].priority).toBe(false);
        });
    });

});
