import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { VehicleCard } from "./VehicleCard";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Vehicle } from "../types/common";

type VehicleListProps = {
  vehicles: Vehicle[];
};

const sortOptions = [
  { value: "year", label: "Year" },
  { value: "make", label: "Make" },
  { value: "model", label: "Model" },
];

export function List({ vehicles }: VehicleListProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"year" | "make" | "model">("year");

  const filteredAndSorted = useMemo(
    () =>
      vehicles
        .filter((v) =>
          search.trim()
            ? v.model.toLowerCase().includes(search.trim().toLowerCase())
            : true
        )
        .sort((a, b) =>
          sortBy === "year"
            ? b.year - a.year
            : a[sortBy].localeCompare(b[sortBy])
        ),
    [vehicles, search, sortBy]
  );

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Search by model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <TextField
          select
          label="Sort by"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "year" | "make" | "model")
          }
          size="small"
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Grid container spacing={2}>
        {filteredAndSorted.map((vehicle) => (
          <Grid key={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
