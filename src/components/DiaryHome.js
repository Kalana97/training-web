import { makeStyles } from '@material-ui/core/styles';
import { TextField , InputBase, Button } from '@material-ui/core'
import { useState } from 'react';
import {connect} from 'react-redux';

const useStyles = makeStyles({
    root:{
        marginBottom: 20,
    },

    inputField: {
        marginTop: 20,
        marginBottom: 20,
    },
    area: {
        marginBottom: 20,
    },
    button: {
        borderRadius: "5em",
        marginBottom: 20,
      },

})


const DiaryHome = ( { add_new_note }) => {
    const classes = useStyles()
    const [tittle , setTittle] = useState('');
    const [description , setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(tittle === '') {
            console.log('Missing tittle')
            return
        }
        if(description === ''){
            console.log('Missing description')
            return
        }

        const id = Math.floor(Math.random() * 10000)+1
        add_new_note({id, tittle , description})

        setTittle('')
        setDescription('')
    }

    return (
        <> 
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <InputBase
                onChange={(e)=>setTittle(e.target.value)}
                value={tittle}
                className={classes.inputField}
                placeholder="Submit New"
                inputProps={{ 'aria-label': 'naked'}}
                style={{ backgroundColor: 'cyan', borderRadius: 10 }}
                fullWidth
                />
                <TextField 
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                className={classes.area}
                placeholder="Enter Description"
                style={{ backgroundColor: 'cyan', borderRadius: 10 }}
                multiline
                rows={6}
                fullWidth
                InputProps={{
                    disableUnderline: true
                 }}
                />
                <Button  
                    className={classes.button} 
                    fullWidth 
                    style={{backgroundColor: 'cyan', color: 'black'}}
                    type="submit">
                    SUBMIT
                </Button>
            </form>
        </>
     );
}

const mapDispatchToProps = dispatch => {
    return {
        add_new_note: ({id, tittle , description})=>dispatch({
            type:"ADD_NOTE",
            payload: {id,tittle , description}
        })
    }
}
 
export default connect(null,mapDispatchToProps)(DiaryHome);

