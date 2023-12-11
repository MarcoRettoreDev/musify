import { Link } from '@inertiajs/react';
import errorIMG from '../../../css/icons/404_Error_2.svg';

export const NoResults = ({ allArtists }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid-cols-6 space-y-4">
        <h1 className="text-2xl">Sorry we didn't found any results</h1>
        <h4 className="">Try with some of our content: </h4>
        <ul className="space-y-2">
          {allArtists.map(artist => (
            <li
              key={artist.id}
              className="hover:text-greySecondary text-slate-200"
            >
              <Link href={route('artist.show', artist.id)}>
                <h3 className="text-inherit">{artist.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid-cols-6">
        <img src={errorIMG} alt="" className="w-3/4 mx-auto" />
      </div>
    </div>
  );
};
