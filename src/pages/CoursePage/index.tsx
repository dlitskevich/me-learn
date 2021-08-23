import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsyncData } from '../../hooks/useAsyncData';
import { IUnitInfo } from '../../types/IUnitInfo';
import { UnitInfo } from './UnitInfo';
import './index.css';

interface Props{
  title:string
}

export const CoursePage = () => {
  const { title } = useParams<Props>();
  const courses = useAsyncData<IUnitInfo[]>(() => getUnitInfoList(title));

  return (
    <div>
      <h1>{title.charAt(0).toUpperCase() + title.substring(1)}</h1>
      <div>
        {/* {!courses.isLoading
          ? courses.data.map((el, i) => <UnitInfo key={`info_${title + i}`} title={el.title} link={el.link} progress={el.progress} />)
          : null} */}
      </div>
    </div>

  );
};
CoursePage.defaultProps = {
  title: 'english',
};

const getUnitInfoList = (title:String) => {
  if (!localStorage.getItem(`info_${title}`)) {
    return import(`../../data/${title}/courses`).then((info) => {
      localStorage.setItem(`info_${title}`, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(`info_${title}`) || '[]'));
};
