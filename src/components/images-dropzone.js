import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 10,
    height: 400,
    width: 800,
    marginTop: 40,
    borderColor: '#999999',
    borderStyle: 'dashed',
    backgroundColor: '#ffffff',
    color: '#999999',
    transition: '.24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#0000ff',
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
    color: '#0000ff'
  };
  
  const acceptStyle = {
    borderColor: '#00ff00',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    color: '#00ff00'
  };
  
  const rejectStyle = {
    borderColor: '#ff0000',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    color: '#ff0000'
  };

const ImagesDropzone = ({onDrop, placeholder}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({onDrop: onDrop, accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <span>{placeholder}</span>
    </div>
  );
}

export { ImagesDropzone };