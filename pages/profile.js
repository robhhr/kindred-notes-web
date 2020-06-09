import {useMutation, useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {withApollo} from '../apollo/client'
import {Layout, Note, TagsInput} from '../components'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
      interests
    }
    bookmarks {
      id
      content
      color
      font
      style
    }
  }
`

const UpdateInterestsMutation = gql`
  mutation UpdateInterestsMutation($interests: [String]!) {
    updateInterests(input: {interests: $interests}) {
      interests
    }
  }
`

const Profile = () => {
  const router = useRouter()
  const {data, loading} = useQuery(ViewerQuery)
  const [updateInterests] = useMutation(UpdateInterestsMutation)

  const handleInterestsChange = interests =>
    updateInterests({variables: {interests}}).then(router.reload)

  const handleInterestClick = ({target}) => {
    const interests = [...data?.viewer?.interests]
    interests.splice(target.dataset.idx, 1)
    handleInterestsChange(interests)
  }

  if (
    loading === false &&
    data.viewer === null &&
    typeof window !== 'undefined'
  ) {
    router.push('/signin')
  }

  if (data && data.viewer) {
    return (
      <Layout>
        <header className="wrapper">
          <h1 className="sr-only">Profile</h1>
        </header>
        <main className="main">
          <p className="profile__title">{data.viewer.email}</p>
          <label>
            <p className="title -center">Topics of Interest</p>
            <TagsInput
              className="input -center note__input"
              value={data.viewer.interests}
              onChange={handleInterestsChange}
              placeholder="Anxiety"
            />
          </label>

          <ul className="tags">
            {data.viewer.interests?.map((topic, idx) => (
              <li
                key={idx}
                data-idx={idx}
                className="tag"
                onClick={handleInterestClick}
              >
                {topic}&nbsp;&nbsp;&nbsp;✕
              </li>
            ))}
          </ul>
          <h2 className="title -center">Favourite Notes</h2>
          <ul className="note-grid">
            {data.bookmarks?.map(({id, content, color, style, font}) => (
              <li className="note-grid__cell" key={id}>
                <Link href={`/note/${id}`}>
                  <a className="link -no-ul">
                    <Note color={color} style={style} font={font}>
                      {content}
                    </Note>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <footer className="wrapper">
            <Link href="/signout">
              <a className="button -full">Sign out</a>
            </Link>
          </footer>
        </main>
      </Layout>
    )
  }

  return <p>Loading...</p>
}

export default withApollo(Profile)