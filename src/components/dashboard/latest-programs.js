import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";

const products = [
  {
    id: uuid(),
    title: "Beginner",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "Intermediate",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "Advanced",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: subHours(Date.now(), 3),
  },
  // {
  //   id: uuid(),
  //   name: "Lyft",
  //   imageUrl: "/static/images/products/product_4.png",
  //   updatedAt: subHours(Date.now(), 5),
  // },
  // {
  //   id: uuid(),
  //   name: "GitHub",
  //   imageUrl: "/static/images/products/product_5.png",
  //   updatedAt: subHours(Date.now(), 9),
  // },
];

export const LatestPrograms = (props) => {
  const { programs } = props;
  return (
    <Card {...props}>
      <CardHeader subtitle={`${programs?.length} in total`} title="Programs" />
      <Divider />
      <List>
        {programs &&
          programs.map((program, i) => (
            <ListItem divider={i < programs?.length - 1} key={program.id}>
              <ListItemAvatar>
                {/* <img
                  alt={program.name}
                  src={product.imageUrl}
                  style={{
                    height: 48,
                    width: 48,
                  }}
                /> */}
              </ListItemAvatar>
              <ListItemText
                primary={program.title}
                secondary={`Updated ${formatDistanceToNow(program.title)}`}
                // secondary={`Updated ${formatDistanceToNow(program.updatedAt)}`}
              />
              <IconButton edge="end" size="small">
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Link href="/programs">
          <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
            View all
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
