import React, { useState } from 'react';
import { Button, ButtonGroup, Input } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';
import { ChromePicker } from 'mp-react-color';

const Settings = ({images, width, defaultTitle, defaultHeader, defaultColor, onNext, onBack}) => {
    const [title, setTitle] = useState(defaultTitle);
    const [header, setHeader] = useState(defaultHeader);
    const [color, setColor] = useState(defaultColor);

    const handleColorChange = ({ hex }) => setColor(hex)
    const onTitleChange = (text) => setTitle(text);
    const onHeaderChange = (text) => setHeader(text);

    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column'}>
            <div className={'h-640 d-flex justify-content-center align-items-center'}>
                <div className={'h-600 w-350 p-l-20 d-flex flex-column'}>
                    <div className={'h-60 d-flex justify-content-center align-items-center'}>
                        <h3>Settings</h3>
                    </div>
                    <div className={'h-540 overflow-auto'}>
                        <Input placeholder={'Title'} value={title} onChange={onTitleChange} className={'m-t-5'}/>
                        <Input componentClass={'textarea'} rows={3} placeholder={'Header'} value={header} onChange={onHeaderChange} className={'m-t-5'}/>
                        <ChromePicker disableAlpha onChange={ handleColorChange } color={color} className={'m-t-5'}/>
                    </div>
                </div>
                <div className={'h-600 w-650 d-flex align-items-center justify-content-center'}>
                    <NewsletterView images={images} width={width} maxWidth={600} maxHeight={600}/>
                </div>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>Back</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onNext(title, header, color)}>Next</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
  
export { Settings };
