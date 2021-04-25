import React, {} from 'react';
import {Button, Card, Media} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ReactComponent as Logo } from '../img/logo.svg';
import '../css/Reviews.css';

function Reviews ({ review }) {
    const name = review.name;
    const age = review.age;
    const sex = review.sex;
    const race = review.race;
    const symptom = review.symptom;
    const rating = review.rating;
    const reviewDescrip  = review.review;


    const history = useHistory();


    return (<div>
            <Media as="li">
                <Logo width="40" height="40" className="logo d-inline-block mb-3 mr-3"/> 
                
                <Media.Body>
                    <h5>{name}</h5>
                    <Box component="fieldset" mb= {2} borderColor="transparent" style={{overflowWrap: 'break-word', textOverflow: "ellipsis", width: '50%'}}>
                        <Typography component="legend">Demographic: {age}, {sex}, {race}</Typography>
                        <Typography component="legend">Symptoms: {symptom}</Typography>
                        <Rating name="read-only" value={rating} readOnly />
                        <p> {reviewDescrip} </p>
                    </Box>

                </Media.Body>
            </Media>
    </div>)}

export default Reviews;        
