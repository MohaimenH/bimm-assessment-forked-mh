import React, { useState } from "react";
import { Box, Grid, Paper, TextField, Button, Typography } from "@mui/material";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
};

type FormProps = {
  fields: Field[];
  initialValues: Record<string, unknown>;
  onSubmit: (values: Record<string, unknown>) => Promise<void> | void;
  title?: string;
  buttonLabel?: string;
};

export function Form({
  fields,
  initialValues,
  onSubmit,
  title,
  buttonLabel = "Submit",
}: FormProps) {
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await onSubmit(form);
      setForm(initialValues);
    } catch {
      setError("Submission failed");
    }
    setLoading(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: 600 }}>
      {title && (
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          {title}
        </Typography>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: 400,
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {fields.map((field) => (
            <Grid key={field.name} display="flex" justifyContent="center">
              <TextField
                label={field.label}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                type={field.type || "text"}
                fullWidth
                required={field.required}
              />
            </Grid>
          ))}
          {error && (
            <Grid>
              <Box color="error.main" textAlign="center">{error}</Box>
            </Grid>
          )}
        </Grid>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          fullWidth
          sx={{ mt: 3 }}
        >
          {loading ? "Submitting..." : buttonLabel}
        </Button>
      </Box>
    </Paper>
  );
}