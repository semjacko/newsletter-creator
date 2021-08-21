import React from 'react';
import { Button, ButtonGroup } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';

const Save = ({images, width, links, header, color, onSave, onBack}) => {
    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column'}>
            <div className={'h-80 d-flex justify-content-center align-items-center'}>
                <h2>Overview</h2>
            </div>
            <div className={'h-560 d-flex justify-content-center align-items-center'}>
                <NewsletterView images={images} width={width} maxWidth={600} maxHeight={550}/>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>Back</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onSave()}>Save</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
  
export { Save };
