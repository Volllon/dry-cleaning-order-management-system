import React from 'react';
import AppForm from '../../components/forms/AppForm';
import PageWrapper from '../PageWrapper';

const PageRegistration: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <AppForm appType="registration" />
    </PageWrapper>
  );
}

export default PageRegistration;
