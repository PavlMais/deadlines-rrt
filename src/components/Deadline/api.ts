import { DeadlineInfo } from './../../store/deadlines/types';
import api from "../../api"


export const get_deadline = (deadline_id: number) => {
    // var promise = api.get(`promise/${deadline_id}`)
    var promise = new Promise((ok) => setTimeout(ok, 1000, deadline_id))
    var onThen = (data: any): DeadlineInfo => {
        return {
            id: data,
            title:'Test deadline',
            created: new Date(),
            checkPoints: [
                {
                    id: 0,
                    title: 'text check box',
                    isChecked: false
                },
                {
                    id: 1,
                    title: 'text check point',
                    isChecked: true
                }
            ]
        
        }
    }
    var onCatch = (err: any) => {

    }
    return {promise, onThen, onCatch}
} 





