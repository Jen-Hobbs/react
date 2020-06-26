# Component of children

conditional to open instead of using dom. 

{this.props.children}

component changes to 

<CoursePanel (what is consistant between the children)>what to add to this.props.children</CoursePanel>



# Proptypes

import PropTypes from 'prop-types'

used for validation for the developer wont break the app but will provide warning for developer

find list of proptypes can be found online

![1592963098190](C:\Users\Jen\AppData\Roaming\Typora\typora-user-images\1592963098190.png)

PropsTypes.string.isRequired // fires another warning saying title should always be used

//if no children are passed provide a default

CoursePanel.defaultProps ={

​	children: 'Empty Panel'

}

# React router

make what is being shown conditional

careful about the version as it changes often

wrap router to the whole application and import it

//path and will be from home component 

<Route path="/" component={Home}/> 

"'/" will render on everypage due to it being on everypage add: 

<Route path="/" component={Home} exact/> 

anchor tag for components in single page app

<link to="/">Home</link>

links and routes can be nested

//whatever matches this format add it from link

<Route path="/:Breed" component={Dog} exact/> 

:Breed is also found in props so you can say this.props.match.params.breed 

`https... ${breed} `

back ticks ` can be added for es6

# final

2.5 hrs

d2l

nothing covered today will be covered on final

