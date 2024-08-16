import React, { useRef } from 'react'
import styles from './MainButton.module.css'

type Props = {
    type: 'button'|'anchor'
    href?: string
    filltype?: 'default'|'borderonly'
    disableHoverEffect?: boolean
    children: string
    submit?: boolean
    icon?: React.ReactElement
    backgroundColor?: string
    color?: string
}

const MainButton: React.FC<Props> = ({children, href="/", filltype='default', disableHoverEffect, type, submit, icon, backgroundColor='var(--principal-color)', color='white'}: Props) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const buttonAnchorRef = useRef<HTMLAnchorElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)

    const style = backgroundColor && filltype === 'default' ? 
    {backgroundColor: backgroundColor, color: color} : 
    backgroundColor && filltype === 'borderonly' ? 
    {backgroundColor: color, color: backgroundColor} : undefined

    const handleHoverEffect = (state: 'in'|'out') => {
        const element = type === 'button' ? buttonRef.current : buttonAnchorRef.current
        const elementColor = filltype === 'borderonly' ? (color||'') : (backgroundColor||'')
        const elementBackgroundColor = filltype === 'borderonly' ? (backgroundColor||'') : (color||'')
        const elementIcon = iconRef.current?.firstElementChild as SVGSVGElement

        if(state === 'in'){
            if(element){
                element.style.backgroundColor = elementBackgroundColor
                element.style.color = elementColor
                if(icon && elementIcon){
                    elementIcon.style.fill = elementColor
                }
            }
        }else{
            if(element){
                element.style.backgroundColor = elementColor
                element.style.color = elementBackgroundColor
                if(icon && elementIcon){
                    elementIcon.style.fill = elementBackgroundColor
                }
            }
        }
    }

    const defaultProps = {
        className: styles.button,
        style: {...style, borderColor: backgroundColor},
        onMouseEnter: () => !disableHoverEffect && handleHoverEffect('in'),
        onMouseOut:() => !disableHoverEffect && handleHoverEffect('out')
    }

    switch(type){
        case 'button':
            return (
                <button ref={buttonRef} type={submit ? 'submit' : 'button'} {...defaultProps}>
                    <>
                        {icon &&
                            <div ref={iconRef} className={styles.containerIcon}>
                                {React.cloneElement(icon, {className: styles.icon})}
                            </div>
                        }
                        {children}
                    </>
                </button>
            )
        case 'anchor':
            return (
                <a ref={buttonAnchorRef} {...defaultProps} href={href}>
                    <>
                        {icon &&
                            <div ref={iconRef} className={styles.containerIcon}>
                                {React.cloneElement(icon, {className: styles.icon})}
                            </div>
                        }
                        {children}
                    </>
                </a>
            )
    }
}

export default MainButton