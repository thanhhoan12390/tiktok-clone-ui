import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

// Sử dụng memo để khi searchResult có nhiều phần tử thì khi re-render lại sẽ ảnh hưởng một ít tới performance
function SearchResult({ searchResult }) {
    return searchResult.map((result) => <AccountItem key={result.id} data={result} />);
}

export default memo(SearchResult);
