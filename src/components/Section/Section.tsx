import React, { ReactNode } from "react";
import { ReactComponent as Line} from '../../assets/images/label-line.svg';

type SectionProps = {
  label?: string,
  className?: string,
  fullWidth?: boolean,
  light?: boolean,
  thin?: boolean,
  center?: boolean,
  children?: ReactNode
}

export default function Section({
  label, 
  className, 
  fullWidth, 
  light, 
  thin, 
  center, 
  children
}: SectionProps) {
  return (
    <div className={'section'.concat(className ? ` ${className}` : '')} data-testid="section">
      <div className={'section-inner border'.concat(
        ` ${light ? 'light' : 'dark'}`,
        ` ${thin ? 'thin' : 'regular'}`,
      )}>
        <div className={'content'.concat(fullWidth ? '' : ' padded')}>
          {
            label && (
              <div className={'label'.concat(center ? ' centered' : '')} data-testid="label">
                <div className="label-inner">
                  <Line />
                  {label.toUpperCase()}
                </div>
              </div>
            )
          }
          {
            children && (
              <div className="children" data-testid="children">
                {children}
              </div>  
            )
          }
        </div>
      </div>
    </div>
  )
}