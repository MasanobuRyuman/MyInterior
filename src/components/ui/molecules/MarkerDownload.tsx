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

interface IMarkerDownload {
  ImageURL: string
}

export const MarkerDownload: React.VFC<IMarkerDownload> = (
  props: IMarkerDownload
) => {
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
            src={props.ImageURL}
            component="img"
            sx={{
              height: 400,
              width: 330,

              mx: 'auto',
            }}
          />
        </DialogContent>
        <DialogActions>
          <a href={props.ImageURL} download>
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
