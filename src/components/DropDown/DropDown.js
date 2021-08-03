import React, {useState, useRef, useEffect} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import arrow from "../../assets/images/arrow.png";
import "../DropDown/DropDown.css";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../store/actions/language";

const language = ['ENG', 'FR']

const DropDown = ({isWhate}) => {
    const outRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("FR");

    const dispatch = useDispatch()

    useOutsideClick(outRef, () => setIsOpen(false));

    const openToggleHandler = () => {
        setIsOpen(!isOpen);
    };

    const changeValueHandler = (name) => {
        setValue(name);
        openToggleHandler();
        dispatch(changeLanguageAction(name))
    };

    return (
        <div className='container' ref={outRef}>
            <div className='dropBlock'>
                <div
                    className={classNames('container_header', {
                        ['container_header_active']: isOpen,
                        ['white_arrow']: isWhate,
                    })}
                    onClick={openToggleHandler}
                >
                    {value}
                    <i className={`fa fa-caret-down ${isOpen ? 'rotate': ''}`}></i>
                </div>
            </div>

            {isOpen ? (
                <div
                    className={classNames('content', {
                        ['arrow']: isWhate,
                    })}>
                    <div
                        className={classNames('content_item', {
                            ['content_item_whate']: isWhate,
                        })}>
                        {
                            language.filter(i=>i !== value).map((i,index)=>(
                                <p onClick={() => changeValueHandler(i)}
                                    className={'leng'} key={index}>
                                    {i}
                                </p>
                            ))
                        }
                    </div>
                </div>
            ) : null}
        </div>
    );
};

DropDown.propTypes = {};

export default DropDown;
