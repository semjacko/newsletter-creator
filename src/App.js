import React, { useState } from 'react';
import { Button, Steps } from 'rsuite';
import { Images } from './screens/images';
import { Home } from './screens/home';
import { WidthPicker } from './screens/width-picker';
import { Links } from './screens/links';
import { Settings } from './screens/settings';
import { Save } from './screens/save';
import { createNL, createZip } from './components/newsletter-controller';
import { DEFAULT_HEADER, DEFAULT_TITLE } from './assets/constants';
import { LANG } from './assets/lang';

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [images, setImages] = useState([]);
  const [links, setLinks] = useState([]);
  const [width, setWidth] = useState(0);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [header, setHeader] = useState(DEFAULT_HEADER);
  const [color, setColor] = useState('');
  const [language, setLanguage] = useState('sk')

  const onImagesDrop = (images) => {
    setImages(images);
    setLinks(images.map(e => ''))
    setCurrentStep(currentStep + 1);
  }

  const onWidthPick = (value) => {
    setWidth(value);
    setCurrentStep(currentStep + 1);
  }
  
  const onLinksPick = (links) => {
    setLinks(links);
    setCurrentStep(currentStep + 1);
  }

  const onSettingsPick = (title, header, color) => {
    setTitle(title);
    setHeader(header);
    setColor(color);
    setCurrentStep(currentStep + 1);
  }

  const onSave = () => {
    let html = createNL(images, width, links, title, header, color);
    var prettier = require('js-beautify').html;
    let beautifulHTML = prettier(html);
    createZip(beautifulHTML, images);
    //window.location.reload(false);
  }

  const onBack = () => {
    setCurrentStep(currentStep - 1);
  }

  // Landing
  if (currentStep === -1) {
    return (
    <div className={'app'}>
      <Home 
        onNext={() => {
          setCurrentStep(currentStep + 1);
        }}
        language={language}
      />
    </div>
    );
  }

  return (     
    <div className={'app'}>
      {/* TODO */}
      <Button style={{position: 'absolute', top: 0, left: 0}} onClick={() => {setLanguage('sk')}}>SK</Button>
      <Button style={{position: 'absolute', top: 0, left: 50}} onClick={() => {setLanguage('en')}}>EN</Button>
      <Steps current={currentStep} vertical className='w-200'>
        <Steps.Item title={LANG['drop_images'][language]} />
        <Steps.Item title={LANG['pick_width'][language]} />
        <Steps.Item title={LANG['paste_links'][language]} />
        <Steps.Item title={LANG['final_settings'][language]} />
        <Steps.Item title={LANG['overview'][language]} />
      </Steps>
      { currentStep === 0 ?
        // upload images
        <Images 
          onNext={onImagesDrop}
          language={language}
        />
      : currentStep === 1 ?
        // pick a width
        <WidthPicker 
          images={images} 
          onNext={onWidthPick}
          onBack={onBack}
          language={language}
        />
      : currentStep === 2 ?
        // set image hrefs
        <Links 
          images={images}
          defaultLinks={links} 
          width={width} 
          onNext={onLinksPick}
          onBack={onBack}
          language={language}
        />
      : currentStep === 3 ?
        // final settings
        <Settings
          images={images}
          width={width}
          defaultTitle={title}
          defaultHeader={header}
          defaultColor={color}
          onNext={onSettingsPick}
          onBack={onBack}
          language={language}
        />
      : currentStep === 4 ?
        // overview and save
        <Save 
          images={images} 
          width={width}
          links={links}
          title={title}
          header={header}
          color={color}
          onSave={onSave}
          onBack={onBack}
          language={language}
        />
      : null}
    </div>
  );
}