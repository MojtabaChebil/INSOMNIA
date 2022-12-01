import * as yup from 'yup'
import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Label, Input, FormGroup, Row, Col, Button } from 'reactstrap'
import Select from 'react-select'

const AccountDetails = ({ stepper, type , gender}) => {
  const SignupSchema = yup.object().shape({
    [`nom-${type}`]: yup.string().required(),
    [`prenom-${type}`]: yup.string().required(),
    [`age-${type}`]: yup.number().required(),
    [`email-${type}`]: yup.string().email().required(),
    [`pays-${type}`]: yup.string().required(),
    
  })
  const colourOptions = [
    { value: 'Homme', label: 'Homme' },
    { value: 'Femme', label: 'Femme' },
    
  ]
  
  const { register, errors, handleSubmit, trigger } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Information Personnelles</h5>
        <small className='text-muted'>Entrez Vos Données .</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`nom-${type}`}>
              Nom
            </Label>
            <Input
              name={`nom-${type}`}
              id={`nom-${type}`}
              placeholder='Entrez Votre Nom'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`nom-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`prenom-${type}`}>
              Prénom
            </Label>
            <Input
              name={`prenom-${type}`}
              id={`prenom-${type}`}
              placeholder='Entrez Votre Prenom'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`prenom-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`age-${type}`}>
              Age
            </Label>
            <Input
            type="number"
              name={`age-${type}`}
              id={`age-${type}`}
              placeholder='Entrez Votre Age '
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`age-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`age-${type}`}>
            Sexe
            </Label>
            <Select
               
               className='react-select'
               classNamePrefix='select'
               defaultValue={colourOptions[0]}
               options={colourOptions}
               isClearable={false}
             />
          </FormGroup>

           
          
        </Row>
        <Row>
        <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`email-${type}`}>
              Email
            </Label>
            <Input
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='john.doe@email.com'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`email-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`pays-${type}`}>
              Pays
            </Label>
            <Input
              name={`pays-${type}`}
              id={`pays-${type}`}
              placeholder='Entrez Votre Pays'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`pays-${type}`] })}
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>précédant</span>
          </Button.Ripple>
          <Button.Ripple type='submit' className={`${gender==='Femme' ? 'back-femme' : 'back-homme'}`}>
            <span className='align-middle d-sm-inline-block d-none'>Suivant</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
