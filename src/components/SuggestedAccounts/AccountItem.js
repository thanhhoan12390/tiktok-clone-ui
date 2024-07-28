import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src="https://avatars.githubusercontent.com/u/104263239?v=4" alt="" />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>nguyenvana</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

export default AccountItem;
