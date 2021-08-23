import React from 'react';
import { Button } from 'rsuite';
import { TRANSLATIONS } from '../assets/lang';

const Home = ({onNext, language}) => {
    return (
        <div className={'container-home bg-light rounded-3 shadow mw-50 d-flex flex-column'}>
            <div className={'d-flex flex-column flex-fill justify-content-center align-items-center'}>
                <h2>Newsletter creator</h2>
                <Button appearance={'link'} size={'lg'} onClick={onNext} className={'m-4'}>{TRANSLATIONS['lets_start'][language]}</Button>
            </div>
            <div className={'d-flex justify-content-end p-2'}>
                <span>{TRANSLATIONS['version'][language]}: 0.0.1</span>
            </div>
        </div>
    );
}
  
export { Home };