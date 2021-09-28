import React, { useState } from 'react';
import { Steps, SelectPicker, Alert } from 'rsuite';
import { Images } from './screens/images';
import { Home } from './screens/home';
import { WidthPicker } from './screens/width-picker';
import { Links } from './screens/links';
import { Settings } from './screens/settings';
import { Save } from './screens/save';
import { createNL, createZip, detectWidths } from './components/newsletter-controller';
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_LANGUAGE, DEFAULT_TEXT_COLOR, DEFAULT_TITLE } from './assets/constants';
import { TRANSLATIONS, LANGUAGES } from './assets/lang';

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [images, setImages] = useState([]);
  const [links, setLinks] = useState([]);
  const [widths, setWidths] = useState(0);
  const [selectedWidth, setSelectedWidth] = useState([]);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const onImagesDrop = (images) => {
    let detectedWidths = detectWidths(images);
    if (detectedWidths.length <= 0) {
      Alert.error('Error. Can\'t make a newsletter from these images. Make sure they are sorted alphabetically', 8000);
      return;
    }
    setImages(images);
    setWidths(detectedWidths);
    setLinks(images.map(e => ''))
    setCurrentStep(currentStep + 1);
  }

  const onWidthPick = (value) => {
    setSelectedWidth(value);
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
    let html = createNL(images, selectedWidth, links, title, textColor, backgroundColor);
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
        style={{ position: 'absolute', right: 30, top: 0}}
        renderValue={(value) => <img src={`./files/${value}.png`} height={30} alt={`${value}`}/>}
      />
      { currentStep === -1 ? 
      <Home 
        onNext={() => {
          setCurrentStep(currentStep + 1);
        }}
        language={language}
      /> 
      : 
      <Steps current={currentStep} vertical={true} className={'d-flex flex-column h-700 p-t-120 w-200'}>
        <Steps.Item title={TRANSLATIONS[language]['drop_images']} />
        <Steps.Item title={TRANSLATIONS[language]['pick_width']} />
        <Steps.Item title={TRANSLATIONS[language]['paste_links']} />
        <Steps.Item title={TRANSLATIONS[language]['final_settings']} />
        <Steps.Item title={TRANSLATIONS[language]['overview']} />
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
          widths={widths}
          onNext={onWidthPick}
          onBack={onBack}
          language={language}
        />
      : currentStep === 2 ?
        // set image hrefs
        <Links 
          images={images}
          defaultLinks={links} 
          width={selectedWidth} 
          onNext={onLinksPick}
          onBack={onBack}
          language={language}
        />
      : currentStep === 3 ?
        // final settings
        <Settings
          images={images}
          width={selectedWidth}
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
          width={selectedWidth}
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