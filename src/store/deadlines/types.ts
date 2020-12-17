export const ADD_DEADLINE = 'ADD_DEADLINE'
export const DELETE_DEADLINE = 'DELETE_DEADLINE'
export const LOAD_DEADLINES = 'LOAD_DEADLINES'


export interface Deadline {
    id: number,
    title: string
}

export interface CheckPoint {
    id: number
    title: string
    isChecked: boolean
}

export interface DeadlineInfo extends Deadline {
    created: Date
    checkPoints: CheckPoint[]
} 

export interface DeadlineState {
    isLoading: false
    deadlines: Deadline[]
}

export interface AddDeadlineAction {
    type: typeof ADD_DEADLINE,
    title: string
}
export interface DeleteDeadlineAction{
    type: typeof DELETE_DEADLINE,
    id: number
}

export interface LoadDeadlinesAction {
    type: typeof LOAD_DEADLINES,
    deadlines: Deadline[]
}


export type DeadlineActions = AddDeadlineAction | DeleteDeadlineAction | LoadDeadlinesAction
