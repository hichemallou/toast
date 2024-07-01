import type { Variant } from '@pheralb/toast';
import type { CodeBlockProps } from './examples.types';

import { useState } from 'react';
import { Button } from '@/ui/button';
import { useToast } from '@pheralb/toast';

const UseToastCodeBlock = (props: CodeBlockProps) => {
  return (
    <pre
      style={{
        backgroundColor: '#101010',
        color: '#FFFFFF',
        margin: '0',
      }}
      data-language="ts"
      data-theme="vesper"
    >
      <code data-language="ts" data-theme="vesper" style={{ display: 'block' }}>
        <span data-line="">
          <span style={{ color: 'rgb(255, 255, 255)' }}>toast.</span>
          <span style={{ color: 'rgb(255, 199, 153)' }}>{props.value}</span>
          <span style={{ color: 'rgb(255, 255, 255)' }}>({`{`}</span>
        </span>
        <span data-line="">
          <span style={{ color: 'rgb(255, 255, 255)' }}> text: </span>
          <span style={{ color: 'rgb(153, 255, 228)' }}>
            &apos;A {props.label} toast 🚀&apos;
          </span>
          <span style={{ color: 'rgb(255, 255, 255)' }}>,</span>
        </span>
        <span data-line="">
          <span style={{ color: 'rgb(255, 255, 255)' }}> description: </span>
          <span style={{ color: 'rgb(153, 255, 228)' }}>
            &apos;✨ A beautiful toast library for React&apos;
          </span>
        </span>
        <span data-line="">
          <span style={{ color: 'rgb(255, 255, 255)' }}>{`});`}</span>
        </span>
      </code>
    </pre>
  );
};

const UseToastExamples = () => {
  const [toastVariant, setToastVariant] = useState<Variant>('success');
  const variants: Variant[] = ['success', 'error', 'warning', 'info'];
  const t = useToast();

  const handleChangeVariant = (variant: Variant) => {
    setToastVariant(variant);
    t[variant]({
      text: `A ${variant} toast 🚀`,
      description: '✨ A beautiful toast library for React',
    });
  };

  return (
    <div>
      {variants.map((variant) => (
        <Button
          key={variant}
          variant="outline"
          className="w-full md:w-40"
          onClick={() => handleChangeVariant(variant)}
        >
          {variant}
        </Button>
      ))}
      <UseToastCodeBlock label={toastVariant} value={toastVariant} />
    </div>
  );
};

export default UseToastExamples;
