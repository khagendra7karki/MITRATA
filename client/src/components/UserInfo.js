import { Grid, Box, Typography, Card, CardMedia } from '@mui/material'
const InternalImage = ( image ) =>{
    // console.log( image )
        return <>
            <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}} >
                        <Card sx = {{width: '200px', borderRadius: '0', background: '#3f304b', display: 'flex', alignItems: 'center'}}>
                            <CardMedia component = 'img'
                                image = { image.image }
                                sx = {{width: '100%'}}
                        >
                        </CardMedia>
                    </Card>
                </Grid>
        </>
    
}
const InternalImageWraper = ({ images }) =>{
    const fallout = [0, 1, 2]
    if ( images ){
        // console.log( images )
        return<>
            { images.map( ( image, index ) => { return <InternalImage image = { image } key = { index }/> }) }
        </> 
    }
    else {
        console.log( 'its a fallout')
        return <>{
            fallout.map( ( index ) =>{
                
                 return <Grid item   sm = { 6 }  md = { 4 } sx = {{display: 'flex' , justifyContent: 'center', p: 0}} key = { index } >
                        <Card sx = {{width: '200px', borderRadius: '0'}}>
                            <CardMedia component = 'img'
                                sx = {{width: '100%', height: '200px' , width: '200px', background: 'grey'}}
                        >
                        </CardMedia>
                    </Card>
                </Grid>        
            })}
        </>
    }
}
const UserInfo = ({ display, suggestion }) =>{
    return <>
            <Box maxWidth='600px'maxHeight='500px' sx = {{ display: `${ display & 1 ? 'block' : 'none'}`}}>
                <Typography variant = 'h2' component = 'h2' color = 'white' sx = {{marginLeft: 3}}>{`${suggestion.name} ${ suggestion.age }`}</Typography>
                <Typography sx = {{ color: '#964c90', lineHeight: '1.2', fontSize: '24px', m: 3}} >
                    {`${ suggestion.motto }`}
                </Typography>
                <Box sx = {{ display: 'flex', justifyContent: 'center', borderRadius: '16px' , mx: 3}}>
                    <Grid container> 
                        <InternalImageWraper images = { suggestion.image } />
                    </Grid>
                </Box>
            </Box>
        </>
}

export default UserInfo