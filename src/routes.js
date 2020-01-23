import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Classlist from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default(
    <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.
                  </p>
                </div>
              )}
            />
          </Switch>
)