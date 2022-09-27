import Image from 'next/image';

type Props = {
  imgUrl: string;
}

const Thumbnail = ({ imgUrl }: Props) => (
  <Image
    placeholder='blur'
    blurDataURL='/placeholder.jpg'
    className='rounded-lg'
    objectFit='cover'
    src={imgUrl}
    alt='thumbnail'
    layout='fill'
  />
);

export default Thumbnail;
