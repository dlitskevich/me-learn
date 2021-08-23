import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsyncData } from '../../hooks/useAsyncData';
import { ICourseInfo } from '../../types/ICourseInfo';
import { CourseInfo } from './CourseInfo';

interface Props{
  title:string
}

export const CourseListPage = () => {
  const { title } = useParams<Props>();
  const courses = useAsyncData<ICourseInfo[]>(() => getCourseListInfo(title));

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {!courses.isLoading
          ? courses.data.map((el, i) => <CourseInfo key={`info_${title + i}`} title={el.title} link={el.link} progress={el.progress} />)
          : null}
      </div>
    </div>

  );
};
CourseListPage.defaultProps = {
  title: 'english',
};

const getCourseListInfo = (title:String) => {
  if (!localStorage.getItem(`info_${title}`)) {
    return import(`../../data/${title}/courses`).then((info) => {
      localStorage.setItem(`info_${title}`, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(`info_${title}`) || '[]'));
};
