
interface Deadline {
    id: number,
    title: string
}

type DeadlineState = {
    deadlines: Deadline[]
}

interface AddDeadlineAction {
    type: ADD_DEADLINE,
    title: string
}
interface DeleteDeadlineAction{
    type: DELETE_DEADLINE,
    id: number
}

type DeadlineActions = AddDeadlineAction & DeleteDeadlineAction
