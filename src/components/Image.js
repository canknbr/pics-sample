import React from 'react';

const Image = ({
  id,
  urls: { regular, small, thumb },
  user: {
    name,
    profile_image: { medium },
  },
  alt_description: description,
  links: { download_location: download },
}) => {
  return (
    <div>
      <img
        src={regular}
        alt={description}
        style={{
          width: '100px',
          height: '100px',
        }}
      />
    </div>
  );
};

export default Image;
