import * as React from 'react';
import clsx from 'clsx';
import { useSwitch } from '@mui/core/SwitchUnstyled';

import { SwitchInput, SwitchRoot, SwitchThumb, SwitchTrack } from './styles'

const MUISwitch = (props: any): JSX.Element => {

  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack >
        <SwitchThumb className={clsx(stateClasses)} />

      </SwitchTrack>

      <SwitchInput {...getInputProps()} aria-label="Demo switch" onClick={props.onClick}/>

    </SwitchRoot>
  );
}

export default MUISwitch