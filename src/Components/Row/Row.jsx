import React from 'react'
import S from './styles.module.css'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

function Row({left,right}) {
    return(
        <section>
           <div className = {S.leftSection}>
              <ErrorBoundary> 
                {left}
              </ErrorBoundary> 
           </div>
           <div className = {S.rightSection}>
              <ErrorBoundary> 
                {right}
              </ErrorBoundary> 
           </div>
       </section>
       );
}

export default Row
