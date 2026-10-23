import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; All copyrights reserved by anonymous person 2026.
      </Typography>
    </Box>
  )
}

export default Footer
