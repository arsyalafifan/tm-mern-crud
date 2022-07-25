import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import fullStackImg from './../assets/images/full-stack.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    textAlign: 'center'
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))

export default function Home(){
  const mahasiswa = ['Muh Arsyal Afifan Ersaputra - 200210097', 'Indar Jaya - 201510003', 'Mayada Dwi Andini - 201510027']
  const listItem = mahasiswa.map((mhs) =>
    <li>{mhs}</li>
  );
  const classes = useStyles()
    return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
            Daftar Mahasiswa Full Stack Programming
          </Typography>
          <CardMedia className={classes.media} image={fullStackImg}/>
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo by <a href="https://unsplash.com/photos/UYsBCu9RP3Y" target="_blank" rel="noopener noreferrer">Boudewijn Huysmans</a> on Unsplash</Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              Daftar Mahasiswa Kelompok 4
              <ol>{listItem}</ol>
            </Typography>
          </CardContent>
        </Card>
    )
}

