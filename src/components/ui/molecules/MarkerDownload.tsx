import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import React, { useState } from 'react'

import { DefaultButton } from './../atoms'

export const MarkerDownload: React.VFC = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <DefaultButton Width={100} onClick={handleClickOpen}>
        ARマーカー
      </DefaultButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'ARマーカー'}</DialogTitle>
        <DialogContent>
          <Box
            src="ARMarker/marker.png"
            component="img"
            sx={{
              height: 400,
              width: 330,

              mx: 'auto',
            }}
          />
        </DialogContent>
        <DialogActions>
          <a href="ARMarker/marker.pdf" download>
            ダウンロード
          </a>
          <Button onClick={handleClose} autoFocus>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
