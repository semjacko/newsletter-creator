import React, { useRef } from 'react';
import { TRANSLATIONS } from '../assets/lang';
import { Uploader } from 'rsuite';
import { Help } from '../components/help';

const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
		img.onload = () => resolve(img);
		img.onerror = reject;
    img.name = file.name;
    img.src = window.URL.createObjectURL(file);
	});
}

const Images = ({onNext, language}) => {
  const uploaderRef = useRef(null);

  const onDropzoneChange = async (files) => {
    // TODO subory nie su obrazky
    let images = []
    for (const f of files) {
      images.push(await loadImage(f.blobFile));
    }
    images.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    uploaderRef.current.state.fileList = []
    onNext(images);
  }

  return (
      <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative'}>
        <div className={'h-80 d-flex justify-content-center align-items-center'}>
          <h2>{TRANSLATIONS[language]['images']}</h2>
        </div>
        <div className={'h-560 d-flex justify-content-center align-items-center'}>
          <Uploader
            ref={uploaderRef}
            draggable={true}
            accept={'image/*'}
            multiple={true}
            fileListVisible={false}
            shouldUpload={()=>false}
            onChange={onDropzoneChange}
          >
            <div style={{lineHeight: '400px', width: 800}}>{TRANSLATIONS[language]['drag_n_drop']}</div>
          </Uploader>
        </div>
        <Help title={TRANSLATIONS[language]['images_uploading']} style={{position: 'absolute', top: 10, left: 10}}>
          <p>{TRANSLATIONS[language]['select_all_images']}</p>
          <p>{TRANSLATIONS[language]['images_have_to_be_sorted']}</p>
          <img src={'./files/dragndrop.gif'} alt={'drag and drop hint'} style={{width: 600, margin: 20}}/>
        </Help>
      </div>
  );
}

export { Images };