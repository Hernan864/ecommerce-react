import {Button, Card, CardMedia, Typography, CardContent, CardActions} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({item}) => {
  return  (
    <Card sx={{ Width: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
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
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>

  );
}
  

export default ProductCard