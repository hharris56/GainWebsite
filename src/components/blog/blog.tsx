"use client"

import {useIsMobile} from "../../hooks/mobileHooks"
import "./blog.css"

interface BlogProps{
    title: string,
    date: string,
    tags?: string[],
    children: any
}

function BlogPost(props: BlogProps){
    const isMobile = useIsMobile()

    return (
        <div className="post-container" style={{marginRight: !isMobile? "2rem" : ""}} key={props.title}>
            <div className={"line-decoration" + (isMobile? "-mobile" : "")} />
            <div>
                <h3 style={{marginBottom: "0rem", marginTop: "0rem"}}>{props.title}</h3>
                <a style={{color: "var(--secondary-text-color)", fontSize: "0.75em"}}>{props.date}</a>
                {props.tags? <div className="tags-container">
                    {props.tags.map(t => Tag(t))}
                </div> : <></>}
                <Break/>
                <div className="post-content">
                    {props.children}
                </div>
                <div className='post-divider' />
            </div>
        </div>
    )
}

function Tag(name: string){
    return (
        <div className="tag-button" key={name}>
            # {name}
        </div>
    )
}

function Break(){
    return (
        <div style={{margin: "1em"}} />
    )
}

function Quote(props: {children: any}){
    return (
        <div className="quote">
            "{props.children}"
        </div>
    )
}

export {BlogPost, Break, Quote}