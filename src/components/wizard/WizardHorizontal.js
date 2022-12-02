import { useRef, useState,useEffect } from 'react'
import Wizard from '@components/wizard'
import Piberte from './steps-with-validation/Piberte'
import SocialLinks from './steps-with-validation/SocialLinks'
import AccountDetails from './steps-with-validation/AccountDetails'
import './index.css'
import { GetAllQuestion } from '../../redux/actions/question/Index'
import { useDispatch, useSelector } from "react-redux";
const WizardHorizontal = (props) => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)
  const question = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const [questionData, setQuestionData] = useState([]);
  useEffect(() => {
    
      dispatch(GetAllQuestion());
   

  }, [])
  useEffect(() => {
    if (question.success) {
      setQuestionData(question.data);
    }

  }, [question])
  console.log("quest",questionData)
  const steps = [
    {
      id: 'account-details',
      title: 'Information Personnelles',
      subtitle: 'Entrez Vos Données',
      content: <AccountDetails stepper={stepper} type='wizard-horizontal' gender={props.gender==='Femme' ? 'Femme' : 'Homme'}/>
    },
    {
      id: 'step-address',
      title: 'Puberté',
      subtitle: 'Puberté',
      content: <Piberte stepper={stepper} type='wizard-horizontal' gender={props.gender==='Femme' ? 'Femme' : 'Homme' } data={questionData}/>
    },
    {
      id: 'VIH',
      title: 'SIDA',
      subtitle: 'VIH',
      content: <SocialLinks stepper={stepper} type='wizard-horizontal' gender={props.gender==='Femme' ? 'Femme' : 'Homme'} />
    }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} gender={props.gender==='Femme' ? 'Femme' : 'Homme'} />
    </div>
  )
}

export default WizardHorizontal
