import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Faq = () => {
  return (
    <div className='w-[70%]'>
    {/* <div className=' border-2 border-amber-50 rounded-2xl w-[80%] overflow-hidden '>
        <div className='rounded-2xl bg-black px-8 py-4 text-3xl text-white flex justify-between'>Is QTify free to use? <button className=' bg-transparent!'><img src='arow.png' /></button></div>
        <div className=' bg-white px-8 py-5 text-left'>Sorry, unfortunately we don't provide the service to download any songs.</div>
    </div> */}
      <Accordion className=' border! border-amber-50! rounded-[10px]!  overflow-hidden! mb-2.5 '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' bg-black! px-8 py-3  text-white!'
        >
          <Typography component="span" className='text-3xl!'>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-5! text-left!'>
          Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <Accordion className=' border! border-amber-50! rounded-[10px]!  overflow-hidden! mb-2.5 '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' bg-black! px-8 py-3  text-white!'
        >
          <Typography component="span" className='text-3xl!'>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-5!  text-left!'>
        Sorry, unfortunately we don't provide the service to download any songs.
        </AccordionDetails>
      </Accordion>

    </div>

  )
}

export default Faq