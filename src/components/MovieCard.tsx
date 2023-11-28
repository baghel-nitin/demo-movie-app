import { FC, memo } from 'react'

export interface Props {
  item: MovieProps
}

export interface MovieProps {
  name: string
  'poster-image': string
}

const MovieCard: FC<Props> = ({ item }) => {
  let missingImagePlaceholder = 'placeholder_for_missing_posters.png'
  let { name, 'poster-image': posterImage } = item

  return (
    <div className='mb-8 '>
      <div className='group relative text-textDark'>
        <img
          src={
            posterImage.includes('missing')
              ? `https://test.create.diagnal.com/images/${missingImagePlaceholder}`
              : `https://test.create.diagnal.com/images/${posterImage}`
          }
          alt='noImage'
          className={`w-[100%]`}
        />
      </div>
      <div className='flex w-[140px] justify-start text-left text-[17px] y9:w-[180px] '>
        <p className='mt-2 font-display text-white'>{name}</p>
      </div>
    </div>
  )
}

export default memo(MovieCard)
