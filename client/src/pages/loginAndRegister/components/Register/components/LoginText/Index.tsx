import Text from '../../../../../../components/text/Text/Text';

const LoginText = () => {
  return (
    <Text margin='20px 0px'>
      Já possui uma conta ?
      <Text 
        className='darker-on-hover-or-click'
        color='#FF6700'
        inline={true}
        text=' Entre Aqui'
      />
    </Text>
  );
}

export default LoginText;