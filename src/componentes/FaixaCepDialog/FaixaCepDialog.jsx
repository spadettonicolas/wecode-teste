
import React, { useState } from 'react';
import { saveToLocalStorage } from '../../service/localStorageService';
import './FaixaCepDialog.scss';

function FaixaCepDialog(props) {
    const { isOpen, onClose } = props;

    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const estadosBrasileiros = [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo",
        "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba",
        "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul",
        "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
    ];

    if (!isOpen) return null;

    function handleSubmit(e) {
        e.preventDefault();
        if(cep && cep !==''){
            const address = {
                cep,
                cidade,
                estado,
            };
            saveToLocalStorage('address', address);
            onClose();
        } 
        
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <button className="dialog__botao-fechar" onClick={onClose}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z" fill="#8A8A8A"/>
                    </svg>
                </button>
                <h2 className="dialog__titulo">Personalize sua experiência e encontre produtos perto de você!</h2>
                <form className="dialog__form" onSubmit={handleSubmit}>
                    <div className="dialog__form-grupo">
                        <label className="dialog__label" htmlFor="cep">Código postal*</label>
                        <input
                            className="dialog__input"
                            type="text"
                            id="cep"
                            placeholder="00000-000"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </div>
                    <div className="dialog__form-grupo dialog__form-grupo--row">
                        <div className="dialog__form-field">
                            <label className="dialog__label" htmlFor="cidade">Cidade</label>
                            <input
                                className="dialog__input"
                                type="text"
                                id="cidade"
                                placeholder="Opcional"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                        </div>
                        <div className="dialog__form-field">
                            <label className="dialog__label" htmlFor="estado">Estado</label>
                            <select
                                className="dialog__input dialog__input__select"
                                id="estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            >
                                <option value="">Opcional</option>
                                {estadosBrasileiros.map((estado, index) => (
                                    <option key={index} value={estado}>{estado}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button className="dialog__submit-botao" type="submit">Salvar endereço</button>
                </form>
            </div>
        </div>
    );
}

export default FaixaCepDialog;
