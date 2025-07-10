import { useState, useRef, useEffect } from "react";
import { useCars } from "../../hooks/useCars";
import { List } from "../../components/List";
import { Typography, Box, Divider, Button, Modal } from "@mui/material";
import { CarCreationForm } from "./CarCreationForm";

export function CarDashboard() {
  const { cars, loading, error } = useCars();
  const [open, setOpen] = useState(false);
  const prevCarsCount = useRef(cars.length);

  // Close modal when a new car is added
  useEffect(() => {
    if (open && cars.length > prevCarsCount.current) {
      setOpen(false);
    }
    prevCarsCount.current = cars.length;
  }, [cars.length, open]);

  if (loading)
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  if (error)
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">Error: {error.message}</Typography>
      </Box>
    );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Car Dashboard
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Browse and manage your car collection below.
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add New Car
        </Button>
      </Box>
      <List vehicles={cars} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 350,
            maxWidth: 600,
            width: "90vw",
          }}
        >
          <CarCreationForm key={open ? "open" : "closed"} />
        </Box>
      </Modal>
    </Box>
  );
}