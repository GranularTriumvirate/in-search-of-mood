// import styles from '@/components/views/filters/searched/SearchedContent.module.css';

import { useSpotifyContext } from '@/lib/client/context/SpotifyContext';
import { Box } from '@mui/material';
import ArtistItem from '../items/artists/ArtistItem';

const SearchedContent = () => {
  const { getSearchResults } = useSpotifyContext();
  const itemsCount = getSearchResults()?.length || 0;
  return (
    <>
      <Box
        sx={{
          p: 0,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr 1fr' }, // TODO: clearly need to change columns by breakpoint
          gap: 2,
        }}
      >
        {getSearchResults().map((itm, idx) => {
          // const thisImage = itm.images[1];
          // const iSrc = thisImage.url;
          // NOTE: Spotify API will return items in groups that have 'type' prop
          //       Search results are 'grouped' already, but still have 'type'
          //       https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
          //       for example
          // TODO: determine Item component type based on result item type
          // const highlightedItemKey =
          //   itm?.type === 'album' ? selectedAlbum?.id : selectedArtist?.id;
          if (itm?.type.toLowerCase() === 'artist') {
            return (
              <ArtistItem
                key={itm?.id}
                artist={itm}
                itemOfColumn={idx % 3}
                itemOfSet={idx / (itemsCount === 0 ? idx : itemsCount)}
              />
            );
          }
          return <div key={idx.toString()}>how did that happen</div>;
        })}
      </Box>
    </>
  );
};

export default SearchedContent;
