import { Box, makeStyles } from "@material-ui/core"
import { ImageURL } from "../../Constants/Data"


const Style = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'

    }
})

const MidSection = () => {
    const classes = Style();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Box className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <img src={image}  alt="" style={{width: '33%'}} /> 
                    ))
                }
            </Box>
            <img src={coronaURL} alt="" style={{width: '100%', marginTop: 20, }} />
        </>
    )
}

export default MidSection
