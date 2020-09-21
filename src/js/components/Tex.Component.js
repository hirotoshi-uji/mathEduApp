// :: Tex.Component.js
// :: markdown 表式と tex 表式を読み解く component
// :: 参考文献
// :: https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
// :: :: 上記HPの Markdown => Tex と表記を変えた．

import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import {BlockMath, InlineMath} from 'react-katex';
import 'katex/dist/katex.min.css';

const _mapProps = (props) => ({
    ...props,
    escapeHtml: false,
    plugins: [
        RemarkMathPlugin
    ],
    renderers: {
        ...props.renderers,
        math: ({value}) => <BlockMath>{value}</BlockMath>,
        inlineMath: ({value}) => <InlineMath>{value}</InlineMath>
    }
});

const Tex = (props) => <ReactMarkdown {..._mapProps(props)} /> ;
export default Tex;