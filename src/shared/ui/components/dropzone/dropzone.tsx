'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

import { CapaIcon } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';

import st from './dropzone.module.scss';

export function Dropdzone({
  required,
  name,
  onDrop,
  value,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
}) {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: incomingFiles => {
      if (onDrop) {
        onDrop(incomingFiles[0] || null);
      }
    },
  });

  const file = value ?? acceptedFiles[0];

  return (
    <div className={st.container}>
      <div {...getRootProps({ className: 'dropzone' })} className={st.inner}>
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <CapaIcon />
        <button
          className={st.chooseFile}
          type="button"
          onClick={e => {
            e.stopPropagation();
            open();
          }}
        >
          Choose new file
        </button>
        <Text color="black" size="lg">
          Selected file: {file ? file.name : 'No file selected'}
        </Text>
        <Text color="neutral" size="lg" className={st.textAlign}>
          Attach any relevant documents, resumes, proposals, or briefs (Max
          size: 10MB)
        </Text>
      </div>
    </div>
  );
}
