import React from 'react';
import { Button, ButtonGroup } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';
import { TRANSLATIONS } from '../assets/lang';
import { Help } from '../components/help';

const Save = ({images, width, links, textColor, backgroundColor, onSave, onBack, language}) => {
    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative'}>
            <div className={'h-80 d-flex justify-content-center align-items-center'}>
                <h2>{TRANSLATIONS[language]['overview']}</h2>
            </div>
            <div className={'h-560 d-flex justify-content-center align-items-center'}>
                <NewsletterView images={images} showHeaderAndFooter={true} backgroundColor={backgroundColor} textColor={textColor} width={width} maxWidth={700} maxHeight={550}/>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS[language]['back']}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onSave()}>{TRANSLATIONS[language]['save']}</Button>
                </ButtonGroup>
            </div>
            <Help title={TRANSLATIONS[language]['overview']} style={{position: 'absolute', top: 10, left: 10}}>
                <p>{TRANSLATIONS[language]['you_can_check']}</p>
                <p>{TRANSLATIONS[language]['if_everything_is_okay']}</p>
            </Help>
        </div>
    );
}
  
export { Save };
