import { useContext } from 'react';

import { Select, MenuItem, TextField, Box, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { DataContext } from '../context/DataProvider';

const useStyles = makeStyles({
    component: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    select: {
        width: 150,
        height: 40,
        background: '#147DF5',
        margin: '10px',

    },
    button: {
        width: 150,
        height: 40,
        marginLeft: [10, '!important'],
    },
    textfield: {
        width: '100%',
        background: '#F0F0F0'
    }
})

const Form = ({ onSendClick }) => {
    const classes = useStyles();

    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <Box className={classes.component}>
            <Select
                className={classes.select}
                value={formData.type}
                label="POST"
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'POST'} className="MenuItem" >POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField
                size="small"
                className={classes.textfield}
                onChange={(e) => onUrlChange(e)}
            />
            <Button className={classes.button} variant="contained" endIcon={<SendIcon />} onClick={() => onSendClick()}>Send</Button>
        </Box>
    )
}

export default Form;