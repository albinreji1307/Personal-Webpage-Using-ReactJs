import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Items({data}){
    return (
       <ImageList sx={{ width: "90%",height: "100%"}} cols={4} >
      {data.map((item) => (
        <ImageListItem key={Items.image}>
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.category}
           style={{ height:"300px",width:"230px",borderRadius:"7px",marginLeft:"80px"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

