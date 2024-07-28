import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // Sử dụng headless Tippy thì dùng thêm render={} để hiện popover
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        // Using a wrapper <div> or <span> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <Tippy
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                interactive // Có thể tương tác được với content bên trong
                render={(props) => (
                    // tabIndex="-1" để không bị focus vào khi bấm dấu tab
                    <div tabIndex="-1" {...props}>
                        <PopperWrapper>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
