import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';




// const useStyles = makeStyles({
//     root: {
//         maxWidth: 300,
//         borderRadius: 20,
//         background: "black",
//         marginBottom: 25,
//     },
//     media: {
//         height: 200,
//         width: 280,
   
//     },
//     content: {
//         color: "white"
//     }
// });

const Service = ({service }) => {
    // const classes = useStyles();
    const { _id, image, name, details } = service;
    return (
        <div className="">
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/order/${_id}`}>
                <Card key={_id} style={{ width: '20rem', align: 'center' }} className="text-center effect bg-light service">
                    <Card.Body>
                        <Card.Img variant="top" className="image-fluid mb-4 w-50 service-img " src={`data:image/png;base64,${image.img}`} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{details}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>







             {/* <Link className="service" style={{ textDecoration: 'none', color: 'black' }} to={`/order/${_id}`}>
            <div className="service">

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`data:image/png;base64,${image.img}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h4">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-title "> {details}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </Link> */}













         </div>

    );
};

export default Service;