import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
//import AAV from './cv_albin_reji.pdf';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '68%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

export default function Downlord() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} ><DownloadIcon    sx={{ fontSize: 80 ,color: 'black'}}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
         
          <Typography id="modal-modal-description" >
         
          <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
       <h4>DOWNLOADING</h4>
      </LoadingButton>
    
                       
                       
                       
                        </Typography>
        </Box>
      </Modal>
    </div>
  );
}
