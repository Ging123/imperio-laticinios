import Text from '../../../../../../components/text/Text/Text';

const DontHaveAnAccount = () => {
  return (
    <Text margin='20px 0px'>
      Não tem uma conta ?
      <Text 
        className='darker-on-hover-or-click'
        color='#FF6700'
        inline={true}
        text=' Cadastre-se'
      />
    </Text>
  );
}

export default DontHaveAnAccount;