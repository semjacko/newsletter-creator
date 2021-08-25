import React from 'react';
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
    return (
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative'}>
          <div className={'h-80 d-flex justify-content-center align-items-center'}>
            <h2>{TRANSLATIONS[language]['images']}</h2>
          </div>
          <div className={'h-560 d-flex justify-content-center align-items-center'}>
            <Uploader
              draggable={true}
              accept={'image/*'}
              fileListVisible={false}
              multiple={true}
              shouldUpload={()=>false}
              onChange={async (files) => {
                // TODO subory nie su obrazky
                let images = []
                for (const f of files) {
                  images.push(await loadImage(f.blobFile));
                }
                images.sort((a, b) => {
                  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                });
                console.log(images)
                onNext(images);
              }}
            >
              <div style={{lineHeight: '400px', width: 800}}>{TRANSLATIONS[language]['drag_n_drop']}</div>
            </Uploader>
          </div>
          <Help title={'Images uploading'} style={{position: 'absolute', top: 10, left: 10}}>
            <p>Select all images you want to use and drag and drop them to the dropzone.</p>
            <p>Images have to sorted by their names.</p>
            <img src={'./files/dragndrop.gif'} style={{width: 600, margin: 20}}/>
          </Help>
        </div>
    );
}

export { Images };