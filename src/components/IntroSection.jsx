import React from "react"

// export default function IntroSection(){
// 	return(
// 		<section>
// 			<h1 className="centered">
// 				Result Univercity
// 			</h1>
// 			<h3 className="centered" style={{color: '#666'}}>
// 				Университет Frontend-разработки, который насыщает IT-сферу квалифицированными специалистами
// 			</h3>
// 		</section>
// 	)
// }

export default function IntroSection(){
	return React.createElement('section', null, [
		React.createElement('h1', {className: 'centered', key: 1}, 'Result Univercity'),
		React.createElement('h3', {className: 'centered', style: {color: '#666'}, key: 2}, 'Университет Frontend-разработки, который насыщает IT-сферу квалифицированными специалистами'),
	])
}