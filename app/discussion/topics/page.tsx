import Button from '../../../components/button/Button'
import { CATEGORIES } from '../../../data/postData'
import { capitalize } from '../../../lib/utils'

function Topics(){
    return (
        <>
            <h1>All Topics</h1>
            <ul>
                {
                    CATEGORIES.map(
                        (category) => (
                            <li key={category}>
                                <Button
                                    href={`/topics/${category}`}
                                    label={capitalize(category)}
                                />
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default Topics