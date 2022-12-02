import { Fragment, useEffect } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input, Alert } from 'reactstrap'


const Piberte = ({ stepper, type, gender,data }) => {
  const { register, errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }
console.log("data =====>",data)
  return (
    <Fragment >
      {/* <div className='content-header'>
        <h5 className='mb-0'>Piberté</h5>
        <small>Piberte.</small>
      </div> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {data.slice(0,3).map(question=>{
          return(


            <Row style={{
              display:'flex',
              justifyContent:'center'
            }}>
            <Label  for={`landmark-${type}`} tag={Col} md='12'>
          {question.question}
            </Label>
            {question.type==="check"?(    
              <div>       
            <FormGroup check inline style={{marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}>
          
          
          <Label check>
            <Input type='radio' name='ex1' defaultChecked /> Oui
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type='radio' name='ex1' /> Non
          </Label>
        </FormGroup>
        </div> ):
         <Input
         type='text'
         id={`question`}
         innerRef={register({ required: true })}
         style={{width:"300px",marginLeft:"60px",marginTop:"10px",marginBottom:"15px"}}
        //  className={classnames({ 'is-invalid': errors[`first-name-${type}`] })}
       />
        }

          
          </Row>)
        }
        )
      }


        {/* <Alert color='success'>

          <div className='alert-body'>
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
            cupcake cupcake.
          </div>
        </Alert> */}

        <div className='d-flex justify-content-between'>
          <Button.Ripple type='submit' className={`${gender === 'Femme' ? 'back-femme' : 'back-homme'}`}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' className={`${gender === 'Femme' ? 'back-femme' : 'back-homme'}`}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default Piberte
