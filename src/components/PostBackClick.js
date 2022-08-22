import { useRouter } from 'next/router';
import { Button } from '@carbon/react';
import { ArrowLeft } from '@carbon/react/icons';

const PostBackClick = ({ href = '/blog' }) => {
  const router = useRouter();
  return (
    <Button
      className="post-back-click"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      <ArrowLeft /> Back to blog index
    </Button>
  );
};

export default PostBackClick;
