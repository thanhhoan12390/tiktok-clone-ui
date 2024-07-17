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
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1fa666bde8bf3c01e96e0e2339861a5~c5_100x100.jpeg?lk3s=a5d48078&nonce=56952&refresh_token=5f5ce060778769526160285084baf9bb&x-expires=1721419200&x-signature=5L2nEUWHZ4LrEo296OIpfUGiDG0%3D&shp=a5d48078&shcp=81f88b70"
                alt="Day la Thomat"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thomat pan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>thomat123</span>
            </div>
        </div>
    );
}

export default AccountItem;
