import { Routes, Route, useCurrentPath } from "@/router";
import { Container, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export interface LayoutDefaultProps {}

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({}) => {
  const location = useCurrentPath();
  const [page, setPage] = useState<Route>(location);
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) =>
    setPage(event.target.value as Route);

  useEffect(() => {
    navigate(page);
  }, [page]);

  return (
    <Container>
      <nav className="flex items-center justify-start p-6 w-full">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={page}
          label="Page"
          className="text-xl"
          variant="standard"
          onChange={handleChange}
        >
          {Object.values(Routes).map(({ path, label }) => (
            <MenuItem key={path} value={path}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </nav>
      <Outlet />
    </Container>
  );
};
