import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function MaxHeightTextarea() {
  return (
    <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="메모를 입력해 주세요"
      style={{ width: 650, height:150 }}
    />
  );
}