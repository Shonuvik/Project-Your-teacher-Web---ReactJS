import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}
// FC = functionComponent = componente em formato de funcao
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/" >
                        <img src={backIcon} alt="voltar"/>
                    </Link>
                    <img src={logo} alt="proff"/>
                </div>
            


            <div className="header-content">
                <strong> {props.title} </strong>
    { props.description && <p>{props.description}</p> }

                {props.children}
            </div>

            
          </header>
    );
}

export default PageHeader;