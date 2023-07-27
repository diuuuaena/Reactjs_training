import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1690527600&x-signature=mU2Z%2FmxyZKd7xNGQJ6suVWs%2Bmzc%3D"
                alt="Ảnh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        hoaa.hanassii
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('username')}>
                    <span>hoaaa</span>
                </p>
            </div>
        </div>
    );
}

export default AccountItem;
