import React from 'react';
import { Button } from 'rsuite';
import { TRANSLATIONS } from '../assets/lang';

const Home = ({onNext, language}) => {
    return (
        <div className={'container-home bg-light rounded-3 shadow mw-50 d-flex flex-column'}>
            <div className={'d-flex flex-column flex-fill justify-content-center align-items-center'}>
                <h2>Newsletter creator</h2>
                <Button appearance={'link'} size={'lg'} onClick={onNext} className={'m-4'}>{TRANSLATIONS[language]['lets_start']}</Button>
            </div>
            <div className={'d-flex justify-content-end p-2'}>
                <span>{TRANSLATIONS[language]['version']}: 1.0.0</span>
            </div>
        </div>
    );
}
  
export { Home };