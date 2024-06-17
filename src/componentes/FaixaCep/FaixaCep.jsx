import React, { useState, useEffect } from 'react';
import './FaixaCep.scss';
import FaixaCepdialog from '../FaixaCepDialog/FaixaCepDialog';
import { getFromLocalStorage } from '../../service/localStorageService';

const FaixaCep = () => {
    const [dialogAberto, setDialogAberto] = useState(false);
    const [address, setAddress] = useState('');

    useEffect(() => {
        updateAddress();
    }, []);

    function abreDialog() {
        setDialogAberto(true);
    }

    function fechaDialog() {
        setDialogAberto(false);
        updateAddress();
    }

    function updateAddress() {
        const savedAddress = getFromLocalStorage('address');
        if (savedAddress) {
            if (savedAddress.cidade) {
                setAddress(savedAddress.cidade);
            } else {
                setAddress(savedAddress.cep);
            }
        } else {
            setDialogAberto(true);
        }
    }

    return (
        <div>
            <FaixaCepdialog isOpen={dialogAberto} onClose={fechaDialog}/>
            <div className="faixa-cep">
                <div className="faixa-cep__container">
                    <span>{"Você está em: "}<span className="faixa-cep__cidade">{address}</span></span>
                </div>
                <div className="faixa-cep__alterar" onClick={abreDialog}>Alterar</div>
            </div>
        </div>
    );
};

export default FaixaCep;
