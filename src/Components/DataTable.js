import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E6F3FF', 
    },
    background: {
      default: '#191970',
      paper: '#000033', 
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0FFFF', 
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #B0E0FF', 
          color: '#F0F8FF',
        },
        head: {
          backgroundColor: '#87CEFA', 
          color: '#000033', 
          fontWeight: 'bold',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(230, 243, 255, 0.05)',
          },
          '&:hover': {
            backgroundColor: 'rgba(230, 243, 255, 0.2)', 
          },
        },
      },
    },
  },
});

export default function BasicTable() {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ 
        background: 'linear-gradient(135deg, #191970, #000033)', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(230, 243, 255, 0.1)'
      }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}