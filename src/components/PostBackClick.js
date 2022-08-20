import { useRouter } from 'next/router';

const PostBackClick = ({ className, href = '/blog' }) => {
  const router = useRouter();
  return (
    <a // eslint-disable-line jsx-a11y/anchor-is-valid
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      Back to blog index
    </a>
  );
};

export default PostBackClick;
