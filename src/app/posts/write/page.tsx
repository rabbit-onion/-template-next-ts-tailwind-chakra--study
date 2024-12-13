'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import MDEditor from '@uiw/react-md-editor';

export default function WritePage() {
  const [value, setValue] = useState<string | undefined>('**안녕하세요!**\n\n맛집 리뷰를 작성해주세요.');
  return (
    <Container>
      <div className='max-w-5xl mx-auto py-8'>
        <div className='mb-6'>
          <input type='text' placeholder='제목을 입력하세요' className='w-full text-3xl font-bold p-2 border-b outline-none focus:border-b-2 focus:border-teal-500' />
        </div>
        <div data-color-mode='light' className='sticky top-0'>
          <MDEditor value={value} onChange={setValue} preview='edit' height={500} visibleDragbar={false} />
        </div>
        <div className='mt-6 flex justify-end gap-2'>
          <button className='px-4 py-2 rounded bg-gray-200 hover:bg-gray-300'>임시저장</button>
          <button className='px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600'>발행하기</button>
        </div>
      </div>
    </Container>
  );
}
