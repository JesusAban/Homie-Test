import React from 'react';
//Components
import Card from 'src/components/Card';
import CardBody from 'src/components/Card/CardBody';
import CardFooter from 'src/components/Card/CardFooter';
import CardDepartmentBanner from './CardDepartmentBanner';
import SlideDepartment from 'src/components/SlideDepartment';
import CardDepartmentInfo from './CardDeparmentInfo';
import Currency from 'src/components/Currency';
//Redux
import { useDispatch } from 'react-redux';
import { selectDepartment } from 'src/actions';
//Styles
import './CardDepartment.css';


function CardDepartment(props) {

    const { department } = props;
    
    const dispatch = useDispatch();

    const getClasses = () => {
        if(department.selected){
            return 'Card-Department-Active';
        }
        
        return "Card-Department-Default";
    };

    const onClick = () => {
        dispatch(selectDepartment(department));
    };

    return (
        <Card id={ department.id } className="Card-Department" onClick={ onClick }>
            <CardBody className="Card-Department-Body">
                <div className={ getClasses() }>
                    <Currency value={ department.price } />
                </div>
                <SlideDepartment
                    images={ department.photos }
                />
                {
                    department.homieExclusive === true ? <CardDepartmentBanner /> : null
                }
            </CardBody>
            <CardFooter>
                <div className="Card-Department-Footer-Title">
                    { department.address }
                </div>
                <CardDepartmentInfo department={ department }/>
            </CardFooter>
        </Card>
    );
}

export default CardDepartment;