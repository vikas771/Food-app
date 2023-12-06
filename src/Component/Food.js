import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../assests/food.css'

export default function Food() {
    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <Card className='foodParent'>
            <CardHeader
                title="Shrimp and Chorizo Paella"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://t4.ftcdn.net/jpg/02/75/92/41/360_F_275924184_GP4ACV80EK8NokxlFaUB2qykpXKrroqx.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish..
                </Typography>
                <div className='FoodDropDown'>
                <FormControl variant="standard"  sx={{ m: 1, minWidth: 90 }}>
                    <InputLabel id="demo-simple-select-standard-label">Quantity</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Quantity">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                    <InputLabel id="demo-simple-select-standard-label">Plate</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="plate"
                    >

                        <MenuItem value={1}>Half</MenuItem>
                        <MenuItem value={2}>Full</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    Price
                </div>
                </div>
            </CardContent>
            {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}

        </Card>
    );
}