import React, { useState } from 'react';
import { Button, ButtonGroup, Input, InputGroup, Divider } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';
import { ChromePicker } from 'mp-react-color';
import { TRANSLATIONS } from '../assets/lang';

const Settings = ({images, width, defaultTitle, defaultTextColor, defaultBackgroundColor, onNext, onBack, language}) => {
    const [title, setTitle] = useState(defaultTitle);
    const [textColor, setTextColor] = useState(defaultTextColor);
    const [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor);

    const handleTextColorChange = ({ hex }) => setTextColor(hex)
    const handleBackgroundColorChange = ({ hex }) => setBackgroundColor(hex)
    const onTitleChange = (text) => setTitle(text);

    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column'}>
            <div className={'h-640 d-flex justify-content-center align-items-center'}>
                <div className={'h-600 w-350 p-l-20 d-flex flex-column'}>
                    <div className={'h-60 d-flex justify-content-center align-items-center'}>
                        <h3>{TRANSLATIONS['settings'][language]}</h3>
                    </div>
                    <div className={'h-540 overflow-auto'}>
                        <Divider className={'m-t-5'}>{TRANSLATIONS['title'][language]}</Divider>
                        <InputGroup>
                            <InputGroup.Addon>{TRANSLATIONS['title'][language]}</InputGroup.Addon>
                            <Input value={title} onChange={onTitleChange}/>
                        </InputGroup>
                        <Divider className={'m-t-5'}>{TRANSLATIONS['bg_color'][language]}</Divider>
                        <div className={'d-flex justify-content-center'}>
                            <ChromePicker disableAlpha onChange={ handleBackgroundColorChange } color={backgroundColor}/>
                        </div>
                        <Divider className={'m-t-5'}>{TRANSLATIONS['text_color'][language]}</Divider>
                        <div className={'d-flex justify-content-center'}>
                            <ChromePicker disableAlpha onChange={ handleTextColorChange } color={textColor}/>
                        </div>
                    </div>
                </div>
                <div className={'h-600 w-650 d-flex align-items-center justify-content-center'}>
                    <NewsletterView images={images} width={width} showHeaderAndFooter={true} backgroundColor={backgroundColor} textColor={textColor} maxWidth={600} maxHeight={600}/>
                </div>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS['back'][language]}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onNext(title, textColor, backgroundColor)}>{TRANSLATIONS['next'][language]}</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
  
export { Settings };
