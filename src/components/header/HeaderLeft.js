import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import history from '../../history';
import { setBurgerBtnActive } from '../actions';

import * as s from './styledHeaderLeft';

class HeaderLeft extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            navArrow: Object.values(this.props.elements).map(el => !el.hasOwnProperty('items')),
            idHoveredMenu: null
        }

        this.iconsArr = Object.values(this.props.elements).map(el => el.icon);
        this.arrFromObj = Object.values(this.props.elements);
    }

    componentDidMount() {
        this.arrWithUrls = Object.values(this.props.elements).map(el => {
            return Object.values(el).map(el => {
                return Object.values(el)
            });
        });

        this.arrShouldLink = Object.values(this.props.elements).map(el => {
            if(el.hasOwnProperty('url'))
                return el.url;
        });
    }

    onBurgerBtnClick = () => {
        this.props.setBurgerBtnActive(!this.props.burgerBtn);

            this.setState({ 
                navArrow: Object.values(this.props.elements).map(el => !el.hasOwnProperty('items'))
            });
    }

    onNavArrowClick = id => {
        if(this.props.burgerBtn) {
            const navArrow = this.state.navArrow.map((el, index) => id === index ? !el : el);

            this.setState({ navArrow });
        }
    }

    onIconContainerClick = event => {
        const id = event.currentTarget.id;

        this.onNavArrowClick(parseInt(id));

        if(this.arrShouldLink[id])
            history.push(this.arrShouldLink[id]);
    }

    onIconContainerClickHover = event => {
        if(!this.props.burgerBtn) {
            const id = (event === null) ? null : parseInt(event.currentTarget.id);
            if(id !== null && !this.arrFromObj[id].hasOwnProperty('url'))
                this.setState({ idHoveredMenu: id });
            else
                this.setState({ idHoveredMenu: null });
        }
    }

    renderblueBar = (url, int = null) => {
        const { pathname } = this.props.location;
        let check = false;

        if(int !== null) {
                if(this.arrFromObj[int].hasOwnProperty('url')) {
                    if(this.arrFromObj[int].url === pathname) 
                        check = true;
                } else if(this.arrFromObj[int].hasOwnProperty('items')) {
                    if(!this.state.navArrow[int] && this.state.idHoveredMenu !== int) 
                        Object.values(
                            this.arrFromObj[int].items).forEach(el => (el.url === pathname) ? check = true : null
                        );
                }
                return check;
        } else if(url) {
            if(url === pathname) 
                return true;
        } else 
            return false;
    }

    render() {
        const { elements, burgerBtn } = this.props;
        console.log(this.state)
        return(
            <s.HeaderLeft openBurger={burgerBtn}>
                <s.HeaderFixed openBurger={burgerBtn}>
                    <s.NavBurger onClick={this.onBurgerBtnClick} openBurger={burgerBtn}>
                        <s.Burger iconName="GlobalNavButton" />
                    </s.NavBurger>
                    
                    <s.Nav show={burgerBtn} onMouseLeave={() => this.onIconContainerClickHover(null)}>
                        {Object.keys(elements).map((title, index) => {
                            return(
                                <React.Fragment key={index}>
                                    <s.NavWrapper id={index} onClick={this.onIconContainerClick} 
                                        onMouseEnter={this.onIconContainerClickHover}
                                        activeBar={this.renderblueBar(null, index)}
                                        pseudoClassActive={this.state.idHoveredMenu === null}
                                    >
                                            <s.NavIcons iconName={this.iconsArr && this.iconsArr[index]} />

                                            <s.NavTitle show={burgerBtn}>{title.replace('_', ' ')}</s.NavTitle>

                                        {
                                            this.arrFromObj[index].items && 
                                                <s.IconContainer show={burgerBtn}
                                                    
                                                >
                                                    <s.ArrowIcon iconName="ChevronUpMed" 
                                                        rotate={this.state.navArrow[index]}
                                                    />
                                                </s.IconContainer>
                                        }
                                        
                                        {
                                            !burgerBtn && this.state.idHoveredMenu === index && 
                                                <s.NestedContainer 
                                                    heightCalc={
                                                        Object.keys(this.arrFromObj[index].items).length * 2 + 3
                                                    }
                                                >
                                                    <s.NestedTitle>
                                                        {title.replace('_', ' ')}
                                                    </s.NestedTitle>

                                                    <s.NavUnderTitle>
                                                    {
                                                        Object.keys(this.arrFromObj[index].items).map((item, num) => {
                                                            return(
                                                                <s.NestedUnderItems key={num} 
                                                                    activeBar={
                                                                        this.renderblueBar(
                                                                            this.arrWithUrls[index][1][num].url
                                                                        )
                                                                    }
                                                                >
                                                                    <s.NestedItemsLink 
                                                                        to={this.arrWithUrls[index][1][num].url}
                                                                    >
                                                                        {item}
                                                                    </s.NestedItemsLink>
                                                                </s.NestedUnderItems>
                                                            );
                                                        })
                                                    }
                                                    </s.NavUnderTitle>
                                                </s.NestedContainer>
                                        }
                                    </s.NavWrapper>

                                    {
                                        burgerBtn && this.state.navArrow[index] && 
                                        this.arrFromObj[index].hasOwnProperty('items') &&
                                            <s.NavUnderTitle show={this.props.burgerBtn.toString()}>
                                                {
                                                    Object.keys(this.arrFromObj[index].items).map((item, num) => {
                                                        return(
                                                            <s.UnderItems key={num} 
                                                                activeBar={
                                                                    this.renderblueBar(
                                                                        this.arrWithUrls[index][1][num].url
                                                                    )
                                                                }
                                                            >
                                                                <s.ItemsLink to={this.arrWithUrls[index][1][num].url}>
                                                                    {item}
                                                                </s.ItemsLink>
                                                            </s.UnderItems>
                                                        );
                                                    })
                                                }
                                            </s.NavUnderTitle>
                                    }
                                </React.Fragment>
                            )
                        })}
                    </s.Nav>
                </s.HeaderFixed>
            </s.HeaderLeft>
        )
    }
};

const mapStateToProps = ({ headerBtnActive }) => {
    return { burgerBtn: headerBtnActive.burgerBtn };
};

export default withRouter(connect(mapStateToProps, { setBurgerBtnActive })(HeaderLeft));