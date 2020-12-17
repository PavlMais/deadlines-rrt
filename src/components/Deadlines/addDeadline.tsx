import { Dialog, FormGroup, InputGroup, Button, Switch, Checkbox, Menu, MenuItem } from '@blueprintjs/core';
import { DateRangePicker } from '@blueprintjs/datetime';
import React from 'react'
import { useForm } from 'react-hook-form';
import './styles.css'





const AddDeadlineModal = () => {
    const { register, errors } = useForm()
    
    return (
        <Dialog
            className={'bp3-dark'}
            title="Add new deadline"
            icon='add-to-artifact'
            usePortal={true}
            isOpen={false}
        >
            <form className="p2">

                <FormGroup label='Title'>
                    <InputGroup name='title' placeholder='Finish web site' />
                </FormGroup>
                <FormGroup label='Description'>
                    <InputGroup name='description' placeholder='Make the web site on... ' />
                </FormGroup>

                <FormGroup label='Data range'>
                    <DateRangePicker shortcuts={false} />
                </FormGroup>


               


                <FormGroup label='Tasks'>
                    <Checkbox label='Complete' />

                </FormGroup>

                <FormGroup helperText='If enabled any users can see your deadline'>
                    <Switch label="Is public" />
                </FormGroup>


                <Button type='submit' large={true} text='Add' />
            </form>
        </Dialog>
    )
}

export default AddDeadlineModal;