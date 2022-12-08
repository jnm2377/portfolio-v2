import { useRouter } from 'next/router';
import { ArrowLeft } from '@carbon/react/icons';

const PostBackClick = ({ href = '/blog' }) => {
  const router = useRouter();
  return (
    <a // eslint-disable-line jsx-a11y/anchor-is-valid
      href="#"
      className="post-back-click"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      <ArrowLeft /> just kidding
    </a>
  );
};

export default PostBackClick;
