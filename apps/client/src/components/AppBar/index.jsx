import Box from '@mui/material/Box';

export default function AppBar({ title = '' }) {
  return (
    <Box
      sx={{
        backgroundColor: '#4D81B7',
        color: 'white',
        paddingY: 2.45,
        paddingX: 3.5,
        textTransform: 'uppercase',
        fontSize: 19,
        fontWeight: 500,
      }}
    >
      {title}
    </Box>
  );
}
