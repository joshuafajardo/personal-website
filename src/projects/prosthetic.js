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
        super()
    };
    
    render() {
        return (
            <Layout>
                <Styles>
                    <div>
                        <h1>Prosthetic Simulator</h1>
                        <p>Figuring out how to make prosthetics feel "natural"</p>
                    </div>
                    
                    <h2>Haptic Feedback (n.)</h2>
                    <p>
                        Communication through the use of physical touch.
                    </p>
                    <br/>
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
                        To fill in this research gap, we developed a haptic feedback-equipped prosthetic arm. To accompany this, I spear-headed
                        the development of an object lifting simulator. With these two technologies, we can very easily measure the forces applied
                        by a user and vary the feedback amplification within testing trials.
                    </p>

                    <h2>Architecture</h2>
                    <p>
                        In order to cleanly divide the tasks required to make the simulator possible, I followed the Model-View-Controller (MVC)
                        architecture while diverging from it as necessary. 
                    </p>
                    
                </Styles>
            </Layout>
            
        );
    };

};