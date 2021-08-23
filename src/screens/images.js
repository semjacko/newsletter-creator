import React from 'react';
import { ImagesDropzone } from '../components/images-dropzone';
import { TRANSLATIONS } from '../assets/lang';

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
        <div className={'container-workspace bg-light rounded-3 shadow d-flex flex-column'}>
          <div className={'h-80 d-flex justify-content-center align-items-center'}>
            <h2>{TRANSLATIONS['images'][language]}</h2>
          </div>
          <div className={'h-560 d-flex justify-content-center align-items-center'}>
            <ImagesDropzone
              placeholder={TRANSLATIONS['drag_n_drop'][language]}
              onDrop={async (files) => {
                  let images = []
                  for (const f of files) {
                      images.push(await loadImage(f));
                  }
                  images.sort((a, b) => {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                  });
                  onNext(images);
              }}
            />
          </div>
          <div className={'h-60 d-flex justify-content-center align-items-center'}>
          </div>
        </div>
    );
}

export { Images };