import React from "react";
import styles from "./DonateComplete.module.css"
import { useNavigate } from "react-router-dom";
// import { Route } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
// import {BsFillArrowRightCircleFill} from "react-icons/bs"

function DonateComplete(props) {
    const navigate = useNavigate()

    const onClickHandlerHome = () => {
        navigate('/')
    }
    const onClickHandlerConfirm =() => {
        navigate('/DonateConfirm')
    }
    const onClickHandlerThanks = () => {
        navigate('/DonateThanks')
    }
// 회원정보를 지금 여기서도 가지고 있어야 된다
// 회원인지 비회원인지 확인 후 감사 인사 다르게 if
    return (
        <div>
            <div className={styles.myImg}>
                <button className={styles.circle}>
                    <AiOutlineArrowLeft className={styles.iconStyle} onClick={onClickHandlerConfirm}/>
                </button>
                    <div className={styles.buttonOne}>
                        {/* {보관함 번호} */}
                        <p className={styles.textAlign}> 보관함에 책을 넣고</p>
                        <br />
                        <p className={styles.textAlignOne}>완료</p>
                        <p className={styles.textAlignTwo}> 버튼을 눌러주세요</p>
                        <div>
                            <div className={styles.buttonTwo} onClick={onClickHandlerThanks}>
                                <p className={styles.textAlignThree}>완료</p>
                            </div>
                        </div>
                    </div>
                <button className={styles.homeCircle} onClick={onClickHandlerHome}>
                    <BiHomeAlt className={styles.iconStyle}/>
                </button>
            </div>
        </div>
        )
}

export default DonateComplete