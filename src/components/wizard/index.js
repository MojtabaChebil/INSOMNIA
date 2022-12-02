import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import WizardHorizontal from './WizardHorizontal'
import BreadCrumbs from '@components/breadcrumbs'
import './index.css'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Form Wizard' breadCrumbParent='Form' breadCrumbActive='Form Wizard' />
      <Row>
        <Col sm='12'>
          <WizardHorizontal />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Wizard
