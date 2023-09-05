import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Typography, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

interface ListTechProps {
    listTech: any,
}
const Tech: React.FC<ListTechProps> = (props: ListTechProps) => {
    return (
        <Box>
            {props.listTech.map((res: any, index: any) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', border: 1, borderRadius: 1 }} key={index}>
                    <Box sx={{ display: 'flex', marginLeft: '0.5rem', padding: 1.5 }}>
                        <Avatar src={res.avatar} alt={res.title} />
                        <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: "10px" }}>{res.title}</Typography>
                    </Box>
                    <Box sx={{ padding: 1.5 }}>
                        <FormControlLabel value="" control={<Radio />} label="" />
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default Tech