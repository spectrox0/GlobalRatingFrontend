import React from 'react';
import styled from 'styled-components';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { QUERY_LEYESNORMATIVAS } from './helpers/graphql/querys'
import { useQuery } from '@apollo/react-hooks';

import {
    Container,
    Row,
    Col,
} from 'reactstrap';

export default function LeyesNormativas() {

    const { data, loading, error, refetch } = useQuery(QUERY_LEYESNORMATIVAS);

    const LeyesNormativas = () => {
        const innerJSX = data.leyesNormativas.map(leyesNormativas =>
            <Row key={leyesNormativas._id}>
                <h4>{leyesNormativas.titulo}</h4>
                <div>
                    <p>{leyesNormativas.descripcion}</p>
                    <p>{leyesNormativas.htmlScribd}</p>
                    <p>{leyesNormativas.pais.nombre}</p>
                </div>
            </Row>)
        return innerJSX;
    }
    return (!data && loading) ?
        <div> <span> cargando </span> </div>
        :
        <LeyesNormativasContent>
            <div className="wrapper">
                <div>
                    <Container>
                        <Row>
                    <h3> Leyes Normativas </h3>
                        <LeyesNormativas />
                        </Row>
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem disabled>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">
                                    1
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    2
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    3
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    4
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    5
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                    </Container>
                </div>
            </div>
        </LeyesNormativasContent>


}

const LeyesNormativasContent = styled.div`

div{
    text-align: justify;
    text-justify: inter-word;
}

h3{
  color:#4169E1;
  text-transform:uppercase; 
  align-items:center; 
  justify-content:center; 
  margin: 2rem auto;
}

h4{
    display: inline-block;
    font-size: 21px;
    margin-right: 1rem;
    margin-bottom: 5px;
    color: #0099cc;
    font-weight: 300;
    width: 100%;
}

p{
    display: inline-block;
    width: 100%;
    margin-bottom:1rem; 
    justify-content:center; 
    font-size: 1rem;
}

li{
    
    width: 100%;
    margin-bottom:1rem; 
    font-size: 1rem;
}


.sangria{
    margin-left: 1 rem;
    text-indent: 1%;
}

Pagination.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    listClassName: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
  };
  
  PaginationItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };
  
  PaginationLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    first: PropTypes.bool,
    last: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
  };

`
