import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './ModalDodavanje.module.css';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ContainedButton from '../ContainedButton/ContainedButton';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import { Services } from '../../services/Services';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
export default function ModalDodavanje(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedVreme, setSelectedVreme]=useState(null);
  const {handleSubmit, control}=useForm();
  const onSubmit=async(data)=>{
    console.log(data.datum);
    console.log(data.vreme);
     const response=await Services.dodajTermin({'idZaposlenog':props.idZaposlenog,
     'terminDatum':data.datum,
     'terminSati':data.vreme,
    'idUsluge':props.idUsluge});
     console.log(response);
     handleClose();
   
  }
  return (
    <div>
      <p className={styles.label} onClick={handleOpen}>{props.label}</p>
      <Modal 
        open={open}
        onClose={handleClose}
      >
    <Box className={styles.box}>
          <CloseIcon onClick={handleClose} className={styles.close} variant="large"/>
          <form method="post" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
             <Controller
      name="datum"
      control={control}
      defaultValue={null}
      render={({ field }) => (
       <div className={styles.item}>
        <p className={styles.label}>Izaberi datum:</p>
        <DatePicker selected={field.value} onChange={date => field.onChange(date)} 
        className={styles.datePicker} />
        </div>
      )}
    />
  
    <div className={styles.item}>
   <Controller
  name="vreme"
  control={control}
  defaultValue={null}
  render={({ field }) => (
    <div className={styles.item}>
      <p className={styles.label}>Izaberi vreme:</p>
      <TimePicker
        value={field.value}
        onChange={field.onChange}
        className={styles.timePicker}
        clearIcon={null} 
        disableClock 
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  )}
/>
</div>

    <ContainedButton text="Dodaj" type="submit"/>
    </form>
           
        </Box>
      </Modal>
    </div>
  );
}
