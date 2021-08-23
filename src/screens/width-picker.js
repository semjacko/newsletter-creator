import React, { useState } from 'react';
import {RadioGroup, Radio, Button, ButtonGroup} from 'rsuite';
import { detectWidths } from '../components/newsletter-controller';
import { NewsletterView } from '../components/newsletter-view';
import { TRANSLATIONS } from '../assets/lang';

const WidthPicker = ({images, onNext, onBack, language}) => {
    let widths = detectWidths(images);
    console.log(widths);

    const [selected, setSelected] = useState(widths[0]);

    let radioWidths = [];
    for (let w of widths) {
        radioWidths.push(<Radio key={w.toString()} value={w}>{w}px</Radio>)
    }

    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column'}>
            <div className={'h-640 d-flex justify-content-center align-items-center'}>
                <div className={'h-600 w-350 p-l-20 d-flex flex-column'}>
                    <div className={'h-60 d-flex justify-content-center align-items-center'}>
                        <h3>{TRANSLATIONS['pick_width'][language]}</h3>
                    </div>
                    <div className={'h-540 overflow-auto'}>
                        <RadioGroup 
                            className={'justify-content-center align-items-center d-flex flex-column'}
                            name={'radioList'} 
                            appearance={'picker'} 
                            defaultValue={widths[0]} 
                            onChange={(value) => {setSelected(value)}}>
                            {radioWidths}
                        </RadioGroup>
                    </div>
                </div>
                <div className={'h-600 w-650 d-flex align-items-center justify-content-center'}>
                    <NewsletterView images={images} width={selected} maxWidth={600} maxHeight={600}/>
                </div>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS['back'][language]}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onNext(selected)}>{TRANSLATIONS['next'][language]}</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
  
export { WidthPicker };