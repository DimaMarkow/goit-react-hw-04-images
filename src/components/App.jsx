import ImageFinder from 'components/ImageFinder/ImageFinder';
// import css from 'components/ImageFinder/imagefinder.module.css';

export const App = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ImageFinder></ImageFinder>{' '}
    </div>
  );
};
