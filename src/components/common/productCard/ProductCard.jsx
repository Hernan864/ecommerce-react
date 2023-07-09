import {Button, Card, CardMedia, Typography, CardContent, CardActions} from "@mui/material";
import "./ProductCard.css";
const ProductCard = ({item}) => {
  return  (
    <Card sx={{ Width: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>

  );
}
  

export default ProductCard