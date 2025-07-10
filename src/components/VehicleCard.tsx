import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ResponsiveImage } from "./ResponsiveImage";
import { Vehicle } from "../types/common";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Card
      sx={{ width: "100%", maxWidth: 400, background: "#fff", borderRadius: 2 }}
    >
      <CardMedia>
        <ResponsiveImage
          mobile={vehicle.mobile}
          tablet={vehicle.tablet}
          desktop={vehicle.desktop}
          alt={`${vehicle.make} ${vehicle.model}`}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="div">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </Typography>
        <Typography color="text.secondary">Color: {vehicle.color}</Typography>
      </CardContent>
    </Card>
  );
}
