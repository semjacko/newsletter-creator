import React from 'react';
import { Whisper, Popover, Icon } from 'rsuite';

const Help = (props) => {
    return (
        <div style={props.style}>
            <Whisper
                trigger={'hover'}
                placement={'auto'}
                speaker={
                    <Popover title={props.title}>{props.children}</Popover>
                }
            >
                <Icon icon={'question-circle'} size="2x" style={{color: '#3498FF'}}/>
            </Whisper>
        </div>
    )
}

export { Help };