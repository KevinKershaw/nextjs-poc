import { Button, SxProps, Theme, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { ReactNode, useState } from 'react'

const SelectableButton = ({ children, sx, onClicked }: { children: ReactNode; sx?: SxProps<Theme> | undefined; onClicked?: (arg?: string) => void }) => {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = () => {
    let selected = !isSelected
    setIsSelected(selected)
    if (onClicked) {
      onClicked()
    }
  }
  return (
    <>
      {isSelected ? (
        <ToggleButtonGroup value='selected' exclusive>
          <ToggleButton value='selected' onClick={handleClick} sx={sx}>
            {children}
          </ToggleButton>
        </ToggleButtonGroup>
      ) : (
        <Button sx={sx} variant='outlined' onClick={handleClick}>
          {children}
        </Button>
      )}
    </>
  )
}

export default SelectableButton
