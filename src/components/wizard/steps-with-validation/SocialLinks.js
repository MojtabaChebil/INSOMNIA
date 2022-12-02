import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const SocialLinks = ({ stepper, type , gender }) => {
  const { register, errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      alert('submitted')
    }
  }

  return (
    <Fragment>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      
        <Row>
        <Label>Avez-vous une idée sur le SIDA ?</Label>
          <FormGroup check inline>
         
          <Label check>
          <Input type='radio' name='ex1' defaultChecked style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}/> Oui
          <Input type='radio' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}} /> Non   
          </Label>
        </FormGroup>

       </Row>
       <Row>
       <Label> Quels sont les signes de l'infection par le VIH ?</Label>
        <FormGroup check inline>
       
        <Label check>
            <Input type='checkbox' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}} /> Glandes enflées 
            <Input type='checkbox' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}/> toux sèche ou essoufflement (non dû à un rhume)
            <Input type='checkbox' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}/> sueurs nocturnes
          </Label>
        </FormGroup>
        </Row>
        
        <Row>
        <Label>Combien de temps faut-il pour développer les signes de VIH ?</Label>
          <FormGroup check inline>
         
          <Label check>
          <Input type='checkbox' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}} /> 10 Jours 
            <Input type='checkbox' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}/> 3 Semaines
            <Input type='checkbox' name='ex1' style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}/> 2 mois ou Plus
          </Label>
        </FormGroup>

       </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple type='submit' className={`${gender==='Femme' ? 'back-femme' : 'back-homme'}`} onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='success' className='btn-submit'>
            Submit
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
