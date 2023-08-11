import { useState } from 'react';
import data from './data';
import Person from './component/Person';

function App() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const nextPerson = () => {
  if (reviewIndex < data.length - 1) {
    setReviewIndex((prevIndex) => prevIndex + 1);
  } else {
    // Reset to the first review when reaching the end
    setReviewIndex(0);
  }
};

const prevPerson = () => {
  if (reviewIndex > 0) {
    setReviewIndex((prevIndex) => prevIndex - 1);
  } else {
    // Wrap around to the last review when reaching the beginning
    setReviewIndex(data.length - 1);
  }
};

  return (
    <>
      <h1>Our Review</h1>
      <Person review={data[reviewIndex]} nextPerson={nextPerson}  prevPerson={prevPerson}/>
    </>
  );
}

export default App;
