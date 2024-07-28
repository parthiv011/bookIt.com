import { useMoveBack } from '../hooks/useMoveBack';

export const PageNotFound = () => {
  const moveBack = useMoveBack();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        height: '100vh',
      }}
    >
      <p style={{ fontSize: '35px' }}>Error 404: Page Not Found!🥲</p>
      <button
        onClick={moveBack}
        style={{
          outline: 'none',
          border: 'none',
          padding: '0 8px',
          textDecorationLine: 'underline',
          backgroundColor: 'white',
        }}
      >
        &larr; Go back
      </button>
    </div>
  );
};
