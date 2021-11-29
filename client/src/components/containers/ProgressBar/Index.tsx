import validateCirclesThatMustBeEnable from './services/validateCirclesThatMustBeEnable';
import CircleWithIcone from '../CircleWithIcone/Index';
import Bar from '../Bar/Index';
import './styles.scss';

interface props {
  level:0|1|2;
  margin?:string;
}

const ProgressBar = (props:props) => {
  const circleStatus = validateCirclesThatMustBeEnable(props.level);
  return (
    <div className='progress-bar-container flex-row' style={{ margin:props.margin }}>
      <CircleWithIcone
        background='#06cf06'
        iconeClass='fas fa-lock'
        disable={circleStatus[0]}
      />
      <Bar
        className='first-bar'
        color='#06cf06'
        disable={true}
        width='50%'
      />
      <CircleWithIcone
        background='#0096FF'
        iconeClass='fas fa-address-card'
        disable={circleStatus[1]}
      />
      <Bar
        className='last-bar'
        color='#06cf06'
        disable={circleStatus[2]}
        width='50%'
      />
      <CircleWithIcone
        background='red'
        iconeClass='fas fa-flag'
        disable={circleStatus[2]}
      />
    </div>
  );
}

export default ProgressBar;