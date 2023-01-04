import { ReactNode } from 'react';

interface CoursesProps {
  children: ReactNode;
}

const Courses = (props: CoursesProps) => {
  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
      {props.children}
    </div>
  );
};

export default Courses;
