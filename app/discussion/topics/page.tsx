import Button from '../../../components/button/Button'
import { CATEGORIES } from '../../../data/postData'
import { capitalize } from '../../../lib/utils'

function Topics(){
    return (
        <>
            <h1 className='my-4 text-slate-300'> All Topics</h1>
            <ul>
                {
                    CATEGORIES.map(
                        category => (
                            <li key={category}>
                                <Button
                                    href={`/discussion/topics/${category}`}
                                    label={capitalize(category)}
                                    otherClasses='py-1 px-4 mb-4 text-gray-400'
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