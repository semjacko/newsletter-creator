import React from 'react';
import { Button, ButtonGroup } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';
import { TRANSLATIONS } from '../assets/lang';

const Save = ({images, width, links, textColor, backgroundColor, onSave, onBack, language}) => {
    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column'}>
            <div className={'h-80 d-flex justify-content-center align-items-center'}>
                <h2>{TRANSLATIONS['overview'][language]}</h2>
            </div>
            <div className={'h-560 d-flex justify-content-center align-items-center'}>
                <NewsletterView images={images} showHeaderAndFooter={true} backgroundColor={backgroundColor} textColor={textColor} width={width} maxWidth={700} maxHeight={550}/>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS['back'][language]}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onSave()}>{TRANSLATIONS['save'][language]}</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
  
export { Save };
