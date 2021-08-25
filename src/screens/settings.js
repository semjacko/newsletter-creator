import React, { useState } from 'react';
import { Button, ButtonGroup, Input, InputGroup, Divider } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';
import { ChromePicker } from 'mp-react-color';
import { TRANSLATIONS } from '../assets/lang';
import { Help } from '../components/help';

const Settings = ({images, width, defaultTitle, defaultTextColor, defaultBackgroundColor, onNext, onBack, language}) => {
    const [title, setTitle] = useState(defaultTitle);
    const [textColor, setTextColor] = useState(defaultTextColor);
    const [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor);

    const handleTextColorChange = ({ hex }) => setTextColor(hex)
    const handleBackgroundColorChange = ({ hex }) => setBackgroundColor(hex)
    const onTitleChange = (text) => setTitle(text);

    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative'}>
            <div className={'h-640 d-flex justify-content-center align-items-center'}>
                <div className={'h-600 w-350 p-l-20 d-flex flex-column'}>
                    <div className={'h-60 d-flex justify-content-center align-items-center'}>
                        <h3>{TRANSLATIONS[language]['settings']}</h3>
                    </div>
                    <div className={'h-540 overflow-auto'}>
                        <Divider className={'m-t-5'}>{TRANSLATIONS[language]['title']}</Divider>
                        <InputGroup>
                            <InputGroup.Addon>{TRANSLATIONS[language]['title']}</InputGroup.Addon>
                            <Input value={title} onChange={onTitleChange}/>
                        </InputGroup>
                        <Divider className={'m-t-5'}>{TRANSLATIONS[language]['bg_color']}</Divider>
                        <div className={'d-flex justify-content-center'}>
                            <ChromePicker disableAlpha onChange={ handleBackgroundColorChange } color={backgroundColor}/>
                        </div>
                        <Divider className={'m-t-5'}>{TRANSLATIONS[language]['text_color']}</Divider>
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
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS[language]['back']}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onNext(title, textColor, backgroundColor)}>{TRANSLATIONS[language]['next']}</Button>
                </ButtonGroup>
            </div>
            <Help title={'Settings'} style={{position: 'absolute', top: 10, left: 10}}>
                <p>Here you can choose the title of the Newsletter and also the background color and the text color of its header and footer.</p>
            </Help>
        </div>
    );
}
  
export { Settings };
