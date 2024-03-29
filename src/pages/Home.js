import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [equipment, setequipment] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} equipment={equipment} setEquipment={setequipment}/>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} equipment={equipment}/>
    </Box>
  );
};

export default Home;
