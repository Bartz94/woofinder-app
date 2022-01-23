// https://reactjsexample.com/simple-react-hook-to-open-browser-file-selector/

import { useFilePicker } from 'use-file-picker';
import React from "react";
import Button from '@mui/material/Button';

export const Filepicker = () => {
 
    const [
        openFileSelector,
        { filesContent, loading, errors, plainFiles }
      ] = useFilePicker({
        multiple: true,
        readAs: "DataURL", 
        accept: [".jpeg", ".jpg", ".png"],
        limitFilesConfig: { min: 2, max: 3 }
        
      });
    
      if (errors.length) {
        return (
          <div>
             <Button variant='contained' sx={{ color: 'white', fontSize: '0.7em', borderRadius: '20px',backgroundColor:'#7a7d80',margin:'40px' }} onClick={openFileSelector} >Dodaj zdjęcie</Button>
          </div>
        );
      }
    
      if (loading) {
        return <div>Loading...</div>;
      }


    return ( 
        <div>
         <Button variant='contained' sx={{ color: 'white', fontSize: '0.7em', borderRadius: '20px',backgroundColor:'#7a7d80',margin:'40px' }} onClick={openFileSelector} >Dodaj zdjęcie</Button>
        <br />
        Liczba wybranych plików:
        {plainFiles.length}
        <br />
        {/* If readAs is set to DataURL, You can display an image */}
        {!!filesContent.length && <img src={filesContent[0].content} />}
        <br />
        {plainFiles.map((file) => (
          <div key={file.name}>{file.name}</div>
        ))}
      </div>
     );
}
 
