import React from 'react'
import Container from './styles'
import { padTexts } from '../../../../helpers'
import { TypeBadge } from '../../../shared'
import { Loading } from '../../../shared'

const MovesScreen = ({ moveInfo, loading }) => {
  const {
    name,
    learnedAt,
    accuracy,
    damageClass,
    power,
    pp,
    type,
    effectDescription,
    learnMethod,
    moveDescription,
  } = moveInfo

  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="flex">
            <div className="move-left">
              <div className="move-name">{name}</div>
              <p>{padTexts('Accuracy', accuracy, '.', 20)}</p>
              <p>{padTexts('Power', power, '.', 20)}</p>
              <p>{padTexts('pp', pp, '.', 20)}</p>
            </div>
            <div className="move-right">
              <TypeBadge
                name={type}
                style={{
                  fontSize: '0.75rem',
                  width: '120px',
                }}
              >
                {type}
              </TypeBadge>
              <p>{padTexts('Class:', damageClass, '.', 20)}</p>
              <p>{padTexts('Learned At:', learnedAt, '.', 20)}</p>
              <p>{padTexts('Method:', learnMethod, '.', 20)}</p>
            </div>
          </div>
          <div className="move-description">
            <p>
              <strong>Description:</strong> {moveDescription}
            </p>
            <hr />
            <p>
              <strong>Effect:</strong> {effectDescription}
            </p>
          </div>
        </>
      )}
    </Container>
  )
}

export default MovesScreen
