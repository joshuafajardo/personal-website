import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Components/Layout';

const Styles = styled.div`
    a {
        color: PowderBlue;
    }
    scroll-behavior: smooth;

    
`

export default class Prosthetic extends React.Component {
    constructor(props) {
        super(props);

    };
    
    render() {
        return (
            <Layout>
                <Styles>
                    <div>
                        <h1>Prosthetic Simulator</h1>
                        <p>Assessing kinesthetic feedback in prosthetics</p>
                    </div>
                    
                    <p>
                        In the fall of 2019, I joined the Embodied Dexterity Group (EDG) to do help conduct research on prosthetic devices. 
                        Our subgroup within EDG aims at better understanding how impactful haptic feedback can be in upper-limb prosthetics.
                        
                    </p>

                    <h2>Problem Statement</h2>
                    <p>
                        Much of the existing research on haptic feedback gives a binary response on haptic feedback's effectiveness.
                        The goal of the Prosthetic Simulator was to understand how big of a role this feedback plays. 
                        Specifically, we wanted to observe how it affected the amount of grasping force applied by a user trying to lift an object.
                    </p>
                    <p>
                        When lifting an object, there is a minimum amount of grasping force needed to move the object without slipping.
                        In practice, the force applied typically overshoots the minimum amount needed.
                        We can see describe this overshoot as a safety factor: force applied divided by minimum force required.
                        Our group's goal is that by varying the attenuation of the feedback received, we can observe corresponding safety factor 
                        changes applied by our test subjects.
                    </p>
                    <p>
                        
                    </p>
                    
                </Styles>
            </Layout>
            
        );
    };

};