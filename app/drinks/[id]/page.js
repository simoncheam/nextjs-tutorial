import Link from 'next/link';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  // await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Single Drink');
  }
  const data = await response.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt={title}
      />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;
