import React from 'react';
import { IPhraseInfo } from '../../types/IPhraseInfo';

export const PhraseInfo = ({ phrase, progress }:IPhraseInfo) => (
  <div className="phrase-info container d-flex align-text-bottom">
    <span>{phrase}</span>
    <span className="ms-auto ">
      {`${progress || 0} %`}
    </span>
  </div>
);

PhraseInfo.defaultProps = {
  progress: 0,
};
