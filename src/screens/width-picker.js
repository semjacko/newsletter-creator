import React, { useState } from 'react';
import {RadioGroup, Radio, Button, ButtonGroup} from 'rsuite';
import { detectWidths } from '../components/newsletter-controller';
import { NewsletterView } from '../components/newsletter-view';
import { TRANSLATIONS } from '../assets/lang';
import { Help } from '../components/help';

const WidthPicker = ({images, onNext, onBack, language}) => {
    let widths = detectWidths(images);
    console.log(widths);

    const [selected, setSelected] = useState(widths[0]);

    let radioWidths = [];
    for (let w of widths) {
        radioWidths.push(<Radio key={w.toString()} value={w}>{w}px</Radio>)
    }

    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative'}>
            <div className={'h-640 d-flex justify-content-center align-items-center'}>
                <div className={'h-600 w-350 p-l-20 d-flex flex-column'}>
                    <div className={'h-60 d-flex justify-content-center align-items-center'}>
                        <h3>{TRANSLATIONS[language]['pick_width']}</h3>
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
                    <NewsletterView images={images} imageHighlights={true} width={selected} maxWidth={600} maxHeight={600}/>
                </div>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS[language]['back']}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onNext(selected)}>{TRANSLATIONS[language]['next']}</Button>
                </ButtonGroup>
            </div>
            <Help title={'Pick width'} style={{position: 'absolute', top: 10, left: 10}}>
                <p>Here you can see all possible widths of the Newsletter.</p>
                <p>Widths have been calculated based on the images you uploaded in the previous step.</p>
                <p>To achieve the desired output images have to be sorted by their names.</p>
            </Help>
        </div>
    );
}
  
export { WidthPicker };