import './App.css';
import AppButton from './components/AppButton';
import AppText from './components/AppText';

function App() {
  return (
    <>
      <AppText Tag='h3' h3 text='react' />
      <AppText Tag='h3'italic span text='react' />
      <AppText Tag='h3'italic p text='react' />
      <AppText Tag='h3'hidden text='react' />
      <AppText Tag='h3'title text='react' />
      <AppButton aboutButton />
      <AppButton contactButton />
    </>
  );
}

export default App;
