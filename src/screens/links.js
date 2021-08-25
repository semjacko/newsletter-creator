import React, { useState } from 'react';
import { Button, Input, ButtonGroup, InputGroup } from 'rsuite';
import { NewsletterView } from '../components/newsletter-view';
import { TRANSLATIONS } from '../assets/lang';
import { Help } from '../components/help';

const LinkInputs = ({nInputs, defaultValues, setLinks, language}) => {
    const [values, setValues] = useState(defaultValues);

    let inputs = [];
    for (let i = 0; i < nInputs; i++) {
        inputs.push(
            <InputGroup key={i} className={'m-t-5'}>
                <InputGroup.Addon>#{i+1}</InputGroup.Addon>
                <Input 
                    value={values[i]} 
                    placeholder={`${TRANSLATIONS[language]['link_image']} #${i+1}`} 
                    onChange={(text) => {
                        let newValues = [...values];
                        let texts = text.split(/\s+/);
                        for (let j = 0; j < texts.length && j + i < nInputs; j++) {
                            newValues[i + j] = texts[j].trim();
                        }
                        setValues(newValues);
                        setLinks(newValues);
                    }}
                />
            </InputGroup>
        )
    }
    return inputs;
}

const Links = ({images, defaultLinks, width, onNext, onBack, language}) => {
    const [links, setLinks] = useState(defaultLinks);

    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative'}>
            <div className={'h-640 d-flex justify-content-center align-items-center'}>
                <div className={'h-600 w-350 p-l-20 d-flex flex-column'}>
                    <div className={'h-60 d-flex justify-content-center align-items-center'}>
                        <h3>{TRANSLATIONS[language]['paste_links']}</h3>
                    </div>
                    <div className={'h-540 overflow-auto'}>
                        <LinkInputs nInputs={images.length} defaultValues={defaultLinks} setLinks={setLinks} language={language}/>
                    </div>
                </div>
                <div className={'h-600 w-650 d-flex align-items-center justify-content-center'}>
                    <NewsletterView images={images} imageHighlights={true} width={width} maxWidth={600} maxHeight={600}/>
                </div>
            </div>
            <div className={'h-60 d-flex justify-content-center align-items-center'}>
                <ButtonGroup>
                    <Button appearance={'ghost'} className={'w-350'} onClick={onBack}>{TRANSLATIONS[language]['back']}</Button>
                    <Button appearance={'primary'} className={'w-350'} onClick={() => onNext(links)}>{TRANSLATIONS[language]['next']}</Button>
                </ButtonGroup>
            </div>
            <Help title={'Paste links'} style={{position: 'absolute', top: 10, left: 10}}>
                <p>Copy and paste image links.</p>
                <p>If you paste more links (separated by a newline or whitespace) they will by propagated to the following inputs.</p>
                <img src={'./files/pastelinks.gif'} style={{width: 600, margin: 20}}/>
            </Help>
        </div>
    );
}
  
export { Links };