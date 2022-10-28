import './ContainerStyles.sass'

const Container = (props) => {
  return (
    <div className='body'>
      <div className='container'>
      { props.children }
      </div>
    </div>
  );
};
export default Container;
