'use client'
import React, { useState, useEffect } from 'react';
import styles from './write.module.css';
import Image from 'next/image';
import Link from 'next/link';
import 'react-quill/dist/quill.bubble.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserid } from '@/app/redux/userslice';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
// Import ReactQuill dynamically to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const Write = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.userid);
  console.log(id)
  const router = useRouter();
  useEffect(() => {
    dispatch(loadUserid());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log(value);
   }, [value]);
  const handleSubmit = async () => {
    console.log("publish");

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', value);
    formData.append('imageUrl', file);
    formData.append('userid', id);

    try {
      const response = await axios.post('/api/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Response:", response.data);
      if (response.status === 200) {
        router.push('/'); // Redirect to home page
      }
    } catch (error) {
      console.log("Error in uploading", error);
    }
  };

  const clickHandler = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleChange = (content) => {
    setValue(content);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <div className={styles.container}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className={styles.custominput}
        type="text"
        placeholder="Title"
      />
      <div className={styles.editor}>
        <button className={styles.addbutton} onClick={clickHandler}>
          <Image src="/images/plus.png" width={16} height={16} alt='' />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="image" className={styles.addbutton}>
              <Image src="/images/addimage.png" width={16} height={16} alt=''/>
            </label>
            <button className={styles.addbutton}>
              <Image src="/images/video.png" width={16} height={16} alt=''/>
            </button>
            <button className={styles.addbutton}>
              <Image src="/images/extenal.png" width={16} height={16} alt='' />
            </button>
          </div>
        )}
      </div>
      <div className={styles.textarea}>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={handleChange}
          placeholder="Tell your story"
          modules={modules}
        />
      </div>
        <div className={styles.publish} >
        <Box sx={{ '& button': { m: 1 } }}>
                  <div>
                  <Button  onClick={()=>handleSubmit()} variant="outlined" size="medium">
                    Publish
                  </Button>
                  </div>
                  </Box>
       </div>
      
    </div>
  );
};

export default Write;
