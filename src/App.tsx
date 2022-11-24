import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import moment from 'moment';

export default function App() {
  const [rows, setRows] = useState<Array<any>>([]);
  const handleAddRows = (
    brand: string,
    color: string,
    year: number,
    doors: number,
    sunroof: boolean
  ) => {
    setRows([
      ...rows,
      {
        brand,
        color,
        year,
        doors,
        sunroof,
      },
    ]);
  };
  const agora = moment();

  const lastMonth = Number(agora.endOf('month').format('DD'));

  const days: Array<any> = [];

  for (let i = 1; i <= lastMonth; i++) {
    days.push({
      day: i,
    });
  }

  const handleRemoveAll = () => {
    setRows([
      {
        brand: 'Fiat',
        color: 'Branco',
        year: 2014,
        doors: 4,
        sunroof: false,
      },
    ]);
  };

  // const days = [
  //   {
  //     day: 20,
  //     week: 'Dom',
  //   },
  //   {
  //     day: 21,
  //     week: 'Seg',
  //   },
  //   {
  //     day: 22,
  //     week: 'Ter',
  //   },
  //   {
  //     day: 23,
  //     week: 'Qua',
  //   },
  //   {
  //     day: 24,
  //     week: 'Qui',
  //   },
  //   {
  //     day: 25,
  //     week: 'Sex',
  //   },
  //   {
  //     day: 26,
  //     week: 'Sab',
  //   },
  // ];

  const header = [
    {
      name: 'Marca',
    },
    {
      name: 'Cor',
    },
    {
      name: 'Ano',
    },
    {
      name: 'Portas',
    },
    {
      name: 'Teto Solar',
    },
    {
      name: 'day',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {header.map((value, index) => {
              if (index === 5) {
                return (
                  <TableCell>
                    {days.map((value, index) => (
                      <TableCell
                        key={index}
                        style={{
                          background:
                            value.day === Number(moment().format('DD'))
                              ? 'red'
                              : 'gray',
                        }}
                      >
                        {value.day}
                      </TableCell>
                    ))}
                  </TableCell>
                );
              } else {
                return <TableCell>{value.name}</TableCell>;
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.brand}>
              <TableCell>{row.brand}</TableCell>
              <TableCell align='right'>{row.color}</TableCell>
              <TableCell align='right'>{row.year}</TableCell>
              <TableCell align='right'>{row.doors}</TableCell>
              <TableCell align='right'>
                {row.sunroof ? 'Tem' : 'Não tem'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell align='right'>
              {' '}
              Total: {Object.keys(rows).length}{' '}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10 }}>
        <button
          style={{
            background: '#4034eb',
            padding: 10,
            borderRadius: 10,
            color: 'white',
          }}
          onClick={() => handleAddRows('Toyota', 'Azul', 2020, 4, true)}
        >
          {' '}
          Adicionar Toyota{' '}
        </button>
        <button
          style={{
            background: '#4034eb',
            padding: 10,
            borderRadius: 10,
            color: 'white',
            marginLeft: 10,
          }}
          onClick={() => handleAddRows('Nissan', 'Cinza', 2010, 2, false)}
        >
          {' '}
          Adicionar Nissan{' '}
        </button>
        <button
          style={{
            background: '#4034eb',
            padding: 10,
            borderRadius: 10,
            color: 'white',
            marginLeft: 10,
          }}
          onClick={() => handleRemoveAll()}
        >
          {' '}
          Remover tudo{' '}
        </button>
      </div>
    </TableContainer>
  );
}
