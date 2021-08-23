import React, { useState } from 'react';
import { Steps, SelectPicker } from 'rsuite';
import { Images } from './screens/images';
import { Home } from './screens/home';
import { WidthPicker } from './screens/width-picker';
import { Links } from './screens/links';
import { Settings } from './screens/settings';
import { Save } from './screens/save';
import { createNL, createZip } from './components/newsletter-controller';
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_LANGUAGE, DEFAULT_TEXT_COLOR, DEFAULT_TITLE } from './assets/constants';
import { TRANSLATIONS, LANGUAGES } from './assets/lang';

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [images, setImages] = useState([]);
  const [links, setLinks] = useState([]);
  const [width, setWidth] = useState(0);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

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

  const onSettingsPick = (title, textColor, backgroundColor) => {
    setTitle(title);
    setTextColor(textColor);
    setBackgroundColor(backgroundColor);
    setCurrentStep(currentStep + 1);
  }

  const onSave = () => {
    let html = createNL(images, width, links, title, textColor, backgroundColor);
    var prettier = require('js-beautify').html;
    let beautifulHTML = prettier(html);
    createZip(beautifulHTML, images);
    //window.location.reload(false);
  }

  const onBack = () => {
    setCurrentStep(currentStep - 1);
  }

  return (     
    <div className={'app'}>
      <SelectPicker
        value={language}
        data={LANGUAGES}
        cleanable={false}
        searchable={false}
        onChange={(value) => {setLanguage(value)}}
        appearance={'subtle'}
        style={{ position: 'absolute', right: 40, top: 0}}
        renderValue={(value) => <img src={`./files/${value}.png`} height={30}/>}
      />
      { currentStep === -1 ? 
      <Home 
        onNext={() => {
          setCurrentStep(currentStep + 1);
        }}
        language={language}
      /> 
      : 
      <Steps current={currentStep} vertical className='w-200'>
        <Steps.Item title={TRANSLATIONS['drop_images'][language]} />
        <Steps.Item title={TRANSLATIONS['pick_width'][language]} />
        <Steps.Item title={TRANSLATIONS['paste_links'][language]} />
        <Steps.Item title={TRANSLATIONS['final_settings'][language]} />
        <Steps.Item title={TRANSLATIONS['overview'][language]} />
      </Steps> }
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
          defaultTextColor={textColor}
          defaultBackgroundColor={backgroundColor}
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
          textColor={textColor}
          backgroundColor={backgroundColor}
          onSave={onSave}
          onBack={onBack}
          language={language}
        />
      : null}
    </div>
  );
}