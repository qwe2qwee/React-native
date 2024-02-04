import React from 'react';
import Inputs from '../components/inputsLong/Inputs';
import InputLongPass from '../components/inputsLong/InputLongPass';
import InputLong from '../components/inputsLong/InputLong';
import Button from '../components/Button';

const Sinup = () => {
  return (
    <>
      <Inputs name1={'الاسم الاول'} name2={'الاسم الاخير'}/>
      <InputLong name={'الجوال'}/>
      <InputLong name={'البريد الإلكتروني'}/>
      <Inputs name1={'المدينة'} name2={'الدائرة'}/>
      <InputLongPass name={'كلمة المرور'}/>
      <InputLongPass name={'تأكيد كلمة المرور'}/>
      <Button/>

    </>
  );
}

export default Sinup;
